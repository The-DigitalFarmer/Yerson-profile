import Perfil from "./componentes/Perfil";
import Contacto from "./componentes/Contacto";
import Experiencia from "./componentes/Experiencia";
import PieDePagina from "./componentes/PieDePagina";
import Cabecera from "./componentes/Cabecera";
import Presentacion from "./componentes/Presentacion";
import Proyectos from "./componentes/Proyectos";
import Habilidades from "./componentes/Habilidades";

export default function PaginaPortafolio() {
  return (
    <>
      <a className="enlace-saltar" href="#inicio">Ir al contenido</a>
      <Cabecera />
      <main>
        <Presentacion />
        <div className="marco-contenido">
          <Habilidades />
          <Perfil />
          <Proyectos />
          <Experiencia />
          <Contacto />
        </div>
      </main>
      <div className="marco-contenido">
        <PieDePagina />
      </div>
    </>
  );
}
