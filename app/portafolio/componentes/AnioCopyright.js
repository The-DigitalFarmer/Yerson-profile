"use client";

import { useEffect, useState } from "react";

export default function AnioCopyright({ anioInicial }) {
  const [anio, cambiarAnio] = useState(anioInicial);

  useEffect(() => {
    function actualizarAnio() {
      cambiarAnio(new Date().getFullYear());
    }

    actualizarAnio();
    window.addEventListener("pageshow", actualizarAnio);
    return () => window.removeEventListener("pageshow", actualizarAnio);
  }, []);

  return anio;
}
