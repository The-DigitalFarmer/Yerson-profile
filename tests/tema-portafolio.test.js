import assert from "node:assert/strict";
import test from "node:test";
import { runInNewContext } from "node:vm";
import { rutaRetrato } from "../app/portafolio/secciones/presentacion/datos.js";
import { claveTema, prepararTema } from "../app/portafolio/tema/tema-portafolio.js";

function iniciarTema(localStorage) {
  const raiz = { dataset: {} };
  const precargas = [];
  runInNewContext(prepararTema, {
    document: {
      documentElement: raiz,
      createElement: (etiqueta) => ({ etiqueta }),
      head: { append: (elemento) => precargas.push(elemento) },
    },
    localStorage,
  });
  return { tema: raiz.dataset.tema, precargas };
}

test("el portafolio abre en la vista normal sin una preferencia guardada", () => {
  const { tema, precargas } = iniciarTema({ getItem: () => null });
  assert.equal(tema, undefined);
  assert.deepEqual(precargas, [{
    etiqueta: "link",
    rel: "preload",
    as: "image",
    href: rutaRetrato,
    fetchPriority: "high",
  }]);
});

test("el portafolio recupera la vista Terminal guardada sin precargar el retrato", () => {
  const { tema, precargas } = iniciarTema({ getItem: (clave) => clave === claveTema ? "terminal" : null });
  assert.equal(tema, "terminal");
  assert.deepEqual(precargas, []);
});

test("el portafolio abre en la vista normal si el almacenamiento está bloqueado", () => {
  assert.equal(iniciarTema({
    getItem() {
      throw new Error("Almacenamiento bloqueado");
    },
  }).tema, undefined);
});
