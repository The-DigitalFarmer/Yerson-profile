import assert from "node:assert/strict";
import test from "node:test";
import { seccionesNavegacion } from "../app/portafolio/navegacion/secciones.js";
import { interpretarComando } from "../app/portafolio/terminal/logica/comandos-terminal.js";

test("ls lista las secciones en el mismo orden que la navegación", () => {
  assert.deepEqual(interpretarComando("  LS  "), {
    tipo: "listado",
    texto: seccionesNavegacion.map(({ id }) => `${id}/`).join("  "),
  });
});

test("cd abre secciones y reconoce rutas relativas y el directorio raíz", () => {
  for (const { id } of seccionesNavegacion) {
    assert.deepEqual(interpretarComando(`  CD\t./${id.toUpperCase()}/  `), {
      tipo: "navegacion",
      destino: id,
    });
  }

  for (const comando of ["cd", "cd ..", "cd ../", "cd ./", "cd /"]) {
    assert.deepEqual(interpretarComando(comando), { tipo: "navegacion", destino: "inicio" });
  }
});

test("la terminal distingue una sección inexistente de un comando desconocido", () => {
  assert.equal(interpretarComando(" \t "), null);
  assert.deepEqual(interpretarComando("cd proyectos extra"), {
    tipo: "error",
    texto: "Esa sección no existe. Usa ls para ver las disponibles.",
  });
  assert.deepEqual(interpretarComando("ls proyectos"), {
    tipo: "error",
    texto: "Comando desconocido. Usa ls o cd <sección>.",
  });
});
