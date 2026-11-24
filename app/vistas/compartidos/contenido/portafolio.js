import { perfilGitHub } from "./canales";

export const enfoques = [
  {
    titulo: "Arquitectura con intención",
    etiqueta: "DISEÑO DE SOFTWARE",
    etiquetas: [
      "clean architecture",
      "SOLID",
      "hexagonal"
    ],
    descripcion: "Antes de escribir código, busco entender el problema. Separo responsabilidades y mantengo la lógica de negocio independiente de las herramientas para construir aplicaciones que puedan evolucionar con claridad."
  },
  {
    titulo: "APIs y lógica de negocio",
    etiqueta: "DESARROLLO BACKEND",
    etiquetas: [
      "python",
      "fastapi",
      "postman"
    ],
    descripcion: "Transformo necesidades en servicios con Python y FastAPI. Cuido la validación, las respuestas y el manejo de errores para que cada endpoint sea predecible, desde la petición hasta la respuesta."
  },
  {
    titulo: "Aprender construyendo",
    etiqueta: "APRENDIZAJE CONTINUO",
    etiquetas: [
      "autodidacta",
      "documentación",
      "proyectos"
    ],
    descripcion: "Leo documentación, pruebo ideas y convierto lo aprendido en proyectos. Cuando algo falla, divido el problema, reviso mis supuestos y busco entender la causa. La curiosidad también es parte del stack."
  },
  {
    titulo: "Mejorar en cada iteración",
    etiqueta: "CALIDAD DE CÓDIGO",
    etiquetas: [
      "refactoring",
      "claridad",
      "mantenibilidad"
    ],
    descripcion: "Priorizo nombres claros, funciones enfocadas y una organización fácil de seguir. Cada iteración es una oportunidad para simplificar el código y construir una base más mantenible."
  }
];

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

export const certificados = [
  {
    id: "fundamentos-python",
    nombre: "Fundamentos de Python",
    institucion: "Platzi",
    anio: 2026,
    imagen: {
      ruta: "/assets/certificados/fundamentos-python.jpeg",
      ancho: 864,
      alto: 667,
    },
    enlace: "https://platzi.com/cabreralandayersondimer/curso/12286-course/diploma-og/og.jpeg",
  },
  {
    id: "fundamentos-ingenieria-software",
    nombre: "Fundamentos de Ingeniería de Software",
    institucion: "Platzi",
    anio: 2026,
    imagen: {
      ruta: "/assets/certificados/fundamentos-ingenieria-software.jpeg",
      ancho: 864,
      alto: 667,
    },
    enlace: "https://platzi.com/cabreralandayersondimer/curso/11997-course/diploma-og/og.jpeg",
  },
];

export const gruposHabilidades = [
  {
    etiqueta: "LENGUAJE",
    etiquetaAccesible: "Lenguaje",
    herramientas: [
      {
        nombre: "Python",
        logo: "/assets/svg/python.svg"
      }
    ]
  },
  {
    etiqueta: "BACKEND",
    etiquetaAccesible: "Backend",
    herramientas: [
      {
        nombre: "FastAPI",
        logo: "/assets/png/fastapi.png"
      }
    ]
  },
  {
    etiqueta: "DATOS",
    etiquetaAccesible: "Datos",
    herramientas: [
      {
        nombre: "En aprendizaje"
      }
    ]
  },
  {
    etiqueta: "DEVOPS",
    etiquetaAccesible: "Devops",
    herramientas: [
      {
        nombre: "Docker",
        logo: "/assets/png/docker.png"
      },
      {
        nombre: "Git",
        logo: "/assets/svg/git.svg"
      },
      {
        nombre: "GitHub",
        logo: "/assets/svg/github.svg"
      }
    ]
  },
  {
    etiqueta: "HERRAMIENTAS",
    etiquetaAccesible: "Herramientas",
    herramientas: [
      {
        nombre: "Postman",
        logo: "/assets/svg/postman.svg"
      },
      {
        nombre: "VS Code",
        logo: "/assets/png/vscode.png"
      },
      {
        nombre: "Claude Code",
        logo: "/assets/svg/claude-code.svg"
      },
      {
        nombre: "Codex",
        logo: "/assets/png/codex.png"
      },
      {
        nombre: "Cursor",
        logo: "/assets/svg/cursor.svg"
      },
      {
        nombre: "Open Code",
        logo: "/assets/png/open-code.png"
      }
    ]
  }
];
