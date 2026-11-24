"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { seccionDesdeFragmento, seccionesNavegacion } from "../../compartidos/contenido/navegacion";
import { usarTemaTerminal } from "../../compartidos/logica/usar-tema-terminal";
import MascotasTerminal from "./MascotasTerminal";

const idInicio = seccionesNavegacion[0].id;
const directorios = seccionesNavegacion.map(({ id }) => id);
const seccionesTerminal = seccionesNavegacion.map(({ id, etiqueta }) => ({
  id,
  etiqueta: etiqueta.toLowerCase(),
}));

function leerSeccion() {
  return seccionDesdeFragmento(window.location.hash) ?? idInicio;
}

function suscribirSeccion(alCambiar) {
  window.addEventListener("hashchange", alCambiar);
  return () => window.removeEventListener("hashchange", alCambiar);
}

function moverFoco(evento, menu, preseleccionar) {
  if (evento.key !== "ArrowDown" && evento.key !== "ArrowUp") return;
  if (evento.defaultPrevented || evento.isComposing || evento.altKey || evento.ctrlKey || evento.metaKey || evento.shiftKey) return;

  const foco = document.activeElement;
  const selector = menu.querySelector("select");
  if (foco?.isContentEditable || (foco !== selector && foco?.matches("select, textarea"))) return;
  if (foco instanceof HTMLInputElement && (foco.id !== "comando-terminal" || foco.value)) return;

  evento.preventDefault();
  const paso = evento.key === "ArrowDown" ? 1 : -1;
  const lista = menu.querySelector("ul");
  if (!lista.getClientRects().length) {
    preseleccionar(Array.from(selector.options).at((selector.selectedIndex + paso) % selector.options.length).value);
    selector.focus({ preventScroll: true });
    return;
  }

  const enlaces = Array.from(lista.querySelectorAll("a"));
  const actual = enlaces.includes(foco) ? foco : lista.querySelector('[aria-current="location"]');
  enlaces.at((enlaces.indexOf(actual) + paso) % enlaces.length)?.focus({ preventScroll: true });
}

export default function ConsolaPortafolio({ children }) {
  const terminal = usarTemaTerminal();
  const seccion = useSyncExternalStore(suscribirSeccion, leerSeccion, () => idInicio);
  const [comando, cambiarComando] = useState("");
  const [respuesta, cambiarRespuesta] = useState(null);
  const [preseleccion, cambiarPreseleccion] = useState(null);
  const menu = useRef(null);

  useEffect(() => {
    if (!terminal) return;

    const navegar = (evento) => moverFoco(evento, menu.current, cambiarPreseleccion);
    window.addEventListener("keydown", navegar);
    return () => window.removeEventListener("keydown", navegar);
  }, [terminal]);

  function abrirDesdeSelector(destino) {
    cambiarPreseleccion(null);
    window.location.hash = destino;
  }

  function ejecutar(evento) {
    evento.preventDefault();
    const entrada = comando.trim().toLowerCase();
    if (!entrada) return;
    const [accion, ...argumentos] = entrada.split(/\s+/);
    const destino = argumentos.join(" ").replace(/^\.\//, "").replace(/\/$/, "");
    cambiarComando("");

    if (entrada === "ls") {
      cambiarRespuesta({ tipo: "listado", texto: directorios.map((id) => `${id}/`).join("  ") });
    } else if (accion === "cd" && (directorios.includes(destino) || destino === ".." || !destino)) {
      cambiarRespuesta(null);
      window.location.hash = directorios.includes(destino) ? destino : idInicio;
    } else {
      cambiarRespuesta({
        tipo: "error",
        texto: accion === "cd" ? "Esa sección no existe. Usa ls para ver las disponibles." : "Comando desconocido. Usa ls o cd <sección>.",
      });
    }
  }

  return (
    <main className="consola-portafolio">
      <nav className="consola-directorio" aria-label="Secciones de la terminal" ref={menu}>
        <p>portafolio</p>
        <select
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
          {seccionesTerminal.map(({ id, etiqueta }) => <option key={id} value={id}>{etiqueta}</option>)}
        </select>
        <ul>
          {seccionesTerminal.map(({ id, etiqueta }) => (
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
      <div className="consola-panel">
        <div className="consola-salida" tabIndex={terminal ? 0 : undefined}>{children}</div>
        <div className="consola-entrada" data-estado={respuesta?.tipo}>
          <p className="consola-respuesta" role="status">{respuesta?.texto}</p>
          <form className="consola-prompt" onSubmit={ejecutar}>
            <div className="consola-contexto">
              <div className="consola-fichas">
                <label className="ficha-terminal ficha-terminal-ruta" htmlFor="comando-terminal">~/portafolio/{seccion}</label>
                <code className="ficha-terminal ficha-terminal-listado">ls</code>
                <code className="ficha-terminal ficha-terminal-navegacion">cd &lt;sección&gt;</code>
              </div>
              <p className="consola-atajos">Menú: ↑/↓ · Enter para abrir</p>
            </div>
            <div className="consola-linea-comando">
              <span aria-hidden="true">❯</span>
              <input
                id="comando-terminal"
                type="text"
                aria-label="Comando de la terminal"
                placeholder="Escribe un comando"
                autoCapitalize="none"
                autoComplete="off"
                enterKeyHint="go"
                spellCheck={false}
                value={comando}
                onChange={(evento) => cambiarComando(evento.target.value)}
              />
              <kbd aria-hidden="true">↵</kbd>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
