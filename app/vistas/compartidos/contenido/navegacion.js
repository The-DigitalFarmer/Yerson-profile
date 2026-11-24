export const seccionesNavegacion = [
  { id: "inicio", etiqueta: "Inicio" },
  { id: "habilidades", etiqueta: "Habilidades" },
  { id: "sobre-mi", etiqueta: "Sobre mí" },
  { id: "proyectos", etiqueta: "Proyectos" },
  { id: "certificados", etiqueta: "Certificados" },
  { id: "contacto", etiqueta: "Contacto" },
];

export function seccionDesdeFragmento(fragmento) {
  return seccionesNavegacion.find(({ id }) => `#${id}` === fragmento)?.id;
}
