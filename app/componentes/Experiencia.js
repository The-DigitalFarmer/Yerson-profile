import { experiencias } from "../contenido/portafolio";

export default function Experiencia() {
  return (
    <section className="seccion-contenido superficie-seccion" id="experiencia" aria-labelledby="experience-title">
      <p className="etiqueta-seccion">EXPERIENCE</p>
      <div className="cabecera-seccion">
        <h2 className="titulo-contenido" id="experience-title">I was born programming</h2>
        <span className="leyenda">DISPONIBLE</span>
      </div>
      <div className="cuadricula-contenido">
        {experiencias.map((experiencia) => (
          <article className="entrada-experiencia" key={experiencia.titulo}>
            <header className="resumen-experiencia">
              <span className="leyenda">{experiencia.fechas}</span>
              <h3>{experiencia.titulo}</h3>
              <span className="empresa-experiencia">{experiencia.empresa} <span>{experiencia.modalidad}</span></span>
            </header>
            <div className="detalle-experiencia">
              <p className="texto-cuerpo">{experiencia.resumen}</p>
              <ul className="lista-etiquetas" aria-label={`Herramientas de ${experiencia.titulo}`}>
                {experiencia.tecnologias.map((tecnologia) => <li key={tecnologia}>{tecnologia}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
