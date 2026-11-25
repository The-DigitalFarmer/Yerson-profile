import { perfilGitHub } from "../../contenido/canales";

export const proyectos = [
  {
    id: "harvest-api-title",
    nombre: "Harvest API",
    tipo: "Gestión de pedidos",
    descripcion: "Conecta inventario, ventas y entregas para coordinar cada pedido desde la compra hasta el reparto.",
    enlaceRepositorio: perfilGitHub,
    enlaceSitioWeb: perfilGitHub,
    imagen: {
      ruta: "/assets/webp/harvest-api-cover.webp",
      ancho: 1280,
      alto: 600,
      textoAlternativo: "Ilustración 3D de un servidor conectado a cajas de inventario, un terminal de venta y una furgoneta de reparto."
    }
  },
  {
    id: "flowforge-title",
    nombre: "Flowforge",
    tipo: "Automatización",
    descripcion: "Conecta aplicaciones para automatizar tareas repetitivas, como enviar un aviso cuando ocurre un cambio.",
    enlaceRepositorio: perfilGitHub,
    enlaceSitioWeb: perfilGitHub,
    imagen: {
      ruta: "/assets/webp/flowforge-cover.webp",
      ancho: 1280,
      alto: 600,
      textoAlternativo: "Ilustración 3D de un webhook que envía una señal a un engranaje, conectado a una campana y a una marca de verificación."
    }
  },
  {
    id: "pylearnai-title",
    nombre: "PyLearnAI",
    tipo: "En desarrollo",
    descripcion: "Encuentra funciones de Python y ejemplos de uso desde la terminal, por nombre o describiendo lo que quieres hacer.",
    enlaceRepositorio: "https://github.com/The-DigitalFarmer/PyLearnAI",
    imagen: {
      ruta: "/assets/webp/pylearnai-python-terminal.webp",
      ancho: 1280,
      alto: 600,
      textoAlternativo: "Una lupa y una terminal conectadas a un módulo con el símbolo de Python. La pantalla muestra sorted(scores, reverse=True)."
    }
  }
];
