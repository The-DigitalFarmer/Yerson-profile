"use client";

import { useEffect, useRef, useState } from "react";
import { seccionesNavegacion } from "../contenido/navegacion";

const idInicio = seccionesNavegacion[0].id;

function EnlacesNavegacion({ seccionActiva, alNavegar }) {
  return seccionesNavegacion.map(({ id, etiqueta }) => {
    const estaActiva = id === seccionActiva;

    return (
      <a
        key={id}
        href={`#${id}`}
        className={estaActiva ? "enlace-activo" : undefined}
        aria-current={estaActiva ? "location" : undefined}
        onClick={alNavegar}
      >
        {etiqueta}
      </a>
    );
  });
}

export default function Cabecera() {
  const cabecera = useRef(null);
  const menu = useRef(null);
  const controlMenu = useRef(null);
  const [seccionActiva, cambiarSeccionActiva] = useState(idInicio);

  function cerrarMenu() {
    if (menu.current) menu.current.open = false;
  }

  useEffect(() => {
    const secciones = seccionesNavegacion
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const pantallaMovil = window.matchMedia("(max-width: 760px)");
    let fotogramaPendiente;
    let ultimaSeccionActiva;

    function actualizarSeccionActiva() {
      fotogramaPendiente = undefined;
      const altoVentana = window.innerHeight;
      const umbral = altoVentana * 0.45;
      const altoPagina = document.documentElement.scrollHeight;
      const alFinalDePagina =
        window.scrollY > 0 && window.scrollY + altoVentana >= altoPagina - 1;

      const seccion = alFinalDePagina
        ? secciones.at(-1)
        : secciones.findLast((elemento) => elemento.getBoundingClientRect().top <= umbral);

      const id = seccion?.id ?? idInicio;
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
          <span>Reckless</span>
        </a>
        <nav id="main-navigation" className="navegacion-escritorio" aria-label="Navegación principal">
          <EnlacesNavegacion seccionActiva={seccionActiva} alNavegar={cerrarMenu} />
        </nav>
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
