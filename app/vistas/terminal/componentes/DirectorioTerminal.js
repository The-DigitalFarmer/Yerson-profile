import { seccionesNavegacion } from "../../compartidos/contenido/navegacion";

const secciones = seccionesNavegacion.map(({ id, etiqueta }) => ({
  id,
  etiqueta: etiqueta.toLowerCase(),
}));

export default function DirectorioTerminal({ seccion, lista }) {
  return (
    <nav className="consola-directorio" aria-label="Secciones de la terminal">
      <p>portafolio</p>
      <ul ref={lista}>
        {secciones.map(({ id, etiqueta }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={seccion === id ? "location" : undefined}>
              <span>{etiqueta}</span>
              <small className="consola-rama" aria-hidden="true">main</small>
            </a>
          </li>
        ))}
      </ul>
      <picture className="consola-guardian">
        <source media="(prefers-reduced-motion: reduce)" srcSet="/assets/mascotas/guardian.png" />
        <img src="/assets/mascotas/guardian.gif" alt="" width={140} height={152} loading="lazy" decoding="async" />
      </picture>
    </nav>
  );
}
