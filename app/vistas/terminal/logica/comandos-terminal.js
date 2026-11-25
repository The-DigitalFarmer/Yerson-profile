import { idInicio, seccionesNavegacion } from "../../compartidos/contenido/navegacion.js";

const directorios = new Set(seccionesNavegacion.map(({ id }) => id));
const listado = Array.from(directorios, (id) => `${id}/`).join("  ");

export function interpretarComando(comando) {
  const entrada = comando.trim().toLowerCase();
  if (!entrada) return null;
  if (entrada === "ls") return { tipo: "listado", texto: listado };

  const [accion, ...argumentos] = entrada.split(/\s+/);
  if (accion !== "cd") {
    return { tipo: "error", texto: "Comando desconocido. Usa ls o cd <sección>." };
  }

  const destino = argumentos.join(" ").replace(/^\.\//, "").replace(/\/$/, "");
  if (!destino || destino === "..") return { tipo: "navegacion", destino: idInicio };
  if (directorios.has(destino)) return { tipo: "navegacion", destino };

  return { tipo: "error", texto: "Esa sección no existe. Usa ls para ver las disponibles." };
}
