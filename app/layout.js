import "./estilos/tema.css";
import "./estilos/global.css";
import "./estilos/secciones.css";
import "./estilos/cabecera.css";
import "./estilos/pie-de-pagina.css";
import "./estilos/presentacion.css";
import "./estilos/fondo-ascii.css";
import "./estilos/habilidades.css";
import "./estilos/perfil.css";
import "./estilos/proyectos.css";
import "./estilos/experiencia.css";
import "./estilos/contacto.css";

export const metadata = {
  title: "Yerson - Profile",
  description: "Portafolio de Yerson: Python, APIs y herramientas para construir nuevas ideas.",
  icons: "/assets/svg/avatar.svg",
};

export const viewport = { themeColor: "#171717", colorScheme: "dark" };

export default function DisposicionPortafolio({ children: contenido }) {
  return (
    <html lang="es">
      <body>{contenido}</body>
    </html>
  );
}
