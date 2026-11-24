import Imagen from "next/image";
import { certificados } from "../contenido/portafolio";

export default function Certificados() {
  return (
    <section className="seccion-contenido superficie-seccion" id="certificados" aria-labelledby="titulo-certificados">
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
              <a href={enlace} target="_blank" rel="noopener noreferrer" aria-label={`Ver credencial de ${nombre}`}>
                Ver credencial <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
