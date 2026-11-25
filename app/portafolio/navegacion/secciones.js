export const idInicio = "inicio";
export const idHabilidades = "habilidades";
export const idPerfil = "sobre-mi";
export const idProyectos = "proyectos";
export const idCertificados = "certificados";
export const idContacto = "contacto";


export const seccionesNavegacion = [
  { id: idInicio, etiqueta: "Inicio" },
  { id: idHabilidades, etiqueta: "Habilidades" },
  { id: idPerfil, etiqueta: "Sobre mí" },
  { id: idProyectos, etiqueta: "Proyectos" },
  { id: idCertificados, etiqueta: "Certificados" },
  { id: idContacto, etiqueta: "Contacto" },
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
