import Imagen from "next/image";
import { canalesContacto } from "../contenido/canales";
import { seccionesNavegacion } from "../contenido/navegacion";
import AnioCopyright from "./AnioCopyright";

const seccionesExplorables = seccionesNavegacion.filter(({ id }) => (
  id !== "inicio" && id !== "contacto"
));

export default function PieDePagina() {
  return (
    <footer className="pie-de-pagina">
      <div className="cuadricula-pie">
        <div className="marca-pie">
          <a href="#inicio" aria-label="DigitalFarmer, inicio">
            <img src="/assets/svg/avatar.svg" alt="" width={44} height={44} />
            <strong>RecklessCode</strong>
          </a>
          <p>Python, APIs y automatización</p>
        </div>
        <nav className="columna-pie" aria-label="Explorar el portafolio">
          <h3>EXPLORAR</h3>
          {seccionesExplorables.map(({ id, etiqueta }) => (
            <a href={`#${id}`} key={id}>{etiqueta}</a>
          ))}
        </nav>
        <nav className="columna-pie" aria-label="Canales de contacto">
          <h3>CONECTEMOS</h3>
          {canalesContacto.map(({ id, enlace, nombre }) => {
            const abreOtraPestana = enlace.startsWith("https:");

            return (
              <a
                href={enlace}
                key={id}
                target={abreOtraPestana ? "_blank" : undefined}
                rel={abreOtraPestana ? "noopener noreferrer" : undefined}
              >
                {nombre} <span key="flecha" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="datos-pie">
        <span className="nombre-pie">Reckless Foundation</span>
        <span className="derechos-pie">
          © <AnioCopyright anioInicial={new Date().getFullYear()} />
        </span>
        <a className="enlace-inicio-pie" href="#inicio">
          <Imagen className="icono-inicio-pie" src="/assets/png/reacklessIcon.png" alt="" width={72} height={48} />
          <span>Volver al inicio <span aria-hidden="true">↑</span></span>
        </a>
      </div>
    </footer>
  );
}
