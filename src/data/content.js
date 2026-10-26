// Facts shared by both languages; translated copy lives in `text` below.
export const projects = [
  {
    id: "tormel",
    name: "Tormel POS",
    stack: ["Rust", "Tauri 2", "React", "TypeScript", "SQLite"],
    links: [{ label: "GitHub", url: "https://github.com/wenqiange/Tormel" }],
    screenshot: null,
  },
  {
    id: "syncly",
    name: "Syncly",
    stack: ["NestJS", "TypeScript", "DDD", "Hexagonal Architecture"],
    links: [{ label: "GitHub", url: "https://github.com/wenqiange/Syncly" }],
    screenshot: null,
  },
  {
    id: "tribus",
    name: "Tribus",
    stack: ["React", "Vite", "Electron", "K-means++"],
    links: [{ label: "GitHub", url: "https://github.com/wenqiange/tribus" }],
    screenshot: null,
  },
  {
    id: "toolsy",
    name: "Toolsy",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "HTML", "CSS", "qrcode", "Canvas API", "Web Crypto API"],
    links: [
      { label: "Web", url: "https://toolsy-dun.vercel.app/" },
      { label: "GitHub", url: "https://github.com/wenqiange/Toolsy" },
    ],
    screenshot: null,
  },
]

// Paths are relative to /public; null renders a labelled placeholder frame.
export const portrait = null

export const skillGroups = {
  languages: ["C", "C++", "Rust", "TypeScript", "Python", "Java", "C#", "JavaScript", "PHP", "Perl", "R", "SQL", "Assembly", "HTML", "CSS"],
  frameworks: ["React", "Node.js", "NestJS", "Tauri", "Qt", "Unity", "OpenGL"],
  databases: ["SQLite", "PostgreSQL", "Supabase"],
  tools: ["Git", "Docker", "Redis", "Linux/UNIX", "MATLAB", "Swagger/OpenAPI", "JWT"],
}

export const contactLinks = [
  { label: "GitHub", handle: "wenqiange", url: "https://github.com/wenqiange" },
  { label: "LinkedIn", handle: "wenqiang-he", url: "https://www.linkedin.com/in/wenqiang-he" },
  { label: "Email", handle: "wenqianghe10@gmail.com", url: "mailto:wenqianghe10@gmail.com" },
]

export const text = {
  es: {
    lang: "es",
    meta: {
      title: "Wenqiang He — Desarrollador de software",
      description: "Portfolio de Wenqiang He: estudiante de Ingeniería Informática en la UPC y desarrollador junior PHP/Laravel en ATLS.",
    },
    ui: {
      role: "Desarrollador de software",
      city: "Barcelona",
      sheet: "Hoja",
      of: "de",
      revision: "Revisión",
      print: "Impresión",
      day: "Día",
      night: "Noche",
      navLabel: "Índice de hojas",
      languageLabel: "Idioma",
      themeLabel: "Tema",
      scale: "Escala 1:1",
      open: "Abrir detalle",
      close: "Cerrar detalle",
      bom: "Lista de componentes",
      item: "Ud.",
      part: "Componente",
      scope: "Alcance del trabajo",
      refs: "Referencias",
      screenshotPending: "Captura pendiente",
      portraitPending: "Retrato pendiente",
      current: "Actual",
      previous: "Anterior",
      issued: "Emitido para revisión",
      detail: "Detalle",
      generalNotes: "Notas generales",
      description: "Descripción",
      status: "Estado",
      figure: "Fig. 1 — Wenqiang He",
    },
    nav: { about: "Perfil", projects: "Proyectos", experience: "Experiencia", skills: "Skills", contact: "Contacto" },
    sheets: {
      about: "Sobre mí",
      projects: "Proyectos personales",
      experience: "Experiencia laboral",
      skills: "Skills",
      contact: "Contacto",
    },
    about: {
      intro:
        "Soy un desarrollador apasionado por construir productos útiles y mantenibles, con interés tanto en backend y arquitectura como en interfaces web y desktop.",
      notes: [
        { id: "currently", label: "Actualmente", value: "Desarrollador junior PHP/Laravel en ATLS." },
        { id: "education", label: "Formación", value: "Estudiante de Ingeniería Informática, especialidad Ingeniería del Software, en la UPC de Barcelona." },
        { id: "languages", label: "Idiomas", value: "Catalán, castellano, inglés (C1) y chino (HSK6)." },
        { id: "focus", label: "Enfoque", value: "Me gusta diseñar aplicaciones escalables, cuidar el rendimiento y escribir código limpio y mantenible." },
      ],
    },
    projects: {
      intro: "Estos son algunos de los proyectos que mejor representan mi forma de trabajar y las tecnologías con las que disfruto construyendo.",
      items: {
        tormel: {
          description: "Sistema TPV offline-first de alto rendimiento para restaurantes, cafeterías y bares.",
          experience: [
            "Desktop app development con Tauri y Rust",
            "Offline-first architecture",
            "Diseño y optimización con SQLite",
            "Autenticación y RBAC",
            "Almacenamiento seguro y criptografía",
            "Integración ESC/POS y generación PDF",
            "Fiscal compliance (VeriFactu)",
          ],
        },
        syncly: {
          description: "Plataforma backend para recomendaciones colaborativas de películas y series siguiendo arquitectura hexagonal y modular monolith.",
          experience: [
            "Domain-Driven Design",
            "Hexagonal Architecture",
            "REST API development",
            "JWT authentication",
            "Repository pattern y dependency inversion",
            "Event-driven design",
            "Swagger/OpenAPI y Docker",
          ],
        },
        tribus: {
          description: "SPA desktop/web con clustering K-means++ y arquitectura en tres capas para analizar perfiles de comportamiento.",
          experience: [],
        },
        toolsy: {
          description:
            "Plataforma web de micro-herramientas rápidas y utilitarias, pensada para resolver tareas concretas desde una sola interfaz limpia. En su MVP incluye formateador de JSON, generador de contraseñas, generador de QR y compresor de imágenes, con una arquitectura modular preparada para crecer con nuevas herramientas.",
          experience: [
            "Arquitectura modular para herramientas web",
            "Procesamiento client-side sin backend",
            "Generación de QR y utilidades de navegador",
            "Uso de Canvas y Web Crypto API",
            "Diseño de UX limpia para tareas rápidas",
          ],
        },
      },
    },
    experience: {
      intro: "Mi experiencia combina mantenimiento real de producto, seguridad y soporte técnico.",
      items: [
        {
          title: "Desarrollador junior PHP/Laravel",
          org: "ATLS",
          bullets: [
            "Mantenimiento y mejoras de AT INTRANET sobre PHP, WampServer y MySQL.",
            "Resolución de incompatibilidades en migraciones a PHP 8.",
            "Mejoras de UI con Bootstrap y ag-Grid.",
            "Corrección de vulnerabilidades de inyección SQL en procedimientos almacenados.",
          ],
        },
        {
          title: "Prácticas de soporte TIC",
          org: "UPC",
          bullets: ["Soporte técnico en laboratorio de realidad virtual.", "Resolución de bugs en software open-source."],
        },
      ],
    },
    skills: {
      intro: "Trabajo cómodo tanto en capas de arquitectura y backend como en interfaces web y desktop.",
      coreTitle: "Skills principales",
      groups: { languages: "Lenguajes", frameworks: "Frameworks y librerías", databases: "Bases de datos", tools: "Tools" },
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
    contact: {
      title: "Hablemos",
      intro: "Puedes encontrarme aquí. Si quieres colaborar o hablar de un proyecto, escríbeme.",
    },
  },
  en: {
    lang: "en",
    meta: {
      title: "Wenqiang He — Software developer",
      description: "Portfolio of Wenqiang He: Computer Engineering student at UPC and junior PHP/Laravel developer at ATLS.",
    },
    ui: {
      role: "Software developer",
      city: "Barcelona",
      sheet: "Sheet",
      of: "of",
      revision: "Revision",
      print: "Print",
      day: "Day",
      night: "Night",
      navLabel: "Sheet index",
      languageLabel: "Language",
      themeLabel: "Theme",
      scale: "Scale 1:1",
      open: "Open detail",
      close: "Close detail",
      bom: "Bill of materials",
      item: "No.",
      part: "Component",
      scope: "Scope of work",
      refs: "References",
      screenshotPending: "Screenshot pending",
      portraitPending: "Portrait pending",
      current: "Current",
      previous: "Previous",
      issued: "Issued for review",
      detail: "Detail",
      generalNotes: "General notes",
      description: "Description",
      status: "Status",
      figure: "Fig. 1 — Wenqiang He",
    },
    nav: { about: "Profile", projects: "Projects", experience: "Experience", skills: "Skills", contact: "Contact" },
    sheets: {
      about: "About me",
      projects: "Personal projects",
      experience: "Work experience",
      skills: "Skills",
      contact: "Contact",
    },
    about: {
      intro:
        "I am a developer who enjoys building useful, maintainable products, with a strong interest in backend, architecture, and web and desktop interfaces.",
      notes: [
        { id: "currently", label: "Currently", value: "Junior PHP/Laravel developer at ATLS." },
        { id: "education", label: "Education", value: "Computer Engineering student, Software Engineering specialization, at UPC in Barcelona." },
        { id: "languages", label: "Languages", value: "Catalan, Spanish, English (C1), and Chinese (HSK6)." },
        { id: "focus", label: "Focus", value: "I like designing scalable applications, caring about performance, and writing clean, maintainable code." },
      ],
    },
    projects: {
      intro: "These are some of the projects that best represent how I work and the technologies I most enjoy building with.",
      items: {
        tormel: {
          description: "A high-performance offline-first POS system for restaurants, cafes, and bars.",
          experience: [
            "Desktop app development with Tauri and Rust",
            "Offline-first architecture",
            "SQLite design and optimization",
            "Authentication and RBAC",
            "Secure storage and cryptography",
            "ESC/POS integration and PDF generation",
            "Fiscal compliance (VeriFactu)",
          ],
        },
        syncly: {
          description: "A backend platform for collaborative movie and TV recommendations built with a modular monolith and hexagonal architecture.",
          experience: [
            "Domain-Driven Design",
            "Hexagonal Architecture",
            "REST API development",
            "JWT authentication",
            "Repository pattern and dependency inversion",
            "Event-driven design",
            "Swagger/OpenAPI and Docker",
          ],
        },
        tribus: {
          description: "A desktop/web SPA that uses K-means++ clustering and a three-layer architecture to analyze behavioral profiles.",
          experience: [],
        },
        toolsy: {
          description:
            "A web platform of fast, practical micro-tools designed to solve focused tasks from a single clean interface. Its MVP includes a JSON formatter, password generator, QR generator, and image compressor, with a modular architecture ready to grow with new tools.",
          experience: [
            "Modular architecture for web tools",
            "Client-side processing without a backend",
            "QR generation and browser utilities",
            "Use of Canvas and Web Crypto API",
            "Clean UX for quick tasks",
          ],
        },
      },
    },
    experience: {
      intro: "My experience combines real product maintenance, security work, and technical support.",
      items: [
        {
          title: "Junior PHP/Laravel developer",
          org: "ATLS",
          bullets: [
            "Maintenance and improvements on AT INTRANET using PHP, WampServer, and MySQL.",
            "Resolution of incompatibilities during migrations to PHP 8.",
            "UI improvements with Bootstrap and ag-Grid.",
            "Fixes for SQL injection vulnerabilities in stored procedures.",
          ],
        },
        {
          title: "IT support internship",
          org: "UPC",
          bullets: ["Technical support in a virtual reality lab.", "Bug fixing in open-source software."],
        },
      ],
    },
    skills: {
      intro: "I am comfortable working across architecture and backend layers as well as web and desktop interfaces.",
      coreTitle: "Core skills",
      groups: { languages: "Languages", frameworks: "Frameworks and libraries", databases: "Databases", tools: "Tools" },
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
    contact: {
      title: "Let's talk",
      intro: "You can find me here. If you want to collaborate or talk about a project, feel free to reach out.",
    },
  },
}
