import { canalesContacto } from "../../contenido/canales";
import ArteAscii from "../../terminal/componentes/ArteAscii";
import TituloContactoTerminal from "./TituloContactoTerminal";
import LogoSocial from "../../componentes/LogoSocial";
import EnlaceExterno from "../../componentes/EnlaceExterno";
import SeccionPortafolio from "../../componentes/SeccionPortafolio";
import { idContacto } from "../../navegacion/secciones";

const canalesDestacados = canalesContacto.filter(({ invitacion }) => invitacion);

function IconoDeContacto({ canal }) {
  if (canal !== "gmail") return <LogoSocial nombre={canal} />;

  return (
    <>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18v14H3Zm0 1 9 7 9-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="miter" />
      </svg>
      <ArteAscii ruta="gmail" />
    </>
  );
}

export default function Contacto() {
  return (
    <SeccionPortafolio className="seccion-contacto" id={idContacto} tituloId="contact-title" etiqueta="CONTACT">
      <div className="distribucion-contacto">
        <div className="texto-contacto">
          <h2 className="titulo-seccion" id="contact-title">
            <TituloContactoTerminal />
            Hablemos de tu<br />{" "}
            <span>próxima idea.</span>
          </h2>
          <p className="descripcion-contacto">
            ¿Tienes un proyecto en mente o un reto por resolver? Hablemos de
            cómo puedo aportar desde el backend.
          </p>
        </div>
        <nav className="canales-contacto" aria-label="Canales de contacto">
          {canalesDestacados.map(({ id, nombre, enlace, enlaceConMensaje, invitacion, etiquetaAccesible }) => (
            <EnlaceExterno
              key={id}
              className={id === "gmail" ? "canal-contacto canal-contacto--gmail" : "canal-contacto"}
              href={enlaceConMensaje ?? enlace}
              aria-label={etiquetaAccesible}
            >
              <span className="cabecera-canal">
                <IconoDeContacto canal={id} />
                <span aria-hidden="true">↗</span>
              </span>
              <strong>{nombre}</strong>
              <span className="invitacion-canal">{invitacion}</span>
            </EnlaceExterno>
          ))}
        </nav>
      </div>
    </SeccionPortafolio>
  );
}
