"use client";

import { useEffect, useRef, useState } from "react";
import { claveTemaGuardado, leerTemaGuardado, temaClaro, temaOscuro } from "../logica/tema";

export default function SelectorTema() {
  const preferencia = useRef(null);
  const esquemaDelSistema = useRef(null);
  const [tema, cambiarTema] = useState(null);
  const modoOscuro = tema === temaOscuro;

  function aplicarTema() {
    const raiz = document.documentElement;
    const eleccion = preferencia.current;

    if (eleccion) raiz.dataset.theme = eleccion;
    else delete raiz.dataset.theme;

    const temaDelSistema = esquemaDelSistema.current.matches ? temaOscuro : temaClaro;
    const temaActual = eleccion ?? temaDelSistema;
    const colorPagina = temaActual === temaOscuro ? "#0d0b0a" : "#ffffff";

    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", colorPagina);
    cambiarTema(temaActual);
  }

  useEffect(() => {
    const esquema = window.matchMedia("(prefers-color-scheme: dark)");
    esquemaDelSistema.current = esquema;

    function restaurarPreferencia() {
      preferencia.current = leerTemaGuardado(preferencia.current);
      aplicarTema();
    }

    function sincronizarEntrePestanas(evento) {
      if (evento.key === null || evento.key === claveTemaGuardado) restaurarPreferencia();
    }

    const eventos = new AbortController();
    const opciones = { signal: eventos.signal };
    esquema.addEventListener("change", aplicarTema, opciones);
    window.addEventListener("storage", sincronizarEntrePestanas, opciones);
    window.addEventListener("pageshow", restaurarPreferencia, opciones);
    restaurarPreferencia();

    return () => eventos.abort();
  }, []);

  function alternarTema() {
    preferencia.current = modoOscuro ? temaClaro : temaOscuro;
    aplicarTema();

    try {
      localStorage.setItem(claveTemaGuardado, preferencia.current);
    } catch {
      // Conserva la elección durante la visita si el navegador bloquea el almacenamiento.
    }
  }

  return (
    <span className="control-tema">
      <button
        id="theme-toggle"
        className="selector-tema"
        type="button"
        aria-label="Modo oscuro"
        aria-pressed={modoOscuro}
        title={modoOscuro ? "Activar modo claro" : "Activar modo oscuro"}
        onClick={alternarTema}
        hidden={tema === null}
      >
        <svg
          className="icono-luna"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.9 13.2A9 9 0 0 1 10.8 3.1 9 9 0 1 0 20.9 13.2Z" />
        </svg>
        <svg
          className="icono-sol"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </button>
    </span>
  );
}
