import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mountFirewall } from './firewall';

gsap.registerPlugin(ScrollTrigger);
const root = document.documentElement;
root.classList.add('js');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const eggs = JSON.parse(document.getElementById('eggs')!.textContent!) as {
  konami: string; coin: string; commands: Record<string, string>;
};

// Toast
const toastEl = document.querySelector<HTMLElement>('[data-toast]')!;
let toastTimer = 0;
function toast(msg: string) {
  toastEl.textContent = msg;
  toastEl.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove('is-on'), 3200);
}

// Scanlines toggle (preference survives reloads when storage is available).
const scanBtn = document.querySelector<HTMLButtonElement>('[data-scan]');
const syncScan = () => scanBtn?.setAttribute('aria-pressed', String(!root.classList.contains('no-scan')));
syncScan();
scanBtn?.addEventListener('click', () => {
  root.classList.toggle('no-scan');
  syncScan();
  try { localStorage.setItem('scanlines', root.classList.contains('no-scan') ? 'off' : 'on'); } catch {}
});

// Insert coin: every press on 1UP adds a credit.
let credits = 0;
const creditEl = document.querySelector('[data-credit]');
document.querySelector('[data-coin]')?.addEventListener('click', () => {
  credits = Math.min(99, credits + 1);
  if (creditEl) creditEl.textContent = String(credits).padStart(2, '0');
  toast(eggs.coin);
});

// Typed commands and the Konami code, ignored while typing in a field.
const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let kIdx = 0;
let typed = '';
document.addEventListener('keydown', (e) => {
  const el = e.target as HTMLElement;
  if (el.closest('input, textarea, select, [contenteditable], canvas') || e.metaKey || e.ctrlKey || e.altKey) return;

  kIdx = e.key === konami[kIdx] || e.key.toLowerCase() === konami[kIdx] ? kIdx + 1 : e.key === konami[0] ? 1 : 0;
  if (kIdx === konami.length) {
    kIdx = 0;
    root.classList.toggle('powerup');
    toast(eggs.konami);
  }

  if (e.key.length !== 1) return;
  typed = (typed + e.key.toLowerCase()).slice(-12);
  const hit = Object.keys(eggs.commands).find((cmd) => typed.endsWith(cmd));
  if (!hit) return;
  typed = '';
  toast(eggs.commands[hit]);
  if (hit === 'hire') document.getElementById('contacto')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
});

// Level maps: the player walks the request path as the map scrolls through the viewport.
document.querySelectorAll<HTMLElement>('[data-level]').forEach((stage) => {
  const sprite = stage.querySelector<SVGElement>('.level__player')!;
  const track = stage.querySelector<HTMLElement>('.level__track')!;
  const tiles = [...stage.querySelectorAll<HTMLElement>('[data-tile]')];
  const clear = stage.querySelector<HTMLElement>('[data-clear]')!;
  let stops: { x: number; y: number }[] = [];

  const measure = () => {
    const t = track.getBoundingClientRect();
    const horizontal = matchMedia('(min-width: 900px)').matches;
    stops = tiles.map((tile) => {
      const r = tile.getBoundingClientRect();
      return horizontal
        ? { x: r.left - t.left + r.width / 2 - 16, y: 6 }
        : { x: 0, y: r.top - t.top + 12 };
    });
  };

  const render = (progress: number) => {
    const f = progress * (stops.length - 1);
    const i = Math.min(stops.length - 2, Math.floor(f));
    const k = f - i;
    const a = stops[i], b = stops[i + 1];
    gsap.set(sprite, { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k });
    tiles.forEach((tile, n) => tile.classList.toggle('is-lit', n <= Math.round(f)));
    clear.classList.toggle('is-on', progress >= 0.999);
  };

  measure();
  if (reduced) { render(1); return; }
  ScrollTrigger.create({
    trigger: stage,
    start: 'top 75%',
    end: 'bottom 45%',
    scrub: 0.4,
    onRefresh: (self) => { measure(); render(self.progress); },
    onUpdate: (self) => render(self.progress),
  });
});

const game = document.querySelector<HTMLElement>('[data-game]');
if (game) mountFirewall(game);
