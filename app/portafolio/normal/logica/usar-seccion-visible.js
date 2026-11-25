"use client";

import { useEffect, useState } from "react";
import { idInicio, seccionesNavegacion } from "../../navegacion/secciones";
import { cambioTema } from "../../tema/tema-portafolio";
import { temaTerminalActivo } from "../../tema/usar-tema-terminal";

function obtenerSecciones() {
  return seccionesNavegacion.map(({ id }) => document.getElementById(id)).filter(Boolean);
}

export function leerSeccionVisible(altoCabecera, secciones = obtenerSecciones()) {
  const { innerHeight: altoVentana, scrollY } = window;
  const altoPagina = document.documentElement.scrollHeight;

  if (scrollY > 0 && scrollY + altoVentana >= altoPagina - 1) {
    const destino = secciones.find(({ id }) => `#${id}` === window.location.hash);
    const arriba = destino?.getBoundingClientRect().top;
    if (arriba >= altoCabecera && arriba < altoVentana) return destino.id;
    return secciones.at(-1)?.id ?? idInicio;
  }

  const primeraSeccion = secciones[0];
  const margenAncla = primeraSeccion ? parseFloat(getComputedStyle(primeraSeccion).scrollMarginTop) : 0;
  // El enlace activo sigue la posición de las anclas bajo la cabecera.
  const umbral = Math.max(altoCabecera, margenAncla || 0) + 2;
  return secciones.findLast((elemento) => elemento.getBoundingClientRect().top <= umbral)?.id ?? idInicio;
}

export function usarSeccionVisible(cabecera) {
  const [seccion, cambiarSeccion] = useState(idInicio);

  useEffect(() => {
    const secciones = obtenerSecciones();
    const eventos = new AbortController();
    const opciones = { signal: eventos.signal };
    let fotograma;
    let ultimaSeccion = idInicio;

    function actualizarSeccion() {
      fotograma = undefined;
      if (temaTerminalActivo()) return;

      const siguiente = leerSeccionVisible(cabecera.current?.offsetHeight ?? 0, secciones);
      if (siguiente === ultimaSeccion) return;
      ultimaSeccion = siguiente;
      cambiarSeccion(siguiente);
    }

    function programarActualizacion() {
      if (!temaTerminalActivo()) fotograma ??= requestAnimationFrame(actualizarSeccion);
    }

    window.addEventListener("scroll", programarActualizacion, { ...opciones, passive: true });
    window.addEventListener("resize", programarActualizacion, opciones);
    window.addEventListener("hashchange", programarActualizacion, opciones);
    window.addEventListener(cambioTema, programarActualizacion, opciones);
    window.addEventListener("pageshow", programarActualizacion, opciones);
    actualizarSeccion();

    return () => {
      eventos.abort();
      if (fotograma !== undefined) cancelAnimationFrame(fotograma);
    };
  }, [cabecera]);

  return seccion;
}
