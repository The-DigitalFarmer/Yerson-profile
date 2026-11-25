import Imagen from "next/image";
import { certificados } from "./datos";
import EnlaceExterno from "../../componentes/EnlaceExterno";
import SeccionPortafolio from "../../componentes/SeccionPortafolio";
import { idCertificados } from "../../navegacion/secciones";

export default function Certificados() {
  return (
    <SeccionPortafolio id={idCertificados} tituloId="titulo-certificados">
      <h2 className="titulo-contenido" id="titulo-certificados">Certificados</h2>
      <ul className="cuadricula-certificados">
        {certificados.map(({ id, nombre, institucion, anio, imagen, enlace }) => (
          <li className="tarjeta-certificado" key={id}>
            {imagen && (
              <Imagen
                className="imagen-certificado"
                src={imagen.ruta}
                alt=""
                width={imagen.ancho}
                height={imagen.alto}
                sizes="128px"
              />
            )}
            <div className="detalle-certificado">
              <p className="datos-certificado">
                {institucion} <span aria-hidden="true">·</span> <time dateTime={String(anio)}>{anio}</time>
              </p>
              <h3>{nombre}</h3>
              <EnlaceExterno href={enlace} aria-label={`Ver credencial de ${nombre}`}>
                Ver credencial <span aria-hidden="true">↗</span>
              </EnlaceExterno>
            </div>
          </li>
        ))}
      </ul>
    </SeccionPortafolio>
  );
}
