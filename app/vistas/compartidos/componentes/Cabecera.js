"use client";

import { useRef } from "react";
import EnlacesNavegacion from "../../normal/componentes/EnlacesNavegacion";
import { usarMenuMovil } from "../../normal/logica/usar-menu-movil";
import { leerSeccionVisible, usarSeccionVisible } from "../../normal/logica/usar-seccion-visible";
import { usarCambioDeVista } from "../logica/usar-cambio-de-vista";
import { usarTemaTerminal } from "../logica/usar-tema-terminal";

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
  const { menu, controlMenu, cerrarMenu } = usarMenuMovil(cabecera);
  const seccionActiva = usarSeccionVisible(cabecera);
  const cambiarVista = usarCambioDeVista(() => leerSeccionVisible(cabecera.current?.offsetHeight ?? 0));

  function seleccionarVista(activarTerminal) {
    cerrarMenu();
    cambiarVista(activarTerminal);
  }

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
          <SelectorTema alSeleccionar={seleccionarVista} />
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
