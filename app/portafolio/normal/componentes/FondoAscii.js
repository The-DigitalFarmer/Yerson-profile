import {
  columnasCampo,
  columnasFigura,
  crearCampoAscii,
  filasCampo,
  filasFigura,
  obtenerFotogramaAscii,
  proporcionCelda,
} from "../logica/animacion-ascii";
import CeldasFiguraAscii from "./CeldasFiguraAscii";
import FiguraAscii from "./FiguraAscii";

const celdasCampo = crearCampoAscii();
const estiloFigura = {
  "--columnas": columnasFigura,
  "--filas": filasFigura,
  "--proporcion-celda": proporcionCelda,
};

export default function FondoAscii() {
  return (
    <div className="fondo-ascii" aria-hidden="true">
      <div className="campo-ascii" style={{ "--columnas": columnasCampo, "--filas": filasCampo }}>
        {celdasCampo.map(({ fila, columna, caracter, destella }) => (
          <span
            key={`${fila}/${columna}`}
            data-destello={destella || undefined}
            style={{
              gridArea: `${fila}/${columna}`,
              "--desfase": destella ? `${-(fila + columna) % 9}s` : undefined,
            }}
          >
            {caracter}
          </span>
        ))}
      </div>
      <FiguraAscii estilo={estiloFigura}>
        <CeldasFiguraAscii celdas={obtenerFotogramaAscii()} />
      </FiguraAscii>
    </div>
  );
}
