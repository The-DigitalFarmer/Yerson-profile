"use client";

import { useEffect, useRef, useState } from "react";
import {
  columnasFigura,
  filasFigura,
  fotogramasPorCiclo,
  obtenerFotogramaAscii,
  proporcionCelda,
} from "../logica/animacion-ascii";

const intervaloFotogramaMs = 110;

export default function FiguraAscii() {
  const figura = useRef(null);
  const [fotograma, cambiarFotograma] = useState(0);

  useEffect(() => {
    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");
    let figuraVisible = false;
    let temporizador;

    function sincronizarReproduccion() {
      if (figuraVisible && !document.hidden && !movimientoReducido.matches) {
        temporizador ??= window.setInterval(() => {
          cambiarFotograma((actual) => (actual + 1) % fotogramasPorCiclo);
        }, intervaloFotogramaMs);
        return;
      }

      window.clearInterval(temporizador);
      temporizador = undefined;
    }

    function actualizarPreferenciaDeMovimiento() {
      sincronizarReproduccion();
      if (movimientoReducido.matches) cambiarFotograma(0);
    }

    const observador = new IntersectionObserver(([entrada]) => {
      figuraVisible = entrada.isIntersecting;
      sincronizarReproduccion();
    });

    const eventos = new AbortController();
    const opciones = { signal: eventos.signal };
    observador.observe(figura.current);
    movimientoReducido.addEventListener("change", actualizarPreferenciaDeMovimiento, opciones);
    document.addEventListener("visibilitychange", sincronizarReproduccion, opciones);

    return () => {
      observador.disconnect();
      window.clearInterval(temporizador);
      eventos.abort();
    };
  }, []);

  const celdas = obtenerFotogramaAscii(fotograma);

  return (
    <div
      className="figura-ascii"
      ref={figura}
      style={{
        "--columnas": columnasFigura,
        "--filas": filasFigura,
        "--proporcion-celda": proporcionCelda,
      }}
    >
      {celdas.map(({ fila, columna, caracter, tipo, brillo }) => (
        <span
          key={`${fila}/${columna}`}
          data-tipo={tipo}
          style={{
            gridArea: `${fila}/${columna}`,
            "--brillo": tipo === "contorno" ? undefined : `${brillo}%`,
          }}
        >
          {caracter}
        </span>
      ))}
    </div>
  );
}
