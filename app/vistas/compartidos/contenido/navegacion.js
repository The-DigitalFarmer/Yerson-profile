export const idInicio = "inicio";

export const seccionesNavegacion = [
  { id: idInicio, etiqueta: "Inicio" },
  { id: "habilidades", etiqueta: "Habilidades" },
  { id: "sobre-mi", etiqueta: "Sobre mí" },
  { id: "proyectos", etiqueta: "Proyectos" },
  { id: "certificados", etiqueta: "Certificados" },
  { id: "contacto", etiqueta: "Contacto" },
];

const idsSecciones = new Set(seccionesNavegacion.map(({ id }) => id));

export function esSeccion(id) {
  return idsSecciones.has(id);
}

export function seccionDesdeFragmento(fragmento) {
  if (typeof fragmento !== "string" || !fragmento.startsWith("#")) return undefined;
  const id = fragmento.slice(1);
  return esSeccion(id) ? id : undefined;
}
