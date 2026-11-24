import { enfoques } from "../contenido/portafolio";
import PaginasTerminal from "../../terminal/componentes/PaginasTerminal";

export default function Perfil() {
  return (
    <section className="seccion-contenido superficie-seccion" id="sobre-mi" aria-labelledby="about-title">
      <p className="etiqueta-seccion">ABOUT</p>
      <div className="cuadricula-enfoques">
        <header className="introduccion-enfoques">
          <h2 id="about-title"><span>Deep</span> <span>Focus</span></h2>
          <p className="texto-introduccion-enfoques">Del problema al código: así pienso, construyo y sigo aprendiendo.</p>
        </header>
        <PaginasTerminal etiqueta="Páginas de Sobre mí">
          {enfoques.map((enfoque) => (
            <article className="tarjeta-enfoque" key={enfoque.titulo}>
              <p className="etiqueta-enfoque">{enfoque.etiqueta}</p>
              <h3>{enfoque.titulo}</h3>
              <p className="descripcion-enfoque">{enfoque.descripcion}</p>
              <ul className="etiquetas-enfoque" aria-label={`Enfoques de ${enfoque.titulo.toLowerCase()}`}>
                {enfoque.etiquetas.map((etiqueta) => <li key={etiqueta}>{etiqueta}</li>)}
              </ul>
            </article>
          ))}
        </PaginasTerminal>
        <nav className="enlaces-enfoques" aria-label="Explorar el portafolio">
          <a href="#habilidades">Explora mi stack <span aria-hidden="true">↗</span></a>
          <a href="#proyectos">Ver proyectos <span aria-hidden="true">↗</span></a>
          <a href="#contacto">Conversemos <span aria-hidden="true">→</span></a>
        </nav>
      </div>
    </section>
  );
}
