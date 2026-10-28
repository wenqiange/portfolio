import type { Dict } from './types';

const es: Dict = {
  htmlLang: 'es',
  langName: 'Español',
  meta: {
    title: 'Wenqiang He · Backend, Rust y desarrollo seguro',
    description:
      'Portfolio de Wenqiang He, estudiante de Ingeniería Informática en la UPC. Backends tipados en Rust y Python, arquitectura y seguridad.',
  },
  hud: {
    skip: 'Saltar al contenido',
    player: '1UP',
    credit: 'CRÉDITO',
    language: 'Idioma',
    scanlines: 'Efectos CRT: scanlines, brillo y animación',
    nav: 'Mundos',
  },
  title: {
    subtitle: 'BACKEND · RUST · PYTHON',
    tagline:
      'Estudiante de Ingeniería Informática en la UPC. Construyo backends tipados y seguros: la seguridad va dentro de la arquitectura, no encima.',
    profile: 'Barcelona · Español · 中文 HSK6 · English C1',
    start: 'PULSA START',
    worldsLabel: 'Elige mundo',
  },
  worlds: [
    { id: 'tormel', code: '1-1', label: 'TORMEL' },
    { id: 'fenced', code: '1-2', label: 'FENCED' },
    { id: 'experiencia', code: '2', label: 'EXPERIENCIA' },
    { id: 'stack', code: '3', label: 'INVENTARIO' },
    { id: 'contacto', code: 'BONUS', label: 'CONTACTO' },
  ],
  project: {
    mapLabel: 'Mapa del nivel',
    bossLabel: 'JEFE',
    challengesLabel: 'Retos de arquitectura y seguridad',
    stackLabel: 'Stack',
    repo: 'Ver repositorio',
    clear: 'NIVEL SUPERADO',
  },
  projects: [
    {
      id: 'tormel',
      world: '1-1',
      name: 'Tormel',
      kind: 'Sistema POS offline-first para hostelería.',
      repo: 'https://github.com/wenqiange/Tormel',
      stack: ['Rust', 'React', 'TypeScript', 'Tauri', 'SQLite', 'Argon2', 'XChaCha20-Poly1305', 'SHA-256', 'GitHub Actions'],
      map: [
        { label: 'UI React', detail: 'Interfaz en React y TypeScript' },
        { label: 'IPC Tauri', detail: 'Más de 50 endpoints de comunicación IPC' },
        { label: 'Rust · 4 capas', detail: 'Errores unificados y modelos de dominio tipados' },
        { label: 'SQLite', detail: 'Esquema versionado con transacciones atómicas' },
      ],
      boss: { label: 'Fuerza bruta', detail: 'PIN con Argon2, RBAC y bloqueo ante intentos repetidos' },
      challenges: [
        {
          title: 'Autenticación y cifrado',
          body: 'Autenticación por PIN con Argon2, control de acceso basado en roles (RBAC) y cifrado XChaCha20-Poly1305, con bloqueo ante ataques de fuerza bruta.',
        },
        {
          title: 'Fiscalidad VeriFactu',
          body: 'Módulo fiscal compatible con VeriFactu basado en una cadena de hashes SHA-256, con impresión térmica ESC/POS.',
        },
        {
          title: 'Calidad en CI',
          body: 'CI/CD con GitHub Actions: pruebas unitarias, pruebas de estrés y tests de criptografía fiscal.',
        },
      ],
    },
    {
      id: 'fenced',
      world: '1-2',
      name: 'Fenced',
      kind: 'App offline-first de productividad y foco con planificación asistida por IA.',
      repo: 'https://github.com/wenqiange/Fenced',
      stack: ['React Native', 'Expo', 'TypeScript', 'Hono', 'PostgreSQL', 'IA'],
      map: [
        { label: 'App Expo', detail: 'React Native y TypeScript, offline-first' },
        { label: 'API Hono', detail: 'APIs tipadas, sincronización y persistencia' },
        { label: 'Servicios + IA', detail: 'Análisis de tareas en lenguaje natural con esquemas estructurados' },
        { label: 'Time-blocking', detail: 'Núcleo de planificación determinista' },
        { label: 'PostgreSQL', detail: 'Datos de usuario persistidos y sincronizados' },
      ],
      boss: { label: 'IA sin permiso', detail: 'Ninguna sugerencia toca el calendario sin tu confirmación' },
      challenges: [
        {
          title: 'IA bajo control',
          body: 'Las sugerencias de la IA están aisladas en la capa de servicios y nunca modifican directamente eventos del calendario sin la confirmación del usuario.',
        },
        {
          title: 'Planificación determinista',
          body: 'Las tareas pasan por un algoritmo de time-blocking que propone ubicaciones de forma determinista y exige aceptación explícita antes de aplicar cambios.',
        },
        {
          title: 'Backend tipado',
          body: 'Backend en Hono con PostgreSQL para APIs tipadas, sincronización y persistencia de los datos de usuario.',
        },
      ],
    },
  ],
  experience: {
    code: '2',
    heading: 'Experiencia',
    jobs: [
      {
        role: 'Software Developer (prácticas)',
        company: 'NTT DATA',
        place: 'Barcelona',
        period: 'Oct. 2026 – actualidad',
        context:
          'Equipo de planificación y optimización de la producción industrial de vehículos, dentro de una plataforma de datos sobre Snowflake y Azure.',
        stack: ['Python', 'FastAPI', 'Pydantic', 'Dishka', 'Gurobi', 'Snowflake', 'Snowpark', 'DuckDB', 'SQL', 'Docker', 'Azure'],
        points: [
          'Desarrollo y mantenimiento de aplicaciones de planificación de la producción: táctica a 12 meses, operativa semanal y un repositorio de restricciones y capacidades.',
          'APIs REST con FastAPI y DTOs en Pydantic sobre arquitectura limpia (Ports & Adapters, inyección de dependencias con Dishka). Microservicios de cálculo y optimización.',
          'Motores heurísticos y de optimización matemática con Gurobi (programación lineal entera mixta) para asignar producción, turnos y pedidos bajo restricciones.',
          'Datos en Snowflake (arquitectura Medallion), Snowpark y DuckDB. Contenedores Docker desplegados en Azure (Container Apps, Key Vault, Entra ID / OIDC).',
          'Pruebas, revisión de código, documentación técnica y metodología ágil.',
        ],
      },
      {
        role: 'Full-Stack Developer (prácticas)',
        company: 'ATLS Global',
        place: 'Barcelona',
        period: 'Jun. 2026 – sep. 2026',
        stack: ['PHP', 'MySQL', 'Vue.js', 'HTML5', 'CSS', 'AJAX', 'CSRF', 'MFA'],
        points: [
          'Auditoría de seguridad del backend: migración de sistemas de cifrado y refactorización de endpoints para aislar operaciones sensibles y mitigar timing attacks.',
          'Protección CSRF con tokens criptográficamente seguros por sesión y autenticación multifactor (MFA) en los inicios de sesión.',
          'Motor interno en PHP: gestión segura de sesiones, enrutamiento de clases, conexión con MySQL y helpers centralizados reutilizables.',
          'Datagrids y AJAX con cabeceras de seguridad en todas las peticiones asíncronas de la intranet, y componentes interactivos con HTML, CSS y Vue.js.',
        ],
      },
    ],
  },
  stack: {
    code: '3',
    heading: 'Inventario',
    groups: [
      { name: 'Lenguajes', items: ['Rust', 'Python', 'TypeScript', 'C', 'C++', 'C#', 'Java', 'PHP', 'Perl', 'SQL'] },
      { name: 'Backend', items: ['FastAPI', 'Pydantic', 'Dishka', 'Hono', 'Node.js', 'Tauri', 'Laravel'] },
      { name: 'Frontend y móvil', items: ['React', 'React Native', 'Expo', 'Next.js', 'Vue.js', 'Vite', 'HTML5', 'CSS'] },
      { name: 'Datos', items: ['PostgreSQL', 'SQLite', 'MySQL', 'NoSQL', 'Snowflake', 'Snowpark', 'DuckDB'] },
      { name: 'Cloud y DevOps', items: ['Git', 'Docker', 'Azure', 'Linux', 'GitHub Actions', 'CI/CD', 'Apache'] },
      { name: 'Matemáticas y gráficos', items: ['Gurobi (MILP)', 'OpenGL', 'MATLAB', 'Unity', 'Qt'] },
      { name: 'Formación e idiomas', items: ['Ing. Informática · UPC (2023 – )', 'Español', '中文 · HSK6', 'English · C1 Advanced'] },
    ],
  },
  contact: {
    code: 'BONUS',
    heading: 'Contacto',
    text: '¿Buscas a alguien para backend, Rust o desarrollo seguro? Escríbeme.',
    email: 'wenqianghe10@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wenqiang-he/' },
      { label: 'GitHub', href: 'https://github.com/wenqiange' },
    ],
    game: {
      title: 'FIREWALL',
      rules: 'Bloquea los paquetes rojos con el escudo. Deja pasar los verdes.',
      play: 'JUGAR',
      again: 'OTRA VEZ',
      score: 'PUNTOS',
      over: 'BRECHA DETECTADA',
      keys: 'Flechas o A/D para moverte. En móvil, arrastra.',
    },
  },
  eggs: {
    hint: 'Pista: escribe help',
    konami: 'POWER-UP ACTIVADO',
    coin: 'CRÉDITO AÑADIDO',
    commands: {
      help: 'Comandos: help · sudo · rust · argon2 · hire',
      sudo: 'Permiso denegado. El RBAC funciona.',
      rust: 'Compila. El borrow checker está de acuerdo.',
      argon2: 'PIN hasheado. Al atacante le tocará esperar.',
      hire: 'Buena elección. Abriendo el bonus de contacto…',
    },
  },
  footer: '© 2026 Wenqiang He · Hecho con Astro',
};

export default es;
