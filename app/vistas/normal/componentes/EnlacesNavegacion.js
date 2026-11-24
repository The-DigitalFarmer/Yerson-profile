import { seccionesNavegacion } from "../../compartidos/contenido/navegacion";

export default function EnlacesNavegacion({ seccionActiva, alNavegar }) {
  return seccionesNavegacion.map(({ id, etiqueta }) => {
    const estaActiva = id === seccionActiva;

    return (
      <a
        key={id}
        href={`#${id}`}
        className={estaActiva ? "enlace-activo" : undefined}
        aria-current={estaActiva ? "location" : undefined}
        onClick={alNavegar}
      >
        {etiqueta}
      </a>
    );
  });
}
