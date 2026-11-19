export const claveTemaGuardado = "digitalfarmer-theme";

// Estos valores coinciden con los guardados por versiones anteriores y con el CSS.
export const temaClaro = "light";
export const temaOscuro = "dark";

const temasDisponibles = [temaClaro, temaOscuro];

export function leerTemaGuardado(temaAnterior) {
  try {
    const temaGuardado = localStorage.getItem(claveTemaGuardado);
    return temasDisponibles.includes(temaGuardado) ? temaGuardado : null;
  } catch {
    return temaAnterior;
  }
}

// Aplica la elección guardada antes de pintar la página y evita un destello del otro tema.
export const codigoTemaInicial = `
try {
  const tema = localStorage.getItem(${JSON.stringify(claveTemaGuardado)});
  if (${JSON.stringify(temasDisponibles)}.includes(tema)) {
    document.documentElement.dataset.theme = tema;
  }
} catch {}
`;
