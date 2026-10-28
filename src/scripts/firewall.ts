// FIREWALL mini-game: block red packets with the shield, let green ones through.
export const W = 320;
export const H = 200;
const SHIELD_Y = 176;
const SHIELD_H = 6;
const PACKET = 8;

export interface Packet { x: number; y: number; bad: boolean; }
export type Outcome = 'falling' | 'blocked' | 'passed' | 'breach' | 'wrong-block';

/** Pure rule for one packet against the shield; covered by scripts/check-game.ts. */
export function judge(p: Packet, shieldX: number, shieldW: number): Outcome {
  const overlapsX = p.x + PACKET > shieldX && p.x < shieldX + shieldW;
  if (p.y + PACKET >= SHIELD_Y && p.y < SHIELD_Y + SHIELD_H && overlapsX) return p.bad ? 'blocked' : 'wrong-block';
  if (p.y >= H) return p.bad ? 'breach' : 'passed';
  return 'falling';
}

interface Labels { score: string; over: string; again: string; play: string; }

// Best score is the visitor's own, shown in the HUD as HI.
function saveBest(score: number) {
  let best = 0;
  try { best = Number(localStorage.getItem('firewall-best')) || 0; } catch {}
  if (score > best) {
    best = score;
    try { localStorage.setItem('firewall-best', String(best)); } catch {}
  }
  showBest(best);
}
function showBest(best: number) {
  document.querySelectorAll('[data-hi]').forEach((el) => { el.textContent = String(best).padStart(4, '0'); });
}

export function mountFirewall(root: HTMLElement) {
  try { showBest(Number(localStorage.getItem('firewall-best')) || 0); } catch {}
  const canvas = root.querySelector('canvas')!;
  const ctx = canvas.getContext('2d')!;
  const btn = root.querySelector<HTMLButtonElement>('[data-game-play]')!;
  const scoreEl = root.querySelector<HTMLElement>('[data-game-score]')!;
  const L = root.dataset as unknown as Labels;
  const css = getComputedStyle(document.documentElement);
  const c = (n: string) => css.getPropertyValue(n).trim();

  let packets: Packet[] = [];
  let shieldX = W / 2 - 24;
  const shieldW = 48;
  let lives = 3;
  let score = 0;
  let speed = 0.9;
  let spawnIn = 0;
  let running = false;
  let raf = 0;
  const keys = new Set<string>();

  const draw = (msg?: string) => {
    ctx.fillStyle = c('--black');
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = c('--deep-2');
    for (let x = 0; x < W; x += 16) ctx.fillRect(x, SHIELD_Y + 12, 8, 2);
    for (const p of packets) {
      ctx.fillStyle = p.bad ? c('--red') : c('--green');
      ctx.fillRect(Math.round(p.x), Math.round(p.y), PACKET, PACKET);
    }
    ctx.fillStyle = c('--cyan');
    ctx.fillRect(Math.round(shieldX), SHIELD_Y, shieldW, SHIELD_H);
    ctx.fillStyle = c('--red');
    for (let i = 0; i < lives; i++) ctx.fillRect(W - 14 - i * 12, 8, 8, 8);
    if (msg) {
      ctx.fillStyle = c('--yellow');
      ctx.font = '8px "Press Start 2P", "Fusion Pixel ZH", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(msg, W / 2, H / 2);
    }
  };

  const setScore = () => { scoreEl.textContent = String(score).padStart(4, '0'); };

  const tick = () => {
    if (keys.has('left')) shieldX -= 3.2;
    if (keys.has('right')) shieldX += 3.2;
    shieldX = Math.max(0, Math.min(W - shieldW, shieldX));

    if (--spawnIn <= 0) {
      packets.push({ x: Math.floor(Math.random() * ((W - PACKET) / 8)) * 8, y: -PACKET, bad: Math.random() < 0.6 });
      spawnIn = Math.max(18, 60 - score * 1.5);
    }
    const next: Packet[] = [];
    for (const p of packets) {
      p.y += speed;
      const o = judge(p, shieldX, shieldW);
      if (o === 'falling') next.push(p);
      else if (o === 'blocked' || o === 'passed') score++;
      else if (o === 'breach') lives--;
      // wrong-block: the green packet is lost, no points, no life.
    }
    packets = next;
    speed = 0.9 + score * 0.04;
    setScore();

    if (lives <= 0) {
      running = false;
      saveBest(score);
      draw(L.over);
      btn.textContent = L.again;
      btn.hidden = false;
      btn.focus();
      return;
    }
    draw();
    raf = requestAnimationFrame(tick);
  };

  const start = () => {
    packets = []; lives = 3; score = 0; speed = 0.9; spawnIn = 0; shieldX = W / 2 - 24;
    setScore();
    running = true;
    btn.hidden = true;
    canvas.focus();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
  };

  canvas.tabIndex = 0;
  btn.addEventListener('click', start);
  const keyName = (e: KeyboardEvent) =>
    e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A' ? 'left'
      : e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' ? 'right' : null;
  canvas.addEventListener('keydown', (e) => {
    const k = keyName(e);
    if (k && running) { keys.add(k); e.preventDefault(); }
  });
  canvas.addEventListener('keyup', (e) => { const k = keyName(e); if (k) keys.delete(k); });
  canvas.addEventListener('blur', () => keys.clear());
  canvas.addEventListener('pointermove', (e) => {
    if (!running) return;
    const r = canvas.getBoundingClientRect();
    shieldX = ((e.clientX - r.left) / r.width) * W - shieldW / 2;
  });

  // Stop the loop when the cabinet scrolls out of view.
  new IntersectionObserver(([en]) => {
    if (!en.isIntersecting && running) { running = false; cancelAnimationFrame(raf); btn.textContent = L.play; btn.hidden = false; draw(); }
  }).observe(root);

  document.fonts?.ready.then(() => draw());
  draw();
}
