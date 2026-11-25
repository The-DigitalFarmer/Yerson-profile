import { rutaRetrato } from "../contenido/presentacion.js";

export const claveTema = "tema-portafolio";
export const cambioTema = "cambio-tema-portafolio";

export const prepararTema = `(() => {
  const raiz = document.documentElement;
  try {
    if (localStorage.getItem(${JSON.stringify(claveTema)}) === "terminal") {
      raiz.dataset.tema = "terminal";
    }
  } catch {}

  if (raiz.dataset.tema === "terminal") return;
  const retrato = document.createElement("link");
  retrato.rel = "preload";
  retrato.as = "image";
  retrato.href = ${JSON.stringify(rutaRetrato)};
  retrato.fetchPriority = "high";
  document.head.append(retrato);
})();`;
