export default function SeccionPortafolio({ id, tituloId, etiqueta, className = "seccion-contenido", children }) {
  return (
    <section className={`${className} superficie-seccion`} id={id} aria-labelledby={tituloId}>
      {etiqueta && <p className="etiqueta-seccion">{etiqueta}</p>}
      {children}
    </section>
  );
}
