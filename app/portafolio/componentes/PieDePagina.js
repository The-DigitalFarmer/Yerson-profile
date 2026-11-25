import { canalesContacto } from "../contenido/canales";
import { idContacto, idInicio, seccionesNavegacion } from "../navegacion/secciones";
import AnioCopyright from "./AnioCopyright";
import EnlaceExterno from "./EnlaceExterno";

const seccionesExplorables = seccionesNavegacion.filter(({ id }) => (
  id !== idInicio && id !== idContacto
));

export default function PieDePagina() {
  return (
    <footer className="pie-de-pagina">
      <div className="cuadricula-pie">
        <div className="marca-pie">
          <a href={`#${idInicio}`} aria-label="DigitalFarmer, inicio">
            <img src="/assets/svg/avatar.svg" alt="" width={44} height={44} loading="lazy" />
            <strong>Renegade</strong>
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
          {canalesContacto.map(({ id, enlace, nombre }) => (
            <EnlaceExterno href={enlace} key={id} nuevaPestana={enlace.startsWith("https:")}>
              {nombre} <span aria-hidden="true">↗</span>
            </EnlaceExterno>
          ))}
        </nav>
      </div>
      <div className="datos-pie">
        <span className="nombre-pie">Renegade Foundation</span>
        <span className="derechos-pie">
          © <AnioCopyright anioInicial={new Date().getFullYear()} />
        </span>
        <a className="enlace-inicio-pie" href={`#${idInicio}`}>
          Volver al inicio <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
