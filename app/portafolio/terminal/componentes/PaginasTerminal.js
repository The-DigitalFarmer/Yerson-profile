"use client";

import { Children, useState } from "react";

export default function PaginasTerminal({ children, etiqueta }) {
  const paginas = Children.toArray(children);
  const [pagina, cambiarPagina] = useState(0);
  const ultimaPagina = paginas.length - 1;

  return (
    <div className="paginas-terminal">
      {paginas.map((contenido, indice) => (
        <div className="pagina-terminal" data-activa={indice === pagina} key={contenido.key}>
          {contenido}
        </div>
      ))}
      <nav className="controles-paginas-terminal" aria-label={etiqueta}>
        <button type="button" aria-disabled={pagina === 0} onClick={() => cambiarPagina((actual) => Math.max(0, actual - 1))}>
          ← Anterior
        </button>
        <span role="status">{pagina + 1} / {paginas.length}</span>
        <button type="button" aria-disabled={pagina === ultimaPagina} onClick={() => cambiarPagina((actual) => Math.min(ultimaPagina, actual + 1))}>
          Siguiente →
        </button>
      </nav>
    </div>
  );
}
