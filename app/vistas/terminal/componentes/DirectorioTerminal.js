"use client";

import { useEffect, useRef, useState } from "react";
import { seccionesNavegacion } from "../../compartidos/contenido/navegacion";
import MascotasTerminal from "./MascotasTerminal";

const secciones = seccionesNavegacion.map(({ id, etiqueta }) => ({
  id,
  etiqueta: etiqueta.toLowerCase(),
}));

function obtenerPaso(evento, selector, campo) {
  const { key, defaultPrevented, isComposing, altKey, ctrlKey, metaKey, shiftKey } = evento;
  if (key !== "ArrowDown" && key !== "ArrowUp") return 0;
  if (defaultPrevented || isComposing || altKey || ctrlKey || metaKey || shiftKey) return 0;

  const foco = document.activeElement;
  if (foco?.isContentEditable || (foco !== selector && foco?.matches("select, textarea"))) return 0;
  if (foco instanceof HTMLInputElement && (foco !== campo || foco.value)) return 0;

  return key === "ArrowDown" ? 1 : -1;
}

export default function DirectorioTerminal({ activo, seccion, alNavegar, campo }) {
  const [preseleccion, cambiarPreseleccion] = useState(null);
  const lista = useRef(null);
  const selector = useRef(null);

  useEffect(() => {
    if (!activo) return;

    function moverFoco(evento) {
      const opciones = selector.current;
      const paso = obtenerPaso(evento, opciones, campo.current);
      if (!paso) return;

      evento.preventDefault();
      if (!lista.current.getClientRects().length) {
        const indice = (opciones.selectedIndex + paso) % opciones.length;
        cambiarPreseleccion(secciones.at(indice).id);
        opciones.focus({ preventScroll: true });
        return;
      }

      const enlaces = Array.from(lista.current.querySelectorAll("a"));
      const actual = enlaces.includes(document.activeElement)
        ? enlaces.indexOf(document.activeElement)
        : secciones.findIndex(({ id }) => id === seccion);
      enlaces.at((actual + paso) % enlaces.length)?.focus({ preventScroll: true });
    }

    window.addEventListener("keydown", moverFoco);
    return () => window.removeEventListener("keydown", moverFoco);
  }, [activo, campo, seccion]);

  function abrirDesdeSelector(destino) {
    cambiarPreseleccion(null);
    alNavegar(destino);
  }

  return (
    <nav className="consola-directorio" aria-label="Secciones de la terminal">
      <p>portafolio</p>
      <select
        ref={selector}
        className="consola-selector-seccion"
        aria-label="Sección del portafolio"
        value={preseleccion ?? seccion}
        onChange={(evento) => abrirDesdeSelector(evento.target.value)}
        onBlur={() => cambiarPreseleccion(null)}
        onKeyDown={(evento) => {
          if (evento.key !== "Enter" || !preseleccion) return;
          evento.preventDefault();
          abrirDesdeSelector(preseleccion);
        }}
      >
        {secciones.map(({ id, etiqueta }) => <option key={id} value={id}>{etiqueta}</option>)}
      </select>
      <ul ref={lista}>
        {secciones.map(({ id, etiqueta }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={seccion === id ? "location" : undefined}>
              <span>{etiqueta}</span>
              <small className="consola-rama" aria-hidden="true">main</small>
            </a>
          </li>
        ))}
      </ul>
      <MascotasTerminal />
    </nav>
  );
}
