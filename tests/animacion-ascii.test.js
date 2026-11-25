import assert from "node:assert/strict";
import test from "node:test";
import {
  columnasCampo,
  columnasFigura,
  crearCampoAscii,
  filasCampo,
  filasFigura,
  fotogramasPorCiclo,
  obtenerFotogramaAscii,
} from "../app/portafolio/normal/logica/animacion-ascii.js";

test("el fondo ASCII es reproducible y usa un solo carácter por celda", () => {
  for (const [generar, columnas, filas] of [
    [crearCampoAscii, columnasCampo, filasCampo],
    [obtenerFotogramaAscii, columnasFigura, filasFigura],
  ]) {
    const celdas = generar();
    const coordenadas = new Set();
    assert.ok(celdas.length > 0);
    assert.deepEqual(celdas, generar());

    for (const { caracter, fila, columna } of celdas) {
      assert.match(caracter, /^[!-~]$/);
      assert.ok(fila >= 1 && fila <= filas);
      assert.ok(columna >= 1 && columna <= columnas);
      coordenadas.add(`${fila}/${columna}`);
    }

    assert.equal(coordenadas.size, celdas.length);
  }
});

test("la figura cambia de silueta y brillo, y reutiliza los fotogramas del ciclo", () => {
  const primerFotograma = obtenerFotogramaAscii(0);
  const fotogramaIntermedio = obtenerFotogramaAscii(Math.floor(fotogramasPorCiclo / 4));
  const celdasOcupadas = (celdas) => celdas
    .filter(({ tipo }) => tipo !== "contorno")
    .map(({ fila, columna }) => [fila, columna]);

  assert.notDeepEqual(celdasOcupadas(primerFotograma), celdasOcupadas(fotogramaIntermedio));
  assert.notDeepEqual(
    primerFotograma.map(({ brillo }) => brillo),
    fotogramaIntermedio.map(({ brillo }) => brillo),
  );
  assert.equal(primerFotograma, obtenerFotogramaAscii(fotogramasPorCiclo));

  for (let paso = 0; paso < fotogramasPorCiclo; paso++) {
    assert.ok(obtenerFotogramaAscii(paso).every(({ brillo }) => brillo >= 0 && brillo <= 100));
  }
});
