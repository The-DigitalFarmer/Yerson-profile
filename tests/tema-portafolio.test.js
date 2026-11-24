import assert from "node:assert/strict";
import test from "node:test";
import { runInNewContext } from "node:vm";
import { claveTema, prepararTema } from "../app/vistas/compartidos/logica/tema-portafolio.js";

function iniciarTema(navigator, { tactil = false, guardado = "terminal" } = {}) {
  const raiz = {
    atributos: new Map(),
    dataset: {},
    setAttribute(nombre, valor) {
      this.atributos.set(nombre, valor);
    },
  };

  runInNewContext(prepararTema, {
    navigator,
    document: { documentElement: raiz },
    matchMedia: () => ({ matches: tactil }),
    localStorage: { getItem: (clave) => clave === claveTema ? guardado : null },
  });
  return { disponible: raiz.atributos.has("data-terminal-disponible"), tema: raiz.dataset.tema };
}

test("una computadora puede acceder a la terminal y recuperar su preferencia", () => {
  const pcTactil = { platform: "Win32", userAgent: "Windows NT 10.0", maxTouchPoints: 10 };

  assert.deepEqual(iniciarTema(pcTactil), { disponible: true, tema: "terminal" });
  assert.deepEqual(iniciarTema(pcTactil, { guardado: null }), { disponible: true, tema: undefined });
});

test("celulares y tablets abren la vista normal aunque hayan guardado la terminal", () => {
  const dispositivos = [
    [{ platform: "iPhone", userAgent: "iPhone; CPU iPhone OS", maxTouchPoints: 5 }],
    [{ platform: "Linux", userAgent: "Linux; Android 16; Pixel Tablet", maxTouchPoints: 10 }],
    [{ platform: "MacIntel", userAgent: "Macintosh; Intel Mac OS X", maxTouchPoints: 5 }],
    [{ platform: "Linux x86_64", userAgent: "X11; Linux x86_64", maxTouchPoints: 10 }, { tactil: true }],
  ];

  for (const [navegador, opciones] of dispositivos) {
    assert.deepEqual(iniciarTema(navegador, opciones), { disponible: false, tema: undefined });
  }
});
