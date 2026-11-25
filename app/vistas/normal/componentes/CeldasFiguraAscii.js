export default function CeldasFiguraAscii({ celdas }) {
  return celdas.map(({ fila, columna, caracter, tipo, brillo }) => (
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
  ));
}
