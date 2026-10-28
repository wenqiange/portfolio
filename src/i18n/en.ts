import type { Dict } from './types';

const en: Dict = {
  htmlLang: 'en',
  langName: 'English',
  meta: {
    title: 'Wenqiang He · Backend, Rust and secure development',
    description:
      'Portfolio of Wenqiang He, Computer Engineering student at UPC. Typed backends in Rust and Python, architecture and security.',
  },
  hud: {
    skip: 'Skip to content',
    player: '1UP',
    credit: 'CREDIT',
    language: 'Language',
    scanlines: 'CRT effects: scanlines, glow and motion',
    nav: 'Worlds',
  },
  title: {
    subtitle: 'BACKEND · RUST · PYTHON',
    tagline:
      'Computer Engineering student at UPC. I build typed, secure backends: security lives inside the architecture, not on top of it.',
    profile: 'Barcelona · Español · 中文 HSK6 · English C1',
    start: 'PRESS START',
    worldsLabel: 'Select world',
  },
  worlds: [
    { id: 'tormel', code: '1-1', label: 'TORMEL' },
    { id: 'fenced', code: '1-2', label: 'FENCED' },
    { id: 'experiencia', code: '2', label: 'EXPERIENCE' },
    { id: 'stack', code: '3', label: 'INVENTORY' },
    { id: 'contacto', code: 'BONUS', label: 'CONTACT' },
  ],
  project: {
    mapLabel: 'Level map',
    bossLabel: 'BOSS',
    challengesLabel: 'Architecture and security challenges',
    stackLabel: 'Stack',
    repo: 'View repository',
    clear: 'LEVEL CLEAR',
  },
  projects: [
    {
      id: 'tormel',
      world: '1-1',
      name: 'Tormel',
      kind: 'Offline-first point-of-sale system for hospitality.',
      repo: 'https://github.com/wenqiange/Tormel',
      stack: ['Rust', 'React', 'TypeScript', 'Tauri', 'SQLite', 'Argon2', 'XChaCha20-Poly1305', 'SHA-256', 'GitHub Actions'],
      map: [
        { label: 'React UI', detail: 'Interface in React and TypeScript' },
        { label: 'Tauri IPC', detail: 'More than 50 IPC endpoints' },
        { label: 'Rust · 4 layers', detail: 'Unified error handling and typed domain models' },
        { label: 'SQLite', detail: 'Versioned schema with atomic transactions' },
      ],
      boss: { label: 'Brute force', detail: 'Argon2 PIN, RBAC and lockout on repeated attempts' },
      challenges: [
        {
          title: 'Authentication and encryption',
          body: 'PIN authentication with Argon2, role-based access control (RBAC) and XChaCha20-Poly1305 encryption, with lockout against brute-force attempts.',
        },
        {
          title: 'VeriFactu compliance',
          body: 'A VeriFactu-compatible tax module built on a SHA-256 hash chain, with ESC/POS thermal printing.',
        },
        {
          title: 'Quality in CI',
          body: 'CI/CD on GitHub Actions: unit tests, stress tests and fiscal cryptography tests.',
        },
      ],
    },
    {
      id: 'fenced',
      world: '1-2',
      name: 'Fenced',
      kind: 'Offline-first productivity and focus app with AI-assisted planning.',
      repo: 'https://github.com/wenqiange/Fenced',
      stack: ['React Native', 'Expo', 'TypeScript', 'Hono', 'PostgreSQL', 'AI'],
      map: [
        { label: 'Expo app', detail: 'React Native and TypeScript, offline-first' },
        { label: 'Hono API', detail: 'Typed APIs, sync and persistence' },
        { label: 'Services + AI', detail: 'Natural-language task analysis with structured schemas' },
        { label: 'Time-blocking', detail: 'Deterministic planning core' },
        { label: 'PostgreSQL', detail: 'User data persisted and synced' },
      ],
      boss: { label: 'Rogue AI', detail: 'No suggestion touches the calendar without your confirmation' },
      challenges: [
        {
          title: 'AI under control',
          body: 'AI suggestions are isolated in the service layer and never modify calendar events directly without user confirmation.',
        },
        {
          title: 'Deterministic planning',
          body: 'Tasks go through a time-blocking algorithm that proposes placements deterministically and requires explicit acceptance before applying changes.',
        },
        {
          title: 'Typed backend',
          body: 'A Hono backend on PostgreSQL for typed APIs, synchronisation and persistence of user data.',
        },
      ],
    },
  ],
  experience: {
    code: '2',
    heading: 'Experience',
    jobs: [
      {
        role: 'Software Developer (internship)',
        company: 'NTT DATA',
        place: 'Barcelona',
        period: 'Oct 2026 – present',
        context:
          'Team working on planning and optimisation of industrial vehicle production, within a data platform on Snowflake and Azure.',
        stack: ['Python', 'FastAPI', 'Pydantic', 'Dishka', 'Gurobi', 'Snowflake', 'Snowpark', 'DuckDB', 'SQL', 'Docker', 'Azure'],
        points: [
          'Building and maintaining production-planning applications: 12-month tactical planning, weekly operational planning and a repository of constraints and capacities.',
          'REST APIs with FastAPI and Pydantic DTOs on a clean architecture (Ports & Adapters, dependency injection with Dishka). Calculation and optimisation microservices.',
          'Heuristic and mathematical optimisation engines with Gurobi (mixed-integer linear programming) to allocate production, shifts and orders under constraints.',
          'Data on Snowflake (Medallion architecture), Snowpark and DuckDB. Docker containers deployed on Azure (Container Apps, Key Vault, Entra ID / OIDC).',
          'Testing, code review, technical documentation and agile delivery.',
        ],
      },
      {
        role: 'Full-Stack Developer (internship)',
        company: 'ATLS Global',
        place: 'Barcelona',
        period: 'Jun 2026 – Sep 2026',
        stack: ['PHP', 'MySQL', 'Vue.js', 'HTML5', 'CSS', 'AJAX', 'CSRF', 'MFA'],
        points: [
          'Backend security audit: migrated encryption systems and refactored endpoints to isolate sensitive operations and mitigate timing attacks.',
          'CSRF protection with cryptographically secure per-session tokens, and multi-factor authentication (MFA) on sign-in.',
          'Internal PHP engine: secure session handling, class routing, MySQL access and centralised reusable helpers.',
          'Datagrids and AJAX with security headers on every asynchronous intranet request, and interactive components in HTML, CSS and Vue.js.',
        ],
      },
    ],
  },
  stack: {
    code: '3',
    heading: 'Inventory',
    groups: [
      { name: 'Languages', items: ['Rust', 'Python', 'TypeScript', 'C', 'C++', 'C#', 'Java', 'PHP', 'Perl', 'SQL'] },
      { name: 'Backend', items: ['FastAPI', 'Pydantic', 'Dishka', 'Hono', 'Node.js', 'Tauri', 'Laravel'] },
      { name: 'Frontend and mobile', items: ['React', 'React Native', 'Expo', 'Next.js', 'Vue.js', 'Vite', 'HTML5', 'CSS'] },
      { name: 'Data', items: ['PostgreSQL', 'SQLite', 'MySQL', 'NoSQL', 'Snowflake', 'Snowpark', 'DuckDB'] },
      { name: 'Cloud and DevOps', items: ['Git', 'Docker', 'Azure', 'Linux', 'GitHub Actions', 'CI/CD', 'Apache'] },
      { name: 'Maths and graphics', items: ['Gurobi (MILP)', 'OpenGL', 'MATLAB', 'Unity', 'Qt'] },
      { name: 'Education and languages', items: ['Computer Engineering · UPC (2023 – )', 'Español', '中文 · HSK6', 'English · C1 Advanced'] },
    ],
  },
  contact: {
    code: 'BONUS',
    heading: 'Contact',
    text: 'Looking for someone for backend, Rust or secure development? Get in touch.',
    email: 'wenqianghe10@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wenqiang-he/' },
      { label: 'GitHub', href: 'https://github.com/wenqiange' },
    ],
    game: {
      title: 'FIREWALL',
      rules: 'Block the red packets with the shield. Let the green ones through.',
      play: 'PLAY',
      again: 'AGAIN',
      score: 'SCORE',
      over: 'BREACH DETECTED',
      keys: 'Arrow keys or A/D to move. On mobile, drag.',
    },
  },
  eggs: {
    hint: 'Hint: type help',
    konami: 'POWER-UP ON',
    coin: 'CREDIT ADDED',
    commands: {
      help: 'Commands: help · sudo · rust · argon2 · hire',
      sudo: 'Permission denied. RBAC works.',
      rust: 'It compiles. The borrow checker agrees.',
      argon2: 'PIN hashed. The attacker will have to wait.',
      hire: 'Good choice. Opening the contact bonus…',
    },
  },
  footer: '© 2026 Wenqiang He · Built with Astro',
};

export default en;
