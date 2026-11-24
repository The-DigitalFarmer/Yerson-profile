"use client";

import { useEffect, useRef, useState } from "react";
import { seccionDesdeFragmento, seccionesNavegacion } from "../contenido/navegacion";
import { cambioTema, claveTema } from "../logica/tema-portafolio";
import { seleccionarTemaTerminal, usarTemaTerminal } from "../logica/usar-tema-terminal";
import EnlacesNavegacion from "../../normal/componentes/EnlacesNavegacion";

const idInicio = seccionesNavegacion[0].id;

function obtenerSecciones() {
  return seccionesNavegacion.map(({ id }) => document.getElementById(id)).filter(Boolean);
}

function leerSeccionNormal(secciones, altoCabecera) {
  const altoVentana = window.innerHeight;
  const margenAncla = secciones[0] ? parseFloat(getComputedStyle(secciones[0]).scrollMarginTop) : 0;
  // El enlace activo sigue la posición de las anclas bajo la cabecera.
  const umbral = Math.max(altoCabecera, margenAncla || 0) + 2;
  const altoPagina = document.documentElement.scrollHeight;
  const alFinalDePagina = window.scrollY > 0 && window.scrollY + altoVentana >= altoPagina - 1;

  if (alFinalDePagina) {
    const destino = secciones.find((elemento) => `#${elemento.id}` === window.location.hash);
    const arriba = destino?.getBoundingClientRect().top;
    if (arriba >= altoCabecera && arriba < altoVentana) return destino.id;
    return secciones.at(-1)?.id ?? idInicio;
  }

  return secciones.findLast((elemento) => elemento.getBoundingClientRect().top <= umbral)?.id ?? idInicio;
}

function SelectorTema({ alSeleccionar }) {
  const terminal = usarTemaTerminal();

  return (
    <div className="selector-tema" role="group" aria-label="Vista del portafolio">
      <button className="boton-tema" type="button" aria-pressed={!terminal} onClick={() => alSeleccionar(false)}>
        Normal
      </button>
      <button className="boton-tema" type="button" aria-pressed={terminal} onClick={() => alSeleccionar(true)}>
        <span aria-hidden="true">&gt;_</span>{" "}Terminal
      </button>
    </div>
  );
}

export default function Cabecera({ marcaAscii }) {
  const cabecera = useRef(null);
  const menu = useRef(null);
  const controlMenu = useRef(null);
  const seccionesGuardadas = useRef({});
  const [seccionActiva, cambiarSeccionActiva] = useState(idInicio);

  function cerrarMenu() {
    if (menu.current) menu.current.open = false;
  }

  function cambiarVista(activarTerminal) {
    cerrarMenu();
    const terminalActiva = document.documentElement.dataset.tema === "terminal";
    if (activarTerminal === terminalActiva) return;

    const vistaActual = terminalActiva ? "terminal" : "normal";
    const vistaDestino = activarTerminal ? "terminal" : "normal";
    const seccionActual = terminalActiva
      ? seccionDesdeFragmento(window.location.hash) ?? idInicio
      : leerSeccionNormal(obtenerSecciones(), cabecera.current?.offsetHeight ?? 0);
    if (!seleccionarTemaTerminal(activarTerminal)) return;

    seccionesGuardadas.current[vistaActual] = seccionActual;
    let destino = seccionesGuardadas.current[vistaDestino];
    try {
      destino ??= seccionDesdeFragmento(localStorage.getItem(`${claveTema}-seccion-${vistaDestino}`));
      localStorage.setItem(`${claveTema}-seccion-${vistaActual}`, `#${seccionActual}`);
    } catch {
      // La sección sigue disponible en memoria si el almacenamiento está bloqueado.
    }

    destino ??= idInicio;
    const fragmento = `#${destino}`;
    if (window.location.hash !== fragmento) window.location.replace(fragmento);
    if (!activarTerminal) {
      document.getElementById(destino)?.scrollIntoView({ behavior: "instant" });
    }
  }

  useEffect(() => {
    const secciones = obtenerSecciones();

    const pantallaMovil = window.matchMedia("(max-width: 1020px)");
    let fotogramaPendiente;
    let ultimaSeccionActiva;

    function actualizarSeccionActiva() {
      fotogramaPendiente = undefined;
      if (document.documentElement.dataset.tema === "terminal") return;

      const id = leerSeccionNormal(secciones, cabecera.current?.offsetHeight ?? 0);
      if (id !== ultimaSeccionActiva) {
        ultimaSeccionActiva = id;
        cambiarSeccionActiva(id);
      }
    }

    function programarActualizacion() {
      fotogramaPendiente ??= requestAnimationFrame(actualizarSeccionActiva);
    }

    function cerrarConEscape(evento) {
      if (evento.key === "Escape" && menu.current?.open) {
        cerrarMenu();
        controlMenu.current?.focus();
      }
    }

    function cerrarAlPulsarFuera(evento) {
      if (!cabecera.current?.contains(evento.target)) cerrarMenu();
    }

    const eventos = new AbortController();
    const opciones = { signal: eventos.signal };
    document.addEventListener("keydown", cerrarConEscape, opciones);
    document.addEventListener("click", cerrarAlPulsarFuera, opciones);
    pantallaMovil.addEventListener("change", cerrarMenu, opciones);
    window.addEventListener("scroll", programarActualizacion, { ...opciones, passive: true });
    window.addEventListener("resize", programarActualizacion, opciones);
    window.addEventListener("hashchange", programarActualizacion, opciones);
    window.addEventListener(cambioTema, programarActualizacion, opciones);
    window.addEventListener("pagehide", cerrarMenu, opciones);
    window.addEventListener("pageshow", programarActualizacion, opciones);
    actualizarSeccionActiva();

    return () => {
      eventos.abort();
      if (fotogramaPendiente !== undefined) cancelAnimationFrame(fotogramaPendiente);
    };
  }, []);

  return (
    <header className="cabecera" ref={cabecera}>
      <div className="contenido-cabecera">
        <a className="marca" href="#inicio" aria-label="DigitalFarmer, inicio" onClick={cerrarMenu}>
          <img src="/assets/svg/avatar.svg" alt="" width={32} height={32} />
          {marcaAscii}
          <span>Renegade</span>
        </a>
        <div className="controles-cabecera">
          <nav id="main-navigation" className="navegacion-escritorio" aria-label="Navegación principal">
            <EnlacesNavegacion seccionActiva={seccionActiva} alNavegar={cerrarMenu} />
          </nav>
          <SelectorTema alSeleccionar={cambiarVista} />
        </div>
        <details id="mobile-menu" className="menu-movil" ref={menu}>
          <summary
            className="control-menu"
            aria-label="Menú de navegación"
            aria-controls="mobile-navigation"
            ref={controlMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>
          <nav id="mobile-navigation" aria-label="Navegación móvil">
            <EnlacesNavegacion seccionActiva={seccionActiva} alNavegar={cerrarMenu} />
          </nav>
        </details>
      </div>
    </header>
  );
}
