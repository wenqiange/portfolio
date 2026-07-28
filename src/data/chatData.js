export const uiText = {
  appTitle: {
    es: "Wen Portfolio Chat",
    en: "Wen Portfolio Chat",
  },
  newChat: {
    es: "+ Nuevo chat",
    en: "+ New chat",
  },
  categoriesLabel: {
    es: "Categorias del portfolio",
    en: "Portfolio categories",
  },
  languageSelector: {
    es: "Selector de idioma",
    en: "Language selector",
  },
  closeMenu: {
    es: "Cerrar menu",
    en: "Close menu",
  },
  openMenu: {
    es: "Abrir menu",
    en: "Open menu",
  },
  chatTitle: {
    es: "Chat portfolio",
    en: "Portfolio chat",
  },
  inputPlaceholder: {
    es: "Elige una opcion arriba...",
    en: "Choose an option above...",
  },
  disabledInput: {
    es: "Input deshabilitado",
    en: "Disabled input",
  },
}

export const chatOptions = [
  {
    id: "sobre-mi",
    title: {
      es: "Sobre mi",
      en: "About me",
    },
    question: {
      es: "Cuentame sobre ti",
      en: "Tell me about yourself",
    },
    answer: {
      es: {
        type: "profile",
        intro:
          "Soy un desarrollador apasionado por construir productos utiles y mantenibles, con interes tanto en backend y arquitectura como en interfaces web y desktop.",
        highlights: [
          {
            icon: "🎓",
            label: "Formacion",
            value:
              "Estudiante de Ingenieria Informatica, especialidad Ingenieria del Software, en la UPC de Barcelona.",
          },
          {
            icon: "💼",
            label: "Actualmente",
            value: "Desarrollador junior PHP/Laravel en ATLS.",
          },
          {
            icon: "🧠",
            label: "Enfoque",
            value:
              "Me gusta disenar aplicaciones escalables, cuidar el rendimiento y escribir codigo limpio y mantenible.",
          },
          {
            icon: "🌍",
            label: "Idiomas",
            value: "Catalan, castellano, ingles (C1) y chino (HSK6).",
          },
        ],
      },
      en: {
        type: "profile",
        intro:
          "I am a developer who enjoys building useful, maintainable products, with a strong interest in backend, architecture, and web and desktop interfaces.",
        highlights: [
          {
            icon: "🎓",
            label: "Education",
            value:
              "Computer Engineering student, Software Engineering specialization, at UPC in Barcelona.",
          },
          {
            icon: "💼",
            label: "Currently",
            value: "Junior PHP/Laravel developer at ATLS.",
          },
          {
            icon: "🧠",
            label: "Focus",
            value:
              "I like designing scalable applications, caring about performance, and writing clean, maintainable code.",
          },
          {
            icon: "🌍",
            label: "Languages",
            value: "Catalan, Spanish, English (C1), and Chinese (HSK6).",
          },
        ],
      },
    },
  },
  {
    id: "proyectos-personales",
    title: {
      es: "Proyectos personales",
      en: "Personal projects",
    },
    question: {
      es: "Que proyectos personales has hecho",
      en: "What personal projects have you built",
    },
    answer: {
      es: {
        type: "projects",
        intro:
          "Estos son algunos de los proyectos que mejor representan mi forma de trabajar y las tecnologias con las que disfruto construyendo.",
        projects: [
          {
            icon: "🛠️",
            name: "Tormel POS",
            stack: ["Rust", "Tauri 2", "React", "TypeScript", "SQLite"],
            description:
              "Sistema TPV offline-first de alto rendimiento para restaurantes, cafeterias y bares.",
            experience: [
              "Desktop app development con Tauri y Rust",
              "Offline-first architecture",
              "Diseno y optimizacion con SQLite",
              "Autenticacion y RBAC",
              "Almacenamiento seguro y criptografia",
              "Integracion ESC/POS y generacion PDF",
              "Fiscal compliance (VeriFactu)",
            ],
            links: [{ label: "GitHub", url: "https://github.com/wenqiange/Tormel" }],
          },
          {
            icon: "🎬",
            name: "Syncly",
            stack: ["NestJS", "TypeScript", "DDD", "Hexagonal Architecture"],
            description:
              "Plataforma backend para recomendaciones colaborativas de peliculas y series siguiendo arquitectura hexagonal y modular monolith.",
            experience: [
              "Domain-Driven Design",
              "Hexagonal Architecture",
              "REST API development",
              "JWT authentication",
              "Repository pattern y dependency inversion",
              "Event-driven design",
              "Swagger/OpenAPI y Docker",
            ],
            links: [{ label: "GitHub", url: "https://github.com/wenqiange/Syncly" }],
          },
          {
            icon: "🧬",
            name: "Tribus",
            stack: ["React", "Vite", "Electron", "K-means++"],
            description:
              "SPA desktop/web con clustering K-means++ y arquitectura en tres capas para analizar perfiles de comportamiento.",
            links: [{ label: "GitHub", url: "https://github.com/wenqiange/tribus" }],
          },
          {
            icon: "🧰",
            name: "Toolsy",
            stack: [
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "HTML",
              "CSS",
              "qrcode",
              "Canvas API",
              "Web Crypto API",
            ],
            description:
              "Plataforma web de micro-herramientas rapidas y utilitarias, pensada para resolver tareas concretas desde una sola interfaz limpia. En su MVP incluye formateador de JSON, generador de contrasenas, generador de QR y compresor de imagenes, con una arquitectura modular preparada para crecer con nuevas herramientas.",
            experience: [
              "Arquitectura modular para herramientas web",
              "Procesamiento client-side sin backend",
              "Generacion de QR y utilidades de navegador",
              "Uso de Canvas y Web Crypto API",
              "Diseno de UX limpia para tareas rapidas",
            ],
            links: [
              {
                label: "Web",
                url: "https://toolsy-dun.vercel.app/",
              },
              {
                label: "GitHub",
                url: "https://github.com/wenqiange/Toolsy",
              },
            ],
          },
        ],
      },
      en: {
        type: "projects",
        intro:
          "These are some of the projects that best represent how I work and the technologies I most enjoy building with.",
        projects: [
          {
            icon: "🛠️",
            name: "Tormel POS",
            stack: ["Rust", "Tauri 2", "React", "TypeScript", "SQLite"],
            description:
              "A high-performance offline-first POS system for restaurants, cafes, and bars.",
            experience: [
              "Desktop app development with Tauri and Rust",
              "Offline-first architecture",
              "SQLite design and optimization",
              "Authentication and RBAC",
              "Secure storage and cryptography",
              "ESC/POS integration and PDF generation",
              "Fiscal compliance (VeriFactu)",
            ],
            links: [{ label: "GitHub", url: "https://github.com/wenqiange/Tormel" }],
          },
          {
            icon: "🎬",
            name: "Syncly",
            stack: ["NestJS", "TypeScript", "DDD", "Hexagonal Architecture"],
            description:
              "A backend platform for collaborative movie and TV recommendations built with a modular monolith and hexagonal architecture.",
            experience: [
              "Domain-Driven Design",
              "Hexagonal Architecture",
              "REST API development",
              "JWT authentication",
              "Repository pattern and dependency inversion",
              "Event-driven design",
              "Swagger/OpenAPI and Docker",
            ],
            links: [{ label: "GitHub", url: "https://github.com/wenqiange/Syncly" }],
          },
          {
            icon: "🧬",
            name: "Tribus",
            stack: ["React", "Vite", "Electron", "K-means++"],
            description:
              "A desktop/web SPA that uses K-means++ clustering and a three-layer architecture to analyze behavioral profiles.",
            links: [{ label: "GitHub", url: "https://github.com/wenqiange/tribus" }],
          },
          {
            icon: "🧰",
            name: "Toolsy",
            stack: [
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "HTML",
              "CSS",
              "qrcode",
              "Canvas API",
              "Web Crypto API",
            ],
            description:
              "A web platform of fast, practical micro-tools designed to solve focused tasks from a single clean interface. Its MVP includes a JSON formatter, password generator, QR generator, and image compressor, with a modular architecture ready to grow with new tools.",
            experience: [
              "Modular architecture for web tools",
              "Client-side processing without a backend",
              "QR generation and browser utilities",
              "Use of Canvas and Web Crypto API",
              "Clean UX for quick tasks",
            ],
            links: [
              {
                label: "Web",
                url: "https://toolsy-dun.vercel.app/",
              },
              {
                label: "GitHub",
                url: "https://github.com/wenqiange/Toolsy",
              },
            ],
          },
        ],
      },
    },
  },
  {
    id: "experiencia-laboral",
    title: {
      es: "Experiencia laboral",
      en: "Work experience",
    },
    question: {
      es: "Cual es tu experiencia laboral",
      en: "What is your work experience",
    },
    answer: {
      es: {
        type: "timeline",
        intro: "Mi experiencia combina mantenimiento real de producto, seguridad y soporte tecnico.",
        items: [
          {
            icon: "💼",
            title: "Desarrollador junior PHP/Laravel en ATLS",
            bullets: [
              "Mantenimiento y mejoras de AT INTRANET sobre PHP, WampServer y MySQL.",
              "Resolucion de incompatibilidades en migraciones a PHP 8.",
              "Mejoras de UI con Bootstrap y ag-Grid.",
              "Correccion de vulnerabilidades de inyeccion SQL en procedimientos almacenados.",
            ],
          },
          {
            icon: "🧪",
            title: "Practicas de soporte TIC en la UPC",
            bullets: [
              "Soporte tecnico en laboratorio de realidad virtual.",
              "Resolucion de bugs en software open-source.",
            ],
          },
        ],
      },
      en: {
        type: "timeline",
        intro: "My experience combines real product maintenance, security work, and technical support.",
        items: [
          {
            icon: "💼",
            title: "Junior PHP/Laravel developer at ATLS",
            bullets: [
              "Maintenance and improvements on AT INTRANET using PHP, WampServer, and MySQL.",
              "Resolution of incompatibilities during migrations to PHP 8.",
              "UI improvements with Bootstrap and ag-Grid.",
              "Fixes for SQL injection vulnerabilities in stored procedures.",
            ],
          },
          {
            icon: "🧪",
            title: "IT support internship at UPC",
            bullets: [
              "Technical support in a virtual reality lab.",
              "Bug fixing in open-source software.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "skills",
    title: {
      es: "Skills",
      en: "Skills",
    },
    question: {
      es: "Que stack y skills tienes",
      en: "What stack and skills do you have",
    },
    answer: {
      es: {
        type: "skills",
        intro: "Trabajo comodo tanto en capas de arquitectura y backend como en interfaces web y desktop.",
        groups: [
          {
            icon: "💻",
            title: "Lenguajes",
            items: ["C", "C++", "Rust", "TypeScript", "Python", "Java", "C#", "JavaScript", "PHP", "Perl", "R", "SQL", "Assembly", "HTML", "CSS"],
          },
          {
            icon: "🧩",
            title: "Frameworks y librerias",
            items: ["React", "Node.js", "NestJS", "Tauri", "Qt", "Unity", "OpenGL"],
          },
          {
            icon: "🗄️",
            title: "Bases de datos",
            items: ["SQLite", "PostgreSQL", "Supabase"],
          },
          {
            icon: "🛠️",
            title: "Tools",
            items: ["Git", "Docker", "Redis", "Linux/UNIX", "MATLAB", "Swagger/OpenAPI", "JWT"],
          },
        ],
        coreTitle: "Skills principales",
        core: [
          "Hexagonal Architecture y Modular Monolith",
          "Desktop application development",
          "Full Stack development",
          "REST API design",
          "Authentication & Authorization (JWT, RBAC)",
          "Database design and SQL",
          "Offline-first applications",
          "Event-driven architecture",
          "Secure software development",
          "Data structures and algorithms",
        ],
      },
      en: {
        type: "skills",
        intro: "I am comfortable working across architecture and backend layers as well as web and desktop interfaces.",
        groups: [
          {
            icon: "💻",
            title: "Languages",
            items: ["C", "C++", "Rust", "TypeScript", "Python", "Java", "C#", "JavaScript", "PHP", "Perl", "R", "SQL", "Assembly", "HTML", "CSS"],
          },
          {
            icon: "🧩",
            title: "Frameworks and libraries",
            items: ["React", "Node.js", "NestJS", "Tauri", "Qt", "Unity", "OpenGL"],
          },
          {
            icon: "🗄️",
            title: "Databases",
            items: ["SQLite", "PostgreSQL", "Supabase"],
          },
          {
            icon: "🛠️",
            title: "Tools",
            items: ["Git", "Docker", "Redis", "Linux/UNIX", "MATLAB", "Swagger/OpenAPI", "JWT"],
          },
        ],
        coreTitle: "Core skills",
        core: [
          "Hexagonal Architecture and Modular Monolith",
          "Desktop application development",
          "Full Stack development",
          "REST API design",
          "Authentication & Authorization (JWT, RBAC)",
          "Database design and SQL",
          "Offline-first applications",
          "Event-driven architecture",
          "Secure software development",
          "Data structures and algorithms",
        ],
      },
    },
  },
  {
    id: "otros",
    title: {
      es: "Otros",
      en: "Contact",
    },
    question: {
      es: "Como puedo contactarte",
      en: "How can I contact you",
    },
    answer: {
      es: {
        type: "contact",
        intro: "Puedes encontrarme aqui. Si quieres colaborar o hablar de un proyecto, escribeme.",
        links: [
          { icon: "🧑‍💻", label: "GitHub", url: "https://github.com/wenqiange" },
          { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/wenqiang-he" },
          { icon: "📧", label: "Email", url: "mailto:wenqianghe10@gmail.com" },
        ],
      },
      en: {
        type: "contact",
        intro: "You can find me here. If you want to collaborate or talk about a project, feel free to reach out.",
        links: [
          { icon: "🧑‍💻", label: "GitHub", url: "https://github.com/wenqiange" },
          { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/wenqiang-he" },
          { icon: "📧", label: "Email", url: "mailto:wenqianghe10@gmail.com" },
        ],
      },
    },
  },
]

export const welcomeData = {
  title: {
    es: "Hola, soy Wen 👋",
    en: "Hi, I'm Wen 👋",
  },
  subtitle: {
    es: "Este chat es mi portfolio interactivo. Puedes explorar experiencia, proyectos, stack y enlaces como si estuvieras hablando conmigo.",
    en: "This chat is my interactive portfolio. You can explore my experience, projects, stack, and links as if you were talking to me.",
  },
}
