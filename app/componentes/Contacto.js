import { canalesContacto } from "../contenido/canales";
import LogoSocial from "./LogoSocial";

const canalesDestacados = canalesContacto.filter(({ invitacion }) => invitacion);

function IconoDeContacto({ canal }) {
  if (canal !== "gmail") return <LogoSocial nombre={canal} />;

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 5h18v14H3Zm0 1 9 7 9-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function Contacto() {
  return (
    <section className="seccion-contacto superficie-seccion" id="contacto" aria-labelledby="contact-title">
      <p className="etiqueta-seccion">CONTACT</p>
      <div className="distribucion-contacto">
        <div className="texto-contacto">
          <h2 className="titulo-seccion" id="contact-title">
            Hablemos de tu<br />
            <span>próxima idea.</span>
          </h2>
          <p className="descripcion-contacto">
            ¿Tienes un proyecto en mente o un reto por resolver? Hablemos de
            cómo puedo aportar desde el backend.
          </p>
        </div>
        <nav className="canales-contacto" aria-label="Canales de contacto">
          {canalesDestacados.map(({ id, nombre, enlace, enlaceConMensaje, invitacion, etiquetaAccesible }) => (
            <a
              key={id}
              className={id === "gmail" ? "canal-contacto canal-contacto--gmail" : "canal-contacto"}
              href={enlaceConMensaje ?? enlace}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={etiquetaAccesible}
            >
              <span className="cabecera-canal" key="cabecera">
                <IconoDeContacto canal={id} />
                <span aria-hidden="true">↗</span>
              </span>
              <strong key="nombre">{nombre}</strong>
              <span className="invitacion-canal" key="invitacion">{invitacion}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
