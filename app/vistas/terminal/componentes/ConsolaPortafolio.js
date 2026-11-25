"use client";

import { useRef } from "react";
import { usarSeccionDelFragmento } from "../../compartidos/logica/usar-seccion-del-fragmento";
import { usarTemaTerminal } from "../../compartidos/logica/usar-tema-terminal";
import DirectorioTerminal from "./DirectorioTerminal";
import EntradaTerminal from "./EntradaTerminal";

function navegar(destino) {
  window.location.hash = destino;
}

export default function ConsolaPortafolio({ children }) {
  const terminal = usarTemaTerminal();
  const seccion = usarSeccionDelFragmento();
  const campo = useRef(null);

  return (
    <main className="consola-portafolio">
      <DirectorioTerminal activo={terminal} seccion={seccion} alNavegar={navegar} campo={campo} />
      <div className="consola-panel">
        <div className="consola-salida" tabIndex={terminal ? 0 : undefined}>{children}</div>
        <EntradaTerminal seccion={seccion} alNavegar={navegar} campo={campo} />
      </div>
    </main>
  );
}
