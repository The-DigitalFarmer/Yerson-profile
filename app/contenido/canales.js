const enlaceWhatsApp = "https://wa.me/51980822924";

export const perfilGitHub = "https://github.com/The-DigitalFarmer";

export const canalesContacto = [
  {
    id: "gmail",
    nombre: "Gmail",
    enlace: "mailto:cabreralandayersondimer@gmail.com",
    invitacion: "Escríbeme",
    etiquetaAccesible: "Escribir a Yerson en Gmail",
  },
  {
    id: "whatsapp",
    nombre: "WhatsApp",
    enlace: enlaceWhatsApp,
    enlaceConMensaje: `${enlaceWhatsApp}?${new URLSearchParams({
      text: "Hola Yerson, vi tu portafolio y me gustaría conversar sobre una idea.",
    })}`,
    invitacion: "Conversemos",
    etiquetaAccesible: "Conversar con Yerson en WhatsApp",
  },
  {
    id: "linkedin",
    nombre: "LinkedIn",
    enlace: "https://www.linkedin.com/in/yerson-cabrera-88439b401/",
    invitacion: "Conectemos",
    etiquetaAccesible: "Ver el perfil de Yerson en LinkedIn",
  },
  { id: "github", nombre: "GitHub", enlace: perfilGitHub },
];
