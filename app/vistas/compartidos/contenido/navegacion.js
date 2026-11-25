export const idInicio = "inicio";

export const seccionesNavegacion = [
  { id: idInicio, etiqueta: "Inicio" },
  { id: "habilidades", etiqueta: "Habilidades" },
  { id: "sobre-mi", etiqueta: "Sobre mí" },
  { id: "proyectos", etiqueta: "Proyectos" },
  { id: "certificados", etiqueta: "Certificados" },
  { id: "contacto", etiqueta: "Contacto" },
];

const idsPorFragmento = new Map(seccionesNavegacion.map(({ id }) => [`#${id}`, id]));

export function seccionDesdeFragmento(fragmento) {
  return idsPorFragmento.get(fragmento);
}
