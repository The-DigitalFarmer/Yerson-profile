import Imagen from "next/image";
import { perfilGitHub } from "../../contenido/canales";
import { proyectos } from "./datos";
import PaginasTerminal from "../../terminal/componentes/PaginasTerminal";
import EnlaceExterno from "../../componentes/EnlaceExterno";
import SeccionPortafolio from "../../componentes/SeccionPortafolio";
import { idProyectos } from "../../navegacion/secciones";

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
              <EnlaceExterno
                className="enlace-proyecto"
                href={url}
                aria-label={`${etiqueta} de ${nombre}`}
                key={etiqueta}
              >
                {etiqueta} <span aria-hidden="true">↗</span>
              </EnlaceExterno>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Proyectos() {
  return (
    <SeccionPortafolio
      className="seccion-contenido seccion-proyectos"
      id={idProyectos}
      tituloId="projects-title"
      etiqueta="PROJECTS"
    >
      <div className="cabecera-seccion">
        <h2 className="titulo-contenido" id="projects-title">Proyectos destacados</h2>
        <EnlaceExterno
          className="todos-los-proyectos"
          href={`${perfilGitHub}?tab=repositories`}
        >
          Ver todos <span aria-hidden="true">→</span>
        </EnlaceExterno>
      </div>
      <div className="cuadricula-proyectos">
        <PaginasTerminal etiqueta="Páginas de Proyectos">
          {proyectos.map((proyecto) => <TarjetaProyecto proyecto={proyecto} key={proyecto.id} />)}
        </PaginasTerminal>
      </div>
    </SeccionPortafolio>
  );
}
