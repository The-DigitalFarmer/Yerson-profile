import { columnasCampo, crearCampoAscii, filasCampo } from "../logica/animacion-ascii";
import FiguraAscii from "./FiguraAscii";

const celdasCampo = crearCampoAscii();

export default function FondoAscii() {
  return (
    <div className="fondo-ascii" aria-hidden="true">
      <div className="campo-ascii" style={{ "--columnas": columnasCampo, "--filas": filasCampo }}>
        {celdasCampo.map(({ fila, columna, caracter, destella }) => (
          <span
            key={`${fila}/${columna}`}
            data-destello={destella || undefined}
            style={{ gridArea: `${fila}/${columna}`, "--desfase": `${-(fila + columna) % 9}s` }}
          >
            {caracter}
          </span>
        ))}
      </div>
      <FiguraAscii />
    </div>
  );
}
