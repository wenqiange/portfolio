export const locales = ['es', 'ca', 'en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export interface MapNode {
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  world: string;
  name: string;
  kind: string;
  repo: string;
  stack: string[];
  map: MapNode[];
  boss: MapNode;
  challenges: { title: string; body: string }[];
}

export interface Job {
  role: string;
  company: string;
  place: string;
  period: string;
  context?: string;
  stack: string[];
  points: string[];
}

export interface Dict {
  htmlLang: string;
  langName: string;
  meta: { title: string; description: string };
  hud: {
    skip: string;
    player: string;
    credit: string;
    language: string;
    scanlines: string;
    nav: string;
  };
  title: {
    subtitle: string;
    tagline: string;
    profile: string;
    start: string;
    worldsLabel: string;
  };
  worlds: { id: string; code: string; label: string }[];
  project: {
    mapLabel: string;
    bossLabel: string;
    challengesLabel: string;
    stackLabel: string;
    repo: string;
    clear: string;
  };
  projects: Project[];
  experience: { code: string; heading: string; jobs: Job[] };
  stack: { code: string; heading: string; groups: { name: string; items: string[] }[] };
  contact: {
    code: string;
    heading: string;
    text: string;
    email: string;
    links: { label: string; href: string }[];
    game: {
      title: string;
      rules: string;
      play: string;
      again: string;
      score: string;
      over: string;
      keys: string;
    };
  };
  eggs: {
    hint: string;
    konami: string;
    coin: string;
    commands: Record<string, string>;
  };
  footer: string;
}
