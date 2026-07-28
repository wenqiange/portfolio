export const chatOptions = [
  {
    id: "sobre-mi",
    title: "Sobre mi",
    question: "Cuentame sobre ti",
    answer: {
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
  },
  {
    id: "proyectos-personales",
    title: "Proyectos personales",
    question: "Que proyectos personales has hecho",
    answer: {
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
          icon: "🗡️",
          name: "Looty Dungeon",
          stack: ["Godot Engine", "GDScript"],
          description:
            "Videojuego 3D isometrico de mazmorra desarrollado en Godot.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/wenqiange/Looty-Dungeon-Recreation",
            },
          ],
        },
      ],
    },
  },
  {
    id: "experiencia-laboral",
    title: "Experiencia laboral",
    question: "Cual es tu experiencia laboral",
    answer: {
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
  },
  {
    id: "skills",
    title: "Skills",
    question: "Que stack y skills tienes",
    answer: {
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
  },
  {
    id: "otros",
    title: "Otros",
    question: "Como puedo contactarte",
    answer: {
      type: "contact",
      intro: "Puedes encontrarme aqui. Si quieres colaborar o hablar de un proyecto, escribeme.",
      links: [
        { icon: "🧑‍💻", label: "GitHub", url: "https://github.com/wenqiange" },
        { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/wenqiang-he" },
        { icon: "📧", label: "Email", url: "mailto:wenqianghe10@gmail.com" },
      ],
    },
  },
]

export const welcomeData = {
  title: "Hola, soy Wen 👋",
  subtitle:
    "Este chat es mi portfolio interactivo. Puedes explorar experiencia, proyectos, stack y enlaces como si estuvieras hablando conmigo.",
}
