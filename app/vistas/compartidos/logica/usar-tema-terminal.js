"use client";

import { useSyncExternalStore } from "react";
import { cambioTema, claveTema } from "./tema-portafolio";

export function temaTerminalActivo() {
  return document.documentElement.dataset.tema === "terminal";
}

function suscribir(alCambiar) {
  window.addEventListener(cambioTema, alCambiar);
  return () => window.removeEventListener(cambioTema, alCambiar);
}

export function seleccionarTemaTerminal(activar) {
  const raiz = document.documentElement;

  if (activar) raiz.dataset.tema = "terminal";
  else delete raiz.dataset.tema;

  try {
    localStorage.setItem(claveTema, activar ? "terminal" : "original");
  } catch {
    // El tema también funciona si el navegador bloquea el almacenamiento.
  }

  window.dispatchEvent(new Event(cambioTema));
}

export function usarTemaTerminal() {
  return useSyncExternalStore(suscribir, temaTerminalActivo, () => false);
}
