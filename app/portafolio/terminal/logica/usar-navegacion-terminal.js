import { useEffect } from "react";

const direcciones = {
  ArrowUp: { grupo: "directorio", paso: -1 },
  ArrowDown: { grupo: "directorio", paso: 1 },
  ArrowLeft: { grupo: "contenido", paso: -1 },
  ArrowRight: { grupo: "contenido", paso: 1 },
};

function permiteNavegar(evento, foco, campo) {
  if (evento.defaultPrevented || evento.isComposing || evento.altKey || evento.ctrlKey || evento.metaKey || evento.shiftKey) {
    return false;
  }

  if (foco?.isContentEditable || foco?.matches("select, textarea")) return false;
  return !(foco instanceof HTMLInputElement) || (foco === campo && !foco.value);
}

function enlacesDeContenido(salida) {
  return Array.from(salida.querySelectorAll('a[href]:not([aria-disabled="true"])')).filter((enlace) => (
    enlace.tabIndex >= 0 &&
    enlace.getClientRects().length > 0 &&
    getComputedStyle(enlace).visibility === "visible"
  ));
}

export function usarNavegacionTerminal({ activo, directorio, salida, campo }) {
  useEffect(() => {
    if (!activo) return;

    function moverFoco(evento) {
      if (!Object.hasOwn(direcciones, evento.key)) return;
      const foco = document.activeElement;
      if (!permiteNavegar(evento, foco, campo.current)) return;

      const { grupo, paso } = direcciones[evento.key];
      const enContenido = grupo === "contenido";
      const panel = salida.current;
      const compacta = getComputedStyle(panel).getPropertyValue("--atajos-escritorio-terminal").trim() === "0";
      if (compacta && (enContenido || foco === panel)) return;

      const enlaces = enContenido
        ? enlacesDeContenido(panel)
        : Array.from(directorio.current.querySelectorAll("a[href]"));
      if (!enlaces.length) return;

      let indice = enlaces.indexOf(foco);
      if (indice < 0) {
        if (enContenido) {
          indice = paso > 0 ? -1 : 0;
        } else {
          indice = enlaces.findIndex((enlace) => enlace.hasAttribute("aria-current"));
        }
      }

      evento.preventDefault();
      enlaces.at((indice + paso) % enlaces.length).focus({ preventScroll: true });
    }

    window.addEventListener("keydown", moverFoco);
    return () => window.removeEventListener("keydown", moverFoco);
  }, [activo, campo, directorio, salida]);
}
