"use client";

import { useState } from "react";
import { interpretarComando } from "../logica/comandos-terminal";

export default function EntradaTerminal({ seccion, alNavegar, campo }) {
  const [respuesta, cambiarRespuesta] = useState(null);

  function ejecutar(evento) {
    evento.preventDefault();
    const entrada = campo.current;
    const resultado = interpretarComando(entrada.value);
    if (!resultado) return;

    entrada.value = "";
    if (resultado.tipo === "navegacion") {
      cambiarRespuesta(null);
      alNavegar(resultado.destino);
      return;
    }

    cambiarRespuesta(resultado);
  }

  return (
    <div className="consola-entrada" data-estado={respuesta?.tipo}>
      <p className="consola-respuesta" role="status">{respuesta?.texto}</p>
      <form className="consola-prompt" onSubmit={ejecutar}>
        <div className="consola-contexto">
          <div className="consola-fichas">
            <label className="ficha-terminal ficha-terminal-ruta" htmlFor="comando-terminal">~/portafolio/{seccion}</label>
            <code className="ficha-terminal ficha-terminal-listado">ls</code>
            <code className="ficha-terminal ficha-terminal-navegacion">cd &lt;sección&gt;</code>
          </div>
          <p className="consola-atajos">Menú: ↑/↓ · Enter para abrir</p>
        </div>
        <div className="consola-linea-comando">
          <span aria-hidden="true">❯</span>
          <input
            ref={campo}
            id="comando-terminal"
            type="text"
            aria-label="Comando de la terminal"
            placeholder="Escribe un comando"
            autoCapitalize="none"
            autoComplete="off"
            enterKeyHint="go"
            spellCheck={false}
          />
          <kbd aria-hidden="true">↵</kbd>
        </div>
      </form>
    </div>
  );
}
