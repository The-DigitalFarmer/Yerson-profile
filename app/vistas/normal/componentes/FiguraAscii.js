"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { usarTemaTerminal } from "../../compartidos/logica/usar-tema-terminal";

const FiguraAsciiAnimada = lazy(() => import("./FiguraAsciiAnimada"));

export default function FiguraAscii({ estilo, children }) {
  const figura = useRef(null);
  const [reproduccion, cambiarReproduccion] = useState("inicial");
  const temaTerminal = usarTemaTerminal();

  useEffect(() => {
    if (temaTerminal) return;

    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");
    let figuraVisible = false;

    function sincronizarReproduccion() {
      cambiarReproduccion((anterior) => {
        if (movimientoReducido.matches) return "inicial";
        if (figuraVisible && !document.hidden) return "activa";
        return anterior === "inicial" ? "inicial" : "pausada";
      });
    }

    const observador = new IntersectionObserver(([entrada]) => {
      figuraVisible = entrada.isIntersecting;
      sincronizarReproduccion();
    });

    const eventos = new AbortController();
    const opciones = { signal: eventos.signal };
    observador.observe(figura.current);
    movimientoReducido.addEventListener("change", sincronizarReproduccion, opciones);
    document.addEventListener("visibilitychange", sincronizarReproduccion, opciones);

    return () => {
      observador.disconnect();
      eventos.abort();
    };
  }, [temaTerminal]);

  return (
    <div className="figura-ascii" ref={figura} style={estilo}>
      {temaTerminal || reproduccion === "inicial" ? children : (
        <Suspense fallback={children}>
          <FiguraAsciiAnimada reproduciendo={reproduccion === "activa"} />
        </Suspense>
      )}
    </div>
  );
}
