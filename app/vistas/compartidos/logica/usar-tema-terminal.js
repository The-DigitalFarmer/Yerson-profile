"use client";

import { useSyncExternalStore } from "react";
import { cambioTema, claveTema } from "./tema-portafolio";

function temaTerminalActivo() {
  return document.documentElement.dataset.tema === "terminal";
}

function suscribir(alCambiar) {
  window.addEventListener(cambioTema, alCambiar);
  return () => window.removeEventListener(cambioTema, alCambiar);
}

export function seleccionarTemaTerminal(activar) {
  const raiz = document.documentElement;
  if (activar && !raiz.hasAttribute("data-terminal-disponible")) return false;

  if (activar) raiz.dataset.tema = "terminal";
  else delete raiz.dataset.tema;

  try {
    localStorage.setItem(claveTema, activar ? "terminal" : "original");
  } catch {
    // El tema también funciona si el navegador bloquea el almacenamiento.
  }

  window.dispatchEvent(new Event(cambioTema));
  return true;
}

export function usarTemaTerminal() {
  return useSyncExternalStore(suscribir, temaTerminalActivo, () => false);
}
