import Cabecera from "./componentes/Cabecera";
import PieDePagina from "./componentes/PieDePagina";
import { idInicio } from "./navegacion/secciones";
import Presentacion from "./secciones/presentacion/Presentacion";
import Habilidades from "./secciones/habilidades/Habilidades";
import Perfil from "./secciones/perfil/Perfil";
import Proyectos from "./secciones/proyectos/Proyectos";
import Certificados from "./secciones/certificados/Certificados";
import Contacto from "./secciones/contacto/Contacto";
import ArteAscii from "./terminal/componentes/ArteAscii";
import ConsolaPortafolio from "./terminal/componentes/ConsolaPortafolio";

export default function Portafolio() {
  return (
    <>
      <a className="enlace-saltar" href={`#${idInicio}`}>Ir al contenido</a>
      <Cabecera marcaAscii={<ArteAscii ruta="marca" />} />
      <main className="consola-portafolio">
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
      </main>
      <div className="marco-contenido marco-pie-portafolio">
        <PieDePagina />
      </div>
    </>
  );
}
