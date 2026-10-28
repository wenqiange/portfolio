import type { Dict } from './types';

const zh: Dict = {
  htmlLang: 'zh-CN',
  langName: '中文',
  meta: {
    title: 'Wenqiang He · 后端、Rust 与安全开发',
    description: 'Wenqiang He 的作品集。加泰罗尼亚理工大学（UPC）计算机工程专业学生，专注 Rust 与 Python 类型化后端、架构与安全。',
  },
  hud: {
    skip: '跳到正文',
    player: '1UP',
    credit: '投币',
    language: '语言',
    scanlines: 'CRT 效果：扫描线、光晕与动画',
    nav: '关卡',
  },
  title: {
    subtitle: 'BACKEND · RUST · PYTHON',
    tagline: 'UPC 计算机工程专业学生。我构建类型化、安全的后端：安全是架构的一部分，而不是事后的附加层。',
    profile: 'Barcelona · Español · 中文 HSK6 · English C1',
    start: '按 START 开始',
    worldsLabel: '选择关卡',
  },
  worlds: [
    { id: 'tormel', code: '1-1', label: 'TORMEL' },
    { id: 'fenced', code: '1-2', label: 'FENCED' },
    { id: 'experiencia', code: '2', label: '工作经历' },
    { id: 'stack', code: '3', label: '技能库' },
    { id: 'contacto', code: 'BONUS', label: '联系' },
  ],
  project: {
    mapLabel: '关卡地图',
    bossLabel: 'BOSS',
    challengesLabel: '架构与安全挑战',
    stackLabel: '技术栈',
    repo: '查看代码仓库',
    clear: '关卡完成',
  },
  projects: [
    {
      id: 'tormel',
      world: '1-1',
      name: 'Tormel',
      kind: '面向餐饮业的离线优先 POS 收银系统。',
      repo: 'https://github.com/wenqiange/Tormel',
      stack: ['Rust', 'React', 'TypeScript', 'Tauri', 'SQLite', 'Argon2', 'XChaCha20-Poly1305', 'SHA-256', 'GitHub Actions'],
      map: [
        { label: 'React 界面', detail: '使用 React 与 TypeScript 构建的界面' },
        { label: 'Tauri IPC', detail: '50 多个 IPC 通信接口' },
        { label: 'Rust · 四层', detail: '统一错误处理与类型化领域模型' },
        { label: 'SQLite', detail: '带版本管理的数据库结构与原子事务' },
      ],
      boss: { label: '暴力破解', detail: 'Argon2 PIN、RBAC，多次尝试后锁定' },
      challenges: [
        {
          title: '认证与加密',
          body: '基于 Argon2 的 PIN 认证、基于角色的访问控制（RBAC）以及 XChaCha20-Poly1305 加密，并在遭遇暴力破解时锁定。',
        },
        {
          title: 'VeriFactu 税务合规',
          body: '基于 SHA-256 哈希链、兼容西班牙 VeriFactu 规范的税务模块，并支持 ESC/POS 热敏打印。',
        },
        {
          title: '持续集成中的质量保障',
          body: '使用 GitHub Actions 实现 CI/CD：单元测试、压力测试以及税务加密测试。',
        },
      ],
    },
    {
      id: 'fenced',
      world: '1-2',
      name: 'Fenced',
      kind: '离线优先的效率与专注应用，支持 AI 辅助规划。',
      repo: 'https://github.com/wenqiange/Fenced',
      stack: ['React Native', 'Expo', 'TypeScript', 'Hono', 'PostgreSQL', 'AI'],
      map: [
        { label: 'Expo 应用', detail: 'React Native 与 TypeScript，离线优先' },
        { label: 'Hono API', detail: '类型化 API、数据同步与持久化' },
        { label: '服务层 + AI', detail: '用结构化模式进行自然语言任务分析' },
        { label: '时间块规划', detail: '确定性的规划核心' },
        { label: 'PostgreSQL', detail: '用户数据的持久化与同步' },
      ],
      boss: { label: '越权的 AI', detail: '未经你确认，任何建议都不会改动日历' },
      challenges: [
        {
          title: '受控的 AI',
          body: 'AI 生成的建议被隔离在服务层，未经用户确认，绝不会直接修改日历事件。',
        },
        {
          title: '确定性规划',
          body: '任务经过时间块（time-blocking）算法处理，以确定性的方式给出安排建议，并在应用变更前要求用户明确接受。',
        },
        {
          title: '类型化后端',
          body: '基于 Hono 与 PostgreSQL 的后端，提供类型化 API、用户数据同步与持久化。',
        },
      ],
    },
  ],
  experience: {
    code: '2',
    heading: '工作经历',
    jobs: [
      {
        role: '软件开发实习生',
        company: 'NTT DATA',
        place: '巴塞罗那',
        period: '2026 年 10 月 – 至今',
        context: '参与汽车工业生产规划与优化团队的工作，所在数据平台基于 Snowflake 与 Azure。',
        stack: ['Python', 'FastAPI', 'Pydantic', 'Dishka', 'Gurobi', 'Snowflake', 'Snowpark', 'DuckDB', 'SQL', 'Docker', 'Azure'],
        points: [
          '开发和维护生产规划应用：12 个月的战术规划、每周的运营规划，以及约束与产能的数据仓库。',
          '使用 FastAPI 与 Pydantic DTO 开发 REST API，采用整洁架构（端口与适配器，Dishka 依赖注入）；开发计算与优化微服务。',
          '使用 Gurobi（混合整数线性规划）开发启发式与数学优化引擎，在约束条件下分配产量、班次和订单。',
          '在 Snowflake（Medallion 架构）、Snowpark 与 DuckDB 上处理数据；以 Docker 容器部署到 Azure（Container Apps、Key Vault、Entra ID / OIDC）。',
          '测试、代码评审、技术文档编写，以敏捷方式协作。',
        ],
      },
      {
        role: '全栈开发实习生',
        company: 'ATLS Global',
        place: '巴塞罗那',
        period: '2026 年 6 月 – 2026 年 9 月',
        stack: ['PHP', 'MySQL', 'Vue.js', 'HTML5', 'CSS', 'AJAX', 'CSRF', 'MFA'],
        points: [
          '后端安全审计：迁移加密系统并重构接口，隔离敏感操作，缓解计时攻击（timing attack）。',
          '通过按会话生成的密码学安全令牌防御 CSRF，并为登录加入多因素认证（MFA）。',
          '维护 PHP 内部引擎：安全的会话管理、类路由、MySQL 连接，以及可复用的集中式工具函数。',
          '为内网所有异步请求的数据表格与 AJAX 配置安全响应头，并使用 HTML、CSS 与 Vue.js 开发交互组件。',
        ],
      },
    ],
  },
  stack: {
    code: '3',
    heading: '技能库',
    groups: [
      { name: '编程语言', items: ['Rust', 'Python', 'TypeScript', 'C', 'C++', 'C#', 'Java', 'PHP', 'Perl', 'SQL'] },
      { name: '后端', items: ['FastAPI', 'Pydantic', 'Dishka', 'Hono', 'Node.js', 'Tauri', 'Laravel'] },
      { name: '前端与移动端', items: ['React', 'React Native', 'Expo', 'Next.js', 'Vue.js', 'Vite', 'HTML5', 'CSS'] },
      { name: '数据', items: ['PostgreSQL', 'SQLite', 'MySQL', 'NoSQL', 'Snowflake', 'Snowpark', 'DuckDB'] },
      { name: '云与 DevOps', items: ['Git', 'Docker', 'Azure', 'Linux', 'GitHub Actions', 'CI/CD', 'Apache'] },
      { name: '数学与图形', items: ['Gurobi (MILP)', 'OpenGL', 'MATLAB', 'Unity', 'Qt'] },
      { name: '教育与语言', items: ['计算机工程 · UPC（2023 – ）', 'Español', '中文 · HSK6', 'English · C1 Advanced'] },
    ],
  },
  contact: {
    code: 'BONUS',
    heading: '联系',
    text: '在找后端、Rust 或安全开发方向的人？欢迎联系我。',
    email: 'wenqianghe10@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wenqiang-he/' },
      { label: 'GitHub', href: 'https://github.com/wenqiange' },
    ],
    game: {
      title: 'FIREWALL',
      rules: '用护盾挡住红色数据包，让绿色数据包通过。',
      play: '开始',
      again: '再来一次',
      score: '得分',
      over: '防线被突破',
      keys: '用方向键或 A/D 移动。手机上可拖动。',
    },
  },
  eggs: {
    hint: '提示：输入 help',
    konami: '能量提升！',
    coin: '已投币',
    commands: {
      help: '命令：help · sudo · rust · argon2 · hire',
      sudo: '权限不足。RBAC 生效中。',
      rust: '编译通过。借用检查器也同意。',
      argon2: 'PIN 已哈希。攻击者只能慢慢等了。',
      hire: '好选择。正在打开联系关卡…',
    },
  },
  footer: '© 2026 Wenqiang He · 使用 Astro 构建',
};

export default zh;
