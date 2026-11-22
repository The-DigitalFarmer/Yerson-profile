import { perfilGitHub } from "../contenido/canales";
import FondoAscii from "./FondoAscii";
import LogoSocial from "./LogoSocial";

export default function Presentacion() {
  return (
    <section id="inicio" className="presentacion" aria-labelledby="hero-title">
      <FondoAscii />
      <div className="distribucion-presentacion">
        <div className="texto-presentacion">
          <h1 id="hero-title">
            <span className="rol-presentacion">Backend</span>
            <br />
            <span>Developer</span>
          </h1>
          <p className="subtitulo-presentacion">
            <span>Autodidacta</span>
          </p>
          <p className="descripcion-presentacion">
            Especializado en diseñar e implementar la arquitectura
            lógica, APIs y bases de datos que dan vida al software.
            Pasión por la automatización e Inteligencia Artificial
          </p>
          <div className="acciones-presentacion">
            <a className="boton boton-principal" href="#proyectos">
              <span className="icono-reproducir" aria-hidden="true" /> Ver proyectos
              <span className="flecha-boton" aria-hidden="true">
                ↗
              </span>
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
          </a>
        </div>
        <div className="zona-perfil">
          <div className="marco-perfil">
            <span className="esquina-marco superior-izquierda"></span>
            <span className="esquina-marco superior-derecha"></span>
            <span className="esquina-marco inferior-izquierda"></span>
            <span className="esquina-marco inferior-derecha"></span>
            <div className="orbita-perfil" aria-hidden="true"></div>
            <div className="rotulo-perfil">
              <span className="nombre-perfil">YERSON CABRERA LANDA</span>
            </div>
          </div>
          <img
            className="retrato"
            src="/assets/svg/gilfoyle.svg"
            width="600"
            height="820"
            alt="Gilfoyle con gafas, cabello largo y camisa a cuadros."
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
