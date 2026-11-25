"use client";

import { useRef } from "react";
import { usarSeccionDelFragmento } from "../../navegacion/usar-seccion-del-fragmento";
import { usarTemaTerminal } from "../../tema/usar-tema-terminal";
import { usarNavegacionTerminal } from "../logica/usar-navegacion-terminal";
import DirectorioTerminal from "./DirectorioTerminal";
import EntradaTerminal from "./EntradaTerminal";

function navegar(destino) {
  window.location.hash = destino;
}

export default function ConsolaPortafolio({ children }) {
  const terminal = usarTemaTerminal();
  const seccion = usarSeccionDelFragmento();
  const campo = useRef(null);
  const salida = useRef(null);
  const directorio = useRef(null);
  usarNavegacionTerminal({ activo: terminal, directorio, salida, campo });

  return (
    <>
      <div className="consola-panel">
        <div className="consola-salida" ref={salida} tabIndex={terminal ? 0 : undefined}>{children}</div>
        <EntradaTerminal seccion={seccion} alNavegar={navegar} campo={campo} />
      </div>
      <DirectorioTerminal seccion={seccion} lista={directorio} />
    </>
  );
}
