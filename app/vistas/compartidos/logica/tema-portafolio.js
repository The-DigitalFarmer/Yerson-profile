export const claveTema = "tema-portafolio";
export const cambioTema = "cambio-tema-portafolio";

function esComputadora(navegador, punteroTactil) {
  const plataforma = navegador.userAgentData?.platform || navegador.platform;
  const identidad = `${plataforma} ${navegador.userAgent}`;
  if (navegador.userAgentData?.mobile || /android|iphone|ipad|ipod|mobile|tablet|kindle|silk|blackberry|webos|tizen/i.test(identidad)) {
    return false;
  }

  const tactil = navegador.maxTouchPoints > 0;
  if (tactil && (punteroTactil || /macintosh|macintel|macos/i.test(identidad))) return false;

  return /windows|win32|win64|macintosh|macintel|macos|linux|cros|chrome os|freebsd|openbsd/i.test(identidad);
}

export const prepararTema = `(() => {
  const raiz = document.documentElement;
  const disponible = (${esComputadora.toString()})(navigator, matchMedia("(pointer: coarse)").matches);
  if (!disponible) return;

  raiz.setAttribute("data-terminal-disponible", "");
  try {
    if (localStorage.getItem(${JSON.stringify(claveTema)}) === "terminal") {
      raiz.dataset.tema = "terminal";
    }
  } catch {}
})();`;
