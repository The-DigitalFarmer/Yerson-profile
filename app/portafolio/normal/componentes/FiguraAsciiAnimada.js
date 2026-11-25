import { useEffect, useState } from "react";
import { fotogramasPorCiclo, obtenerFotogramaAscii } from "../logica/animacion-ascii";
import CeldasFiguraAscii from "./CeldasFiguraAscii";

export default function FiguraAsciiAnimada({ reproduciendo }) {
  const [fotograma, cambiarFotograma] = useState(0);

  useEffect(() => {
    if (!reproduciendo) return;

    const temporizador = window.setInterval(() => {
      cambiarFotograma((actual) => (actual + 1) % fotogramasPorCiclo);
    }, 110);
    return () => window.clearInterval(temporizador);
  }, [reproduciendo]);

  return <CeldasFiguraAscii celdas={obtenerFotogramaAscii(fotograma)} />;
}
