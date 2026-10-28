import type { Dict } from './types';

const ca: Dict = {
  htmlLang: 'ca',
  langName: 'Català',
  meta: {
    title: 'Wenqiang He · Backend, Rust i desenvolupament segur',
    description:
      "Portfoli de Wenqiang He, estudiant d'Enginyeria Informàtica a la UPC. Backends tipats en Rust i Python, arquitectura i seguretat.",
  },
  hud: {
    skip: 'Salta al contingut',
    player: '1UP',
    credit: 'CRÈDIT',
    language: 'Idioma',
    scanlines: 'Efectes CRT: scanlines, brillantor i animació',
    nav: 'Mons',
  },
  title: {
    subtitle: 'BACKEND · RUST · PYTHON',
    tagline:
      "Estudiant d'Enginyeria Informàtica a la UPC. Construeixo backends tipats i segurs: la seguretat va dins de l'arquitectura, no al damunt.",
    profile: 'Barcelona · Español · 中文 HSK6 · English C1',
    start: 'PREM START',
    worldsLabel: 'Tria món',
  },
  worlds: [
    { id: 'tormel', code: '1-1', label: 'TORMEL' },
    { id: 'fenced', code: '1-2', label: 'FENCED' },
    { id: 'experiencia', code: '2', label: 'EXPERIÈNCIA' },
    { id: 'stack', code: '3', label: 'INVENTARI' },
    { id: 'contacto', code: 'BONUS', label: 'CONTACTE' },
  ],
  project: {
    mapLabel: 'Mapa del nivell',
    bossLabel: 'CAP FINAL',
    challengesLabel: "Reptes d'arquitectura i seguretat",
    stackLabel: 'Stack',
    repo: 'Veure el repositori',
    clear: 'NIVELL SUPERAT',
  },
  projects: [
    {
      id: 'tormel',
      world: '1-1',
      name: 'Tormel',
      kind: "Sistema TPV offline-first per a l'hostaleria.",
      repo: 'https://github.com/wenqiange/Tormel',
      stack: ['Rust', 'React', 'TypeScript', 'Tauri', 'SQLite', 'Argon2', 'XChaCha20-Poly1305', 'SHA-256', 'GitHub Actions'],
      map: [
        { label: 'UI React', detail: 'Interfície en React i TypeScript' },
        { label: 'IPC Tauri', detail: 'Més de 50 endpoints de comunicació IPC' },
        { label: 'Rust · 4 capes', detail: "Gestió d'errors unificada i models de domini tipats" },
        { label: 'SQLite', detail: 'Esquema versionat amb transaccions atòmiques' },
      ],
      boss: { label: 'Força bruta', detail: 'PIN amb Argon2, RBAC i bloqueig davant intents repetits' },
      challenges: [
        {
          title: 'Autenticació i xifratge',
          body: "Autenticació per PIN amb Argon2, control d'accés basat en rols (RBAC) i xifratge XChaCha20-Poly1305, amb bloqueig davant d'atacs de força bruta.",
        },
        {
          title: 'Fiscalitat VeriFactu',
          body: 'Mòdul fiscal compatible amb VeriFactu basat en una cadena de hashes SHA-256, amb impressió tèrmica ESC/POS.',
        },
        {
          title: 'Qualitat a la CI',
          body: "CI/CD amb GitHub Actions: proves unitàries, proves d'estrès i tests de criptografia fiscal.",
        },
      ],
    },
    {
      id: 'fenced',
      world: '1-2',
      name: 'Fenced',
      kind: "App offline-first de productivitat i focus amb planificació assistida per IA.",
      repo: 'https://github.com/wenqiange/Fenced',
      stack: ['React Native', 'Expo', 'TypeScript', 'Hono', 'PostgreSQL', 'IA'],
      map: [
        { label: 'App Expo', detail: 'React Native i TypeScript, offline-first' },
        { label: 'API Hono', detail: 'APIs tipades, sincronització i persistència' },
        { label: 'Serveis + IA', detail: 'Anàlisi de tasques en llenguatge natural amb esquemes estructurats' },
        { label: 'Time-blocking', detail: 'Nucli de planificació determinista' },
        { label: 'PostgreSQL', detail: "Dades d'usuari persistides i sincronitzades" },
      ],
      boss: { label: 'IA sense permís', detail: 'Cap suggeriment toca el calendari sense la teva confirmació' },
      challenges: [
        {
          title: 'IA sota control',
          body: "Els suggeriments de la IA estan aïllats a la capa de serveis i mai no modifiquen directament esdeveniments del calendari sense la confirmació de l'usuari.",
        },
        {
          title: 'Planificació determinista',
          body: "Les tasques passen per un algorisme de time-blocking que proposa ubicacions de manera determinista i exigeix acceptació explícita abans d'aplicar canvis.",
        },
        {
          title: 'Backend tipat',
          body: "Backend en Hono amb PostgreSQL per a APIs tipades, sincronització i persistència de les dades d'usuari.",
        },
      ],
    },
  ],
  experience: {
    code: '2',
    heading: 'Experiència',
    jobs: [
      {
        role: 'Software Developer (pràctiques)',
        company: 'NTT DATA',
        place: 'Barcelona',
        period: 'Oct. 2026 – actualitat',
        context:
          "Equip de planificació i optimització de la producció industrial de vehicles, dins d'una plataforma de dades sobre Snowflake i Azure.",
        stack: ['Python', 'FastAPI', 'Pydantic', 'Dishka', 'Gurobi', 'Snowflake', 'Snowpark', 'DuckDB', 'SQL', 'Docker', 'Azure'],
        points: [
          'Desenvolupament i manteniment d’aplicacions de planificació de la producció: tàctica a 12 mesos, operativa setmanal i un repositori de restriccions i capacitats.',
          "APIs REST amb FastAPI i DTOs en Pydantic sobre arquitectura neta (Ports & Adapters, injecció de dependències amb Dishka). Microserveis de càlcul i optimització.",
          "Motors heurístics i d'optimització matemàtica amb Gurobi (programació lineal entera mixta) per assignar producció, torns i comandes sota restriccions.",
          'Dades a Snowflake (arquitectura Medallion), Snowpark i DuckDB. Contenidors Docker desplegats a Azure (Container Apps, Key Vault, Entra ID / OIDC).',
          'Proves, revisió de codi, documentació tècnica i metodologia àgil.',
        ],
      },
      {
        role: 'Full-Stack Developer (pràctiques)',
        company: 'ATLS Global',
        place: 'Barcelona',
        period: 'Jun. 2026 – set. 2026',
        stack: ['PHP', 'MySQL', 'Vue.js', 'HTML5', 'CSS', 'AJAX', 'CSRF', 'MFA'],
        points: [
          "Auditoria de seguretat del backend: migració de sistemes de xifratge i refactorització d'endpoints per aïllar operacions sensibles i mitigar timing attacks.",
          "Protecció CSRF amb tokens criptogràficament segurs per sessió i autenticació multifactor (MFA) als inicis de sessió.",
          'Motor intern en PHP: gestió segura de sessions, encaminament de classes, connexió amb MySQL i helpers centralitzats reutilitzables.',
          "Datagrids i AJAX amb capçaleres de seguretat a totes les peticions asíncrones de la intranet, i components interactius amb HTML, CSS i Vue.js.",
        ],
      },
    ],
  },
  stack: {
    code: '3',
    heading: 'Inventari',
    groups: [
      { name: 'Llenguatges', items: ['Rust', 'Python', 'TypeScript', 'C', 'C++', 'C#', 'Java', 'PHP', 'Perl', 'SQL'] },
      { name: 'Backend', items: ['FastAPI', 'Pydantic', 'Dishka', 'Hono', 'Node.js', 'Tauri', 'Laravel'] },
      { name: 'Frontend i mòbil', items: ['React', 'React Native', 'Expo', 'Next.js', 'Vue.js', 'Vite', 'HTML5', 'CSS'] },
      { name: 'Dades', items: ['PostgreSQL', 'SQLite', 'MySQL', 'NoSQL', 'Snowflake', 'Snowpark', 'DuckDB'] },
      { name: 'Cloud i DevOps', items: ['Git', 'Docker', 'Azure', 'Linux', 'GitHub Actions', 'CI/CD', 'Apache'] },
      { name: 'Matemàtiques i gràfics', items: ['Gurobi (MILP)', 'OpenGL', 'MATLAB', 'Unity', 'Qt'] },
      { name: 'Formació i idiomes', items: ['Eng. Informàtica · UPC (2023 – )', 'Español', '中文 · HSK6', 'English · C1 Advanced'] },
    ],
  },
  contact: {
    code: 'BONUS',
    heading: 'Contacte',
    text: 'Busques algú per a backend, Rust o desenvolupament segur? Escriu-me.',
    email: 'wenqianghe10@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wenqiang-he/' },
      { label: 'GitHub', href: 'https://github.com/wenqiange' },
    ],
    game: {
      title: 'FIREWALL',
      rules: "Bloqueja els paquets vermells amb l'escut. Deixa passar els verds.",
      play: 'JUGAR',
      again: 'UN ALTRE COP',
      score: 'PUNTS',
      over: 'BRETXA DETECTADA',
      keys: 'Fletxes o A/D per moure’t. Al mòbil, arrossega.',
    },
  },
  eggs: {
    hint: 'Pista: escriu help',
    konami: 'POWER-UP ACTIVAT',
    coin: 'CRÈDIT AFEGIT',
    commands: {
      help: 'Ordres: help · sudo · rust · argon2 · hire',
      sudo: 'Permís denegat. El RBAC funciona.',
      rust: 'Compila. El borrow checker hi està d’acord.',
      argon2: "PIN hashejat. L'atacant haurà d'esperar.",
      hire: 'Bona elecció. Obrint el bonus de contacte…',
    },
  },
  footer: '© 2026 Wenqiang He · Fet amb Astro',
};

export default ca;
