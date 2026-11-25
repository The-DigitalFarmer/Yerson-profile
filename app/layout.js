import "./portafolio/estilos/portafolio.css";
import { prepararTema } from "./portafolio/tema/tema-portafolio";

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
