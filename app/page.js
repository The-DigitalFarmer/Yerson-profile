import Perfil from "./vistas/compartidos/componentes/Perfil";
import ArteAscii from "./vistas/terminal/componentes/ArteAscii";
import Contacto from "./vistas/compartidos/componentes/Contacto";
import PieDePagina from "./vistas/compartidos/componentes/PieDePagina";
import Cabecera from "./vistas/compartidos/componentes/Cabecera";
import Certificados from "./vistas/compartidos/componentes/Certificados";
import ConsolaPortafolio from "./vistas/terminal/componentes/ConsolaPortafolio";
import Presentacion from "./vistas/compartidos/componentes/Presentacion";
import Proyectos from "./vistas/compartidos/componentes/Proyectos";
import Habilidades from "./vistas/compartidos/componentes/Habilidades";

export default function PaginaPortafolio() {
  return (
    <>
      <a className="enlace-saltar" href="#inicio">Ir al contenido</a>
      <Cabecera marcaAscii={<ArteAscii ruta="marca" />} />
      <ConsolaPortafolio>
        <Presentacion />
        <div className="marco-contenido">
          <Habilidades />
          <Perfil />
          <Proyectos />
          <Certificados />
          <Contacto />
        </div>
      </ConsolaPortafolio>
      <div className="marco-contenido marco-pie-portafolio">
        <PieDePagina />
      </div>
    </>
  );
}
