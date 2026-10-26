// Architecture drawings for the project details, drawn only from facts stated in the project copy.
// Labels are plain strings or { es, en }.

const hexagon = "M520 150 L480 219 L400 219 L360 150 L400 81 L480 81 Z"

// Deterministic scatter for the Tribus clustering sketch (illustrative, labelled as such).
const clusters = [
  [620, 90],
  [770, 105],
  [700, 205],
].map(([cx, cy], c) => ({
  cx,
  cy,
  points: Array.from({ length: 9 }, (_, i) => {
    const angle = i * 2.4 + c
    const radius = 10 + ((i * 7 + c * 5) % 26)
    return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius * 0.8]
  }),
}))

const diagrams = {
  tormel: {
    boundaries: [{ x: 16, y: 36, w: 548, h: 228, label: { es: "Tauri 2 · escritorio", en: "Tauri 2 · desktop" } }],
    boxes: [
      { x: 40, y: 70, w: 170, h: 64, label: { es: "Interfaz React", en: "React UI" }, sub: "TypeScript" },
      { x: 290, y: 70, w: 240, h: 64, label: { es: "Núcleo Rust", en: "Rust core" }, sub: { es: "RBAC · criptografía", en: "RBAC · crypto" } },
      { x: 290, y: 178, w: 240, h: 64, label: "SQLite", sub: "offline-first" },
      { x: 640, y: 40, w: 210, h: 56, label: "ESC/POS", sub: { es: "impresión", en: "printing" } },
      { x: 640, y: 114, w: 210, h: 56, label: "PDF", sub: { es: "generación", en: "generation" } },
      { x: 640, y: 188, w: 210, h: 56, label: "VeriFactu", sub: { es: "cumplimiento fiscal", en: "fiscal compliance" } },
    ],
    edges: [
      { d: "M210 102 H290", both: true },
      { d: "M410 134 V178", both: true },
      { d: "M530 102 H585 V68 H640" },
      { d: "M585 102 V142 H640" },
      { d: "M585 142 V216 H640" },
    ],
  },
  syncly: {
    boundaries: [{ x: 10, y: 22, w: 860, h: 248, label: { es: "Monolito modular · Docker", en: "Modular monolith · Docker" } }],
    shapes: [hexagon],
    core: { x: 440, y: 150, label: { es: "Dominio", en: "Domain" }, sub: "DDD" },
    ports: [
      [380, 115],
      [380, 185],
      [500, 115],
      [500, 185],
    ],
    texts: [
      { x: 440, y: 150, label: { es: "Dominio", en: "Domain" }, big: true },
      { x: 440, y: 172, label: "DDD" },
    ],
    boxes: [
      { x: 30, y: 87, w: 170, h: 56, label: "REST API", sub: "Swagger/OpenAPI" },
      { x: 30, y: 157, w: 170, h: 56, label: "JWT", sub: { es: "autenticación", en: "authentication" } },
      { x: 680, y: 87, w: 170, h: 56, label: { es: "Repositorios", en: "Repositories" }, sub: { es: "inversión de dependencias", en: "dependency inversion" } },
      { x: 680, y: 157, w: 170, h: 56, label: { es: "Eventos", en: "Events" }, sub: { es: "orientado a eventos", en: "event-driven" } },
    ],
    edges: [
      { d: "M200 115 H374" },
      { d: "M200 185 H374" },
      { d: "M506 115 H680" },
      { d: "M506 185 H680" },
    ],
  },
  tribus: {
    boxes: [
      { x: 40, y: 28, w: 440, h: 56, label: { es: "Presentación", en: "Presentation" }, sub: "React · Vite · Electron" },
      { x: 40, y: 112, w: 440, h: 56, label: { es: "Lógica", en: "Logic" }, sub: "K-means++" },
      { x: 40, y: 196, w: 440, h: 56, label: { es: "Datos", en: "Data" }, sub: { es: "perfiles de comportamiento", en: "behavioral profiles" } },
    ],
    edges: [
      { d: "M260 84 V112", both: true },
      { d: "M260 168 V196", both: true },
      { d: "M480 140 H560" },
    ],
    clusters: true,
    texts: [{ x: 700, y: 268, label: { es: "k-means++ · ilustrativo", en: "k-means++ · illustrative" } }],
  },
  toolsy: {
    boundaries: [{ x: 20, y: 112, w: 840, h: 156, label: { es: "En el navegador · sin backend", en: "In the browser · no backend" }, bottom: true }],
    boxes: [
      { x: 300, y: 16, w: 280, h: 60, label: "Next.js", sub: "TypeScript · React" },
      { x: 40, y: 148, w: 140, h: 64, label: "JSON", sub: { es: "formateador", en: "formatter" } },
      { x: 200, y: 148, w: 140, h: 64, label: { es: "Contraseñas", en: "Passwords" }, sub: "Web Crypto API" },
      { x: 360, y: 148, w: 140, h: 64, label: "QR", sub: "qrcode" },
      { x: 520, y: 148, w: 140, h: 64, label: { es: "Imágenes", en: "Images" }, sub: "Canvas API" },
      { x: 680, y: 148, w: 140, h: 64, label: "+", sub: { es: "siguiente", en: "next tool" }, dashed: true },
    ],
    edges: [
      { d: "M440 76 V104", plain: true },
      { d: "M110 104 H750", plain: true },
      { d: "M110 104 V148" },
      { d: "M270 104 V148" },
      { d: "M430 104 V148" },
      { d: "M590 104 V148" },
      { d: "M750 104 V148" },
    ],
  },
}

export default function DetailDiagram({ id, lang, title }) {
  const diagram = diagrams[id]
  const say = (value) => (typeof value === "string" ? value : value[lang])
  const marker = `arrow-${id}`

  // Narrow screens get the same parts as a stacked schedule on one spine; the drawing would be unreadable at 390px.
  const stacked = [...(diagram.core ? [diagram.core] : []), ...diagram.boxes]

  return (
    <div>
      <div className="md:hidden">
        {diagram.boundaries?.map((b) => (
          <p key={say(b.label)} className="label mb-3">
            {say(b.label)}
          </p>
        ))}
        <ol aria-label={title} className="ml-2 space-y-2 border-l border-line pl-5">
          {stacked.map((box) => (
            <li
              key={`${box.x}-${box.y}`}
              className={`relative px-3 py-2 before:absolute before:-left-5 before:top-1/2 before:w-5 before:border-t before:border-line ${
                box.dashed ? "border border-dashed border-mid" : "border-[1.5px] border-line bg-paper-deep/60"
              }`}
            >
              <span className="block font-display text-lg font-semibold uppercase leading-tight">{say(box.label)}</span>
              <span className="block text-sm text-mid">{say(box.sub)}</span>
            </li>
          ))}
        </ol>
      </div>

      <svg viewBox="0 0 880 280" role="img" aria-label={title} className="hidden w-full md:block">
        <defs>
          <marker id={marker} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 Z" fill="rgb(var(--line))" />
          </marker>
        </defs>

        {diagram.boundaries?.map((b) => (
          <g key={say(b.label)}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" stroke="rgb(var(--mid))" strokeDasharray="6 6" />
            <text x={b.x + 14} y={b.bottom ? b.y + b.h - 12 : b.y + 22} className="fill-mid font-sans text-[13px] font-semibold uppercase tracking-[0.14em]">
              {say(b.label)}
            </text>
          </g>
        ))}

        {diagram.shapes?.map((d) => (
          <path key={d} d={d} className="ink" pathLength="1" style={{ strokeWidth: 2 }} />
        ))}
        {diagram.ports?.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 6} y={y - 6} width="12" height="12" fill="rgb(var(--paper))" stroke="rgb(var(--line))" />
        ))}

        {diagram.boxes.map((box) => (
          <g key={`${box.x}-${box.y}`}>
            <rect
              x={box.x}
              y={box.y}
              width={box.w}
              height={box.h}
              fill="rgb(var(--paper-deep) / 0.6)"
              className={box.dashed ? undefined : "ink"}
              pathLength="1"
              stroke={box.dashed ? "rgb(var(--mid))" : undefined}
              strokeDasharray={box.dashed ? "6 6" : undefined}
              style={box.dashed ? undefined : { strokeWidth: 1.5 }}
            />
            <text x={box.x + box.w / 2} y={box.y + box.h / 2 - 3} textAnchor="middle" className="fill-line font-display text-[20px] font-semibold uppercase">
              {say(box.label)}
            </text>
            <text x={box.x + box.w / 2} y={box.y + box.h / 2 + 17} textAnchor="middle" className="fill-mid font-sans text-[13px]">
              {say(box.sub)}
            </text>
          </g>
        ))}

        {diagram.edges.map((edge) => (
          <path
            key={edge.d}
            d={edge.d}
            className="ink"
            pathLength="1"
            markerEnd={edge.plain ? undefined : `url(#${marker})`}
            markerStart={edge.both ? `url(#${marker})` : undefined}
          />
        ))}

        {diagram.clusters &&
          clusters.map((cluster) => (
            <g key={cluster.cx}>
              <circle cx={cluster.cx} cy={cluster.cy} r="44" className="pencil-line" />
              {cluster.points.map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="rgb(var(--mid))" />
              ))}
              <path d={`M${cluster.cx - 7} ${cluster.cy - 7} l14 14 m0 -14 l-14 14`} className="ink" pathLength="1" style={{ strokeWidth: 2 }} />
            </g>
          ))}

        {diagram.texts?.map((text) => (
          <text
            key={say(text.label)}
            x={text.x}
            y={text.y}
            textAnchor="middle"
            className={text.big ? "fill-line font-display text-[24px] font-bold uppercase" : "fill-mid font-sans text-[13px]"}
          >
            {say(text.label)}
          </text>
        ))}
      </svg>
    </div>
  )
}
