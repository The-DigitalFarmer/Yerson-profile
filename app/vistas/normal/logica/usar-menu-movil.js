"use client";

import { useCallback, useEffect, useRef } from "react";

export function usarMenuMovil(cabecera) {
  const menu = useRef(null);
  const controlMenu = useRef(null);
  const cerrarMenu = useCallback(() => {
    if (menu.current) menu.current.open = false;
  }, []);

  useEffect(() => {
    const pantallaMovil = window.matchMedia("(max-width: 1020px)");
    const eventos = new AbortController();
    const opciones = { signal: eventos.signal };

    function cerrarConEscape(evento) {
      if (evento.key !== "Escape" || !menu.current?.open) return;
      cerrarMenu();
      controlMenu.current?.focus();
    }

    function cerrarAlPulsarFuera(evento) {
      if (!cabecera.current?.contains(evento.target)) cerrarMenu();
    }

    document.addEventListener("keydown", cerrarConEscape, opciones);
    document.addEventListener("click", cerrarAlPulsarFuera, opciones);
    pantallaMovil.addEventListener("change", cerrarMenu, opciones);
    window.addEventListener("pagehide", cerrarMenu, opciones);

    return () => eventos.abort();
  }, [cabecera, cerrarMenu]);

  return { menu, controlMenu, cerrarMenu };
}
