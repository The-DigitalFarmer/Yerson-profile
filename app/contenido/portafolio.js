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

export const experiencias = [
  {
    fechas: "2026 — ACTUALIDAD",
    titulo: "Senior Hello World Engineer",
    empresa: "VS Code",
    modalidad: "· Remoto · Colaboración independiente",
    resumen: "Llevando «Hola Mundo» de Python a Assembly, sin una línea de más.",
    tecnologias: [
      "Python",
      "Golang",
      "Assembly",
      "C++"
    ]
  },
  {
    fechas: "2016 — 2026",
    titulo: "Lead Vibe Coding & Aesthetic Developer",
    empresa: "Claude Code",
    modalidad: "· Remoto · Proyecto freelance",
    resumen: "Vibe coding, bugs y luces sincronizadas para que la terminal parezca una escena de Matrix.",
    tecnologias: [
      "Claude",
      "Codex",
      "Open Code"
    ]
  }
];

export const proyectos = [
  {
    id: "harvest-api-title",
    nombre: "Harvest API",
    tipo: "REST API · BACKEND",
    descripcion: "El motor detrás de cada pedido. Una API para conectar inventario, ventas y entregas, con una arquitectura preparada para crecer.",
    enlaceRepositorio: perfilGitHub,
    enlaceSitioWeb: perfilGitHub,
    imagen: {
      ruta: "/assets/png/harvest-api.png",
      ancho: 1832,
      alto: 859,
      textoAlternativo: "Cartel vintage de Harvest API sobre papel crema envejecido, con un servidor conectado a inventario, compras, entregas y una base de datos en tintas azul marino y rojo."
    }
  },
  {
    id: "flowforge-title",
    nombre: "Flowforge",
    tipo: "AUTOMATIZACIÓN · WORKFLOWS",
    descripcion: "Menos tareas repetidas, más tiempo para crear. Flujos que conectan servicios, procesan eventos y automatizan el trabajo de todos los días.",
    enlaceRepositorio: perfilGitHub,
    enlaceSitioWeb: perfilGitHub,
    imagen: {
      ruta: "/assets/png/flowforge.png",
      ancho: 1832,
      alto: 859,
      textoAlternativo: "Cartel vintage de Flowforge sobre papel crema envejecido, con un webhook, un engranaje y una campana conectados por flechas en tintas azul marino y rojo."
    }
  },
  {
    id: "atlas-ai-title",
    nombre: "Atlas AI",
    tipo: "INTELIGENCIA ARTIFICIAL · RAG",
    descripcion: "Tu conocimiento, a una pregunta de distancia. Un asistente que transforma documentos en respuestas claras, con contexto y fuentes verificables.",
    enlaceRepositorio: perfilGitHub,
    enlaceSitioWeb: perfilGitHub,
    imagen: {
      ruta: "/assets/png/atlas-ai.png",
      ancho: 1831,
      alto: 859,
      textoAlternativo: "Cartel vintage de Atlas AI sobre papel crema envejecido, con documentos, una red de conocimiento, una base de datos y una lupa en tintas azul marino y rojo."
    }
  }
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
