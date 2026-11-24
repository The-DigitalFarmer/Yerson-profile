import { perfilGitHub } from "../contenido/canales";
import ArteInicioTerminal from "../../terminal/componentes/ArteInicioTerminal";
import FondoAscii from "../../normal/componentes/FondoAscii";
import LogoSocial from "./LogoSocial";

const nombre = "Yerson Cabrera Landa";
const descripcion = "Especializado en diseñar e implementar la arquitectura lógica, APIs y bases de datos que dan vida al software. Pasión por la automatización e Inteligencia Artificial";

export default function Presentacion() {
  const retrato = "/assets/svg/gilfoyle.svg";
  const descripcionRetrato = "Gilfoyle con gafas, cabello largo y camisa a cuadros.";

  return (
    <section id="inicio" className="presentacion" aria-labelledby="hero-title">
      <div className="distribucion-presentacion">
        <FondoAscii />
        <ArteInicioTerminal />
        <div className="texto-presentacion">
          <p className="nombre-perfil">{nombre}</p>
          <h1 id="hero-title">
            <span className="rol-presentacion">Backend</span>
            <br />{" "}
            <span>Developer</span>
          </h1>
          <p className="subtitulo-presentacion">
            <span>Autodidacta</span>
          </p>
          <p className="descripcion-presentacion">{descripcion}</p>
          <div className="acciones-presentacion">
            <a className="boton boton-principal" href="#proyectos">
              <span className="icono-reproducir" aria-hidden="true" /> Ver proyectos
              <span className="flecha-boton" aria-hidden="true">
                ↗
              </span>
              <code className="ficha-terminal ficha-terminal-navegacion ficha-terminal-contenido">cd proyectos</code>
            </a>
            <a
              className="boton boton-secundario"
              href={perfilGitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoSocial nombre="github" /> GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a className="explorar-habilidades" href="#habilidades">
            <span aria-hidden="true">↓</span> Descubre mi stack
            <span className="linea-explorar" aria-hidden="true"></span>
            <code className="ficha-terminal ficha-terminal-navegacion ficha-terminal-contenido">cd habilidades</code>
          </a>
        </div>
        <div className="zona-perfil">
          <div className="marco-perfil" aria-hidden="true">
            <span className="esquina-marco superior-izquierda"></span>
            <span className="esquina-marco superior-derecha"></span>
            <span className="esquina-marco inferior-izquierda"></span>
            <span className="esquina-marco inferior-derecha"></span>
            <div className="orbita-perfil" aria-hidden="true"></div>
          </div>
          <img
            className="retrato"
            src={retrato}
            width="600"
            height="820"
            alt={descripcionRetrato}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
