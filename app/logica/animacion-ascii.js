export const columnasCampo = 42;
export const filasCampo = 22;
export const columnasFigura = 33;
export const filasFigura = 21;
export const fotogramasPorCiclo = 64;
export const proporcionCelda = 1.32;

const caracteresCampo = "...::+*=<>/{}[]";
const caracteresFigura = {
  rayo: "t%S+tx%",
  nucleo: "%:+*",
  contorno: ".:o",
};
const vueltaCompleta = Math.PI * 2;

// Cada fila indica el ángulo en grados, la longitud y la mitad del grosor de un rayo.
const rayosBase = [
  [2.5, 13.8, 1.05],
  [28, 12.9, 1.05],
  [60, 10.5, 1.05],
  [93, 11.3, 0.9],
  [125, 9.4, 1.1],
  [153, 11.9, 1.2],
  [181, 13.5, 1.1],
  [218, 12.8, 1.05],
  [244, 9.6, 0.95],
  [270, 11.5, 0.9],
  [300, 12, 1.1],
  [332, 9.5, 1.1],
];

// La misma semilla produce el mismo ruido entre el servidor y el navegador.
function generarRuido(semilla) {
  const mezcla = Math.imul(semilla ^ (semilla >>> 16), 0x45d9f3b);
  return (Math.imul(mezcla ^ (mezcla >>> 16), 0x45d9f3b) >>> 0) / 0x100000000;
}

function elegirCaracter(caracteres, semilla) {
  const indice = Math.floor(generarRuido(semilla) * caracteres.length);
  return caracteres[indice];
}

export function crearCampoAscii() {
  const celdas = [];

  for (let fila = 1; fila <= filasCampo; fila++) {
    for (let columna = 1; columna <= columnasCampo; columna++) {
      const indice = (fila - 1) * columnasCampo + columna;
      const densidad = columna <= 5 || columna >= 32 ? 0.17 : 0.065;
      if (generarRuido(indice) >= densidad) continue;

      celdas.push({
        fila,
        columna,
        caracter: elegirCaracter(caracteresCampo, indice + 1000),
        destella: indice % 7 === 0,
      });
    }
  }

  return celdas;
}

const celdasFigura = Array.from({ length: columnasFigura * filasFigura }, (_, indice) => {
  const fila = Math.floor(indice / columnasFigura);
  const columna = indice % columnasFigura;
  const x = columna - (columnasFigura - 1) / 2;
  const y = (fila - (filasFigura - 1) / 2) * proporcionCelda;

  return {
    indice,
    fila: fila + 1,
    columna: columna + 1,
    x,
    y,
    distanciaAlCentro: Math.hypot(x, y),
    variacion: generarRuido(indice + 1),
  };
}).filter(({ distanciaAlCentro }) => distanciaAlCentro <= 16);

function calcularRayos(fase) {
  const giro = 0.095 * Math.sin(fase) + 0.045 * Math.sin(fase * 2);

  return rayosBase.map(([grados, longitud, semigrosor], indice) => {
    const desfase = fase * 2 - indice * 0.74;
    const angulo = grados / 360 * vueltaCompleta + giro + 0.045 * Math.sin(desfase);

    return {
      coseno: Math.cos(angulo),
      seno: Math.sin(angulo),
      longitud: longitud + 0.86 * Math.sin(desfase),
      semigrosor: semigrosor + 0.14 * Math.cos(desfase),
    };
  });
}

function clasificarCelda({ x, y, distanciaAlCentro, variacion }, rayos, radioNucleo) {
  if (distanciaAlCentro <= radioNucleo) return "nucleo";
  if (distanciaAlCentro <= 3.65) return "rayo";

  let enContorno = false;
  for (const { coseno, seno, longitud, semigrosor } of rayos) {
    // Proyecta la celda sobre el eje del rayo y mide su distancia a ese eje.
    const avance = x * coseno + y * seno;
    if (avance < 0 || avance > longitud + 1.4) continue;

    const distanciaAlEje = Math.abs(x * seno - y * coseno);
    if (avance <= longitud && distanciaAlEje <= semigrosor) return "rayo";
    enContorno ||= distanciaAlEje <= semigrosor + 0.8;
  }

  return enContorno && variacion > 0.67 ? "contorno" : null;
}

function calcularFotograma(paso) {
  const fase = paso / fotogramasPorCiclo * vueltaCompleta;
  const rayos = calcularRayos(fase);
  const radioNucleo = 2.8 + 0.24 * Math.sin(fase * 2);
  const celdas = [];

  for (const celda of celdasFigura) {
    const tipo = clasificarCelda(celda, rayos, radioNucleo);
    if (!tipo) continue;

    const { indice, fila, columna, x, distanciaAlCentro, variacion } = celda;
    const cambio = Math.floor((paso + indice % 5) / 4);
    const caracter = elegirCaracter(caracteresFigura[tipo], indice + 423 + cambio * 937);

    // El brillo avanza hacia los extremos y es más intenso en el lado derecho.
    const pulso = Math.sin(fase * 2 - distanciaAlCentro * 0.62) * 6;
    const brilloBase = tipo === "nucleo" ? 84 : 62 + x * 1.8;
    const brillo = Math.min(100, Math.round(brilloBase + variacion * 12 + pulso));

    celdas.push({ fila, columna, caracter, tipo, brillo });
  }

  return celdas;
}

const fotogramasCalculados = [];

export function obtenerFotogramaAscii(fotograma = 0) {
  const paso = ((fotograma % fotogramasPorCiclo) + fotogramasPorCiclo) % fotogramasPorCiclo;

  // La figura se repite. Solo se calcula la geometría la primera vez que se muestra cada paso.
  return fotogramasCalculados[paso] ??= calcularFotograma(paso);
}
