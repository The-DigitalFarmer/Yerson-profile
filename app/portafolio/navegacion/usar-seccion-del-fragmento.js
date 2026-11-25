"use client";

import { useSyncExternalStore } from "react";
import { idInicio, seccionDesdeFragmento } from "./secciones";

export function leerSeccionDelFragmento() {
  return seccionDesdeFragmento(window.location.hash) ?? idInicio;
}

function suscribir(alCambiar) {
  window.addEventListener("hashchange", alCambiar);
  return () => window.removeEventListener("hashchange", alCambiar);
}

export function usarSeccionDelFragmento() {
  return useSyncExternalStore(suscribir, leerSeccionDelFragmento, () => idInicio);
}
