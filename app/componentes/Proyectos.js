import Imagen from "next/image";
import { perfilGitHub } from "../contenido/canales";
import { proyectos } from "../contenido/portafolio";

// Hasta 800 px la cuadrícula usa una columna. En pantallas más amplias usa tres.
const tamanosImagen = [
  "(max-width: 400px) calc(100vw - 64px)",
  "(max-width: 800px) 84vw",
  "(max-width: 1152px) 28vw",
  "314px",
].join(", ");

function TarjetaProyecto({ proyecto }) {
  const { id, nombre, tipo, descripcion, imagen, enlaceRepositorio, enlaceSitioWeb } = proyecto;
  const enlaces = [
    { etiqueta: "Repositorio", url: enlaceRepositorio },
    { etiqueta: "Ver web", url: enlaceSitioWeb },
  ].filter(({ url }) => url);

  return (
    <article className="tarjeta-proyecto" aria-labelledby={id}>
      <div className="imagen-proyecto">
        <Imagen
          src={imagen.ruta}
          width={imagen.ancho}
          height={imagen.alto}
          alt={imagen.textoAlternativo}
          sizes={tamanosImagen}
        />
      </div>
      <div className="texto-proyecto">
        <p className="tipo-proyecto">{tipo}</p>
        <h3 id={id}>{nombre}</h3>
        <p className="texto-cuerpo">{descripcion}</p>
        {enlaces.length > 0 && (
          <div className="acciones-proyecto">
            {enlaces.map(({ etiqueta, url }) => (
              <a
                className="enlace-proyecto"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${etiqueta} de ${nombre}`}
                key={etiqueta}
              >
                {etiqueta} <span key="flecha" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Proyectos() {
  return (
    <section
      className="seccion-proyectos seccion-contenido superficie-seccion"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <p className="etiqueta-seccion">PROJECTS</p>
      <div className="cabecera-seccion">
        <h2 className="titulo-contenido" id="projects-title">Projects in Production</h2>
        <a
          className="todos-los-proyectos"
          href={`${perfilGitHub}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="cuadricula-proyectos">
        {proyectos.map((proyecto) => <TarjetaProyecto proyecto={proyecto} key={proyecto.id} />)}
      </div>
    </section>
  );
}
