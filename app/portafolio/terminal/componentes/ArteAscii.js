import { arteTerminal } from "../contenido/arte-terminal";

export default function ArteAscii({ ruta }) {
  if (!Object.hasOwn(arteTerminal, ruta)) return null;
  const simbolo = arteTerminal[ruta];

  return (
    <span className="arte-terminal arte-terminal-texto" aria-hidden="true">
      {typeof simbolo === "string" ? simbolo : simbolo.map(([texto, color], indice) => (
        <span key={indice} style={{ color }}>{texto}</span>
      ))}
    </span>
  );
}
