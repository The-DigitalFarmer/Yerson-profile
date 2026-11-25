"use client";

import { useRef } from "react";
import { idInicio, seccionDesdeFragmento } from "./secciones";
import { claveTema } from "../tema/tema-portafolio";
import { leerSeccionDelFragmento } from "./usar-seccion-del-fragmento";
import { seleccionarTemaTerminal, temaTerminalActivo } from "../tema/usar-tema-terminal";

function claveSeccion(vista) {
  return `${claveTema}-seccion-${vista}`;
}

export function usarCambioDeVista(leerSeccionNormal) {
  const seccionesGuardadas = useRef({});

  return function cambiarVista(activarTerminal) {
    const terminalActiva = temaTerminalActivo();
    if (activarTerminal === terminalActiva) return;

    const vistaActual = terminalActiva ? "terminal" : "normal";
    const vistaDestino = activarTerminal ? "terminal" : "normal";
    const seccionActual = terminalActiva ? leerSeccionDelFragmento() : leerSeccionNormal();
    seleccionarTemaTerminal(activarTerminal);

    const secciones = seccionesGuardadas.current;
    secciones[vistaActual] = seccionActual;
    let destino = secciones[vistaDestino];
    try {
      destino ??= seccionDesdeFragmento(localStorage.getItem(claveSeccion(vistaDestino)));
      localStorage.setItem(claveSeccion(vistaActual), `#${seccionActual}`);
    } catch {
      // La sección sigue disponible en memoria si el almacenamiento está bloqueado.
    }

    destino ??= idInicio;
    const fragmento = `#${destino}`;
    if (window.location.hash !== fragmento) window.location.replace(fragmento);
    if (!activarTerminal) {
      document.getElementById(destino)?.scrollIntoView({ behavior: "instant" });
    }
  };
}
