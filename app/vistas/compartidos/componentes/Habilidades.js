import Imagen from "next/image";
import { gruposHabilidades } from "../contenido/portafolio";
import ArteAscii from "../../terminal/componentes/ArteAscii";
import SeccionPortafolio from "./SeccionPortafolio";

export default function Habilidades() {
  const avatar = "/assets/svg/avatar.svg";
  const descripcionAvatar = "Personaje crema con cuernos curvos y ojos negros.";

  return (
    <SeccionPortafolio id="habilidades" tituloId="skills-title" etiqueta="SKILLS">
      <div className="resumen-habilidades">
        <img
          className="avatar-habilidades"
          src={avatar}
          alt={descripcionAvatar}
          width={1000}
          height={1195}
          loading="lazy"
          decoding="async"
        />
        <h2 id="skills-title">Stack</h2>
        <p>Herramientas que convierten ideas en código</p>
      </div>
      <div className="red-habilidades">
        {gruposHabilidades.map(({ etiqueta, etiquetaAccesible, herramientas }) => (
          <div className="grupo-habilidades" key={etiqueta}>
            <h3>{etiqueta}</h3>
            <ul className="lista-herramientas" aria-label={etiquetaAccesible}>
              {herramientas.map(({ nombre, logo }) => (
                <li className="insignia-herramienta" key={nombre}>
                  {logo && (
                    <>
                      <Imagen className="logo-herramienta" src={logo} alt="" width={20} height={20} />
                      <ArteAscii ruta={logo} />
                    </>
                  )}
                  <span>{nombre}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SeccionPortafolio>
  );
}
