import "./vistas/compartidos/estilos/tema.css";
import "./vistas/compartidos/estilos/global.css";
import "./vistas/compartidos/estilos/secciones.css";
import "./vistas/compartidos/estilos/cabecera.css";
import "./vistas/normal/estilos/navegacion.css";
import "./vistas/compartidos/estilos/pie-de-pagina.css";
import "./vistas/compartidos/estilos/presentacion.css";
import "./vistas/normal/estilos/fondo-ascii.css";
import "./vistas/compartidos/estilos/habilidades.css";
import "./vistas/compartidos/estilos/perfil.css";
import "./vistas/compartidos/estilos/proyectos.css";
import "./vistas/compartidos/estilos/certificados.css";
import "./vistas/compartidos/estilos/contacto.css";
import "./vistas/terminal/estilos/terminal.css";
import { prepararTema } from "./vistas/compartidos/logica/tema-portafolio";

export const metadata = {
  title: "Yerson - Profile",
  description: "Portafolio de Yerson: Python, APIs y herramientas para construir nuevas ideas.",
  icons: "/assets/svg/avatar.svg",
};

export const viewport = { themeColor: "#171717", colorScheme: "dark" };

export default function DisposicionPortafolio({ children: contenido }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prepararTema }} />
      </head>
      <body>{contenido}</body>
    </html>
  );
}
