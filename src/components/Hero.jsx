import { useLayoutEffect, useRef, useState } from "react"
import { portrait } from "../data/content"
import DrawingFrame from "./DrawingFrame"
import Sheet from "./Sheet"

function Dimension({ width }) {
  return (
    <div aria-hidden="true" className="relative mb-5 h-6" style={{ width: width ?? "100%" }}>
      <div className="absolute inset-x-0 top-1/2 border-t border-line" />
      <div className="absolute left-0 top-0 h-full border-l border-line" />
      <div className="absolute right-0 top-0 h-full border-r border-line" />
      <span className="absolute left-0 top-1/2 h-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l-2 border-line" />
      <span className="absolute right-0 top-1/2 h-3 translate-x-1/2 -translate-y-1/2 rotate-45 border-l-2 border-line" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-2 font-display text-base tabular-nums text-mid">
        {width ? Math.round(width) : ""}
      </span>
    </div>
  )
}

export default function Hero({ t }) {
  const { ui, about } = t
  const focus = about.notes.find((note) => note.id === "focus")
  const rest = about.notes.filter((note) => note !== focus)
  const wrapRef = useRef(null)
  const lineRef = useRef(null)
  const noteRefs = useRef({})
  const [geo, setGeo] = useState(null)
  const [hot, setHot] = useState(null)

  // Leaders run from the baseline of "WENQIANG" straight down onto each note.
  useLayoutEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current.getBoundingClientRect()
      const line = lineRef.current.getBoundingClientRect()
      const baseline = line.bottom - wrap.top - line.height * 0.06
      const leaders = rest.map(({ id }) => {
        const note = noteRefs.current[id].getBoundingClientRect()
        return { id, x: note.left - wrap.left, y: note.top - wrap.top - 10 }
      })
      setGeo({ width: wrap.width, nameWidth: line.width, baseline, leaders })
    }
    // The name line resizes when the display face swaps in, so watch it as well as the wrapper.
    const observer = new ResizeObserver(measure)
    observer.observe(wrapRef.current)
    observer.observe(lineRef.current)
    return () => observer.disconnect()
  }, [t])

  const dim = (id) => (hot && hot !== id ? "opacity-50" : "")

  return (
    <Sheet
      id="about"
      className="flex min-h-svh flex-col justify-center"
      rail={
        <DrawingFrame
          src={portrait}
          alt="Wenqiang He"
          pendingLabel={ui.portraitPending}
          caption={ui.figure}
          className="aspect-[4/5] w-full max-w-[16rem] xl:h-[40svh] xl:w-auto xl:max-w-none"
        />
      }
    >
      <h1 id="about-title" className="sr-only">
        Wenqiang He — {ui.role}
      </h1>
      <div ref={wrapRef} className="relative [container-type:inline-size]" onMouseLeave={() => setHot(null)}>
        {geo && (
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
          >
            <line className="pencil-line" x1="0" x2={geo.width} y1={geo.baseline} y2={geo.baseline} />
            {geo.leaders.map((leader) => (
              <g key={leader.id} className={`transition-opacity duration-300 ${hot && hot !== leader.id ? "opacity-25" : ""}`}>
                <path
                  className="ink"
                  pathLength="1"
                  style={hot === leader.id ? { strokeWidth: 2.25 } : undefined}
                  d={`M ${leader.x} ${geo.baseline} V ${leader.y} H ${leader.x + 32}`}
                />
                <circle cx={leader.x} cy={geo.baseline} r="4" fill="rgb(var(--line))" />
              </g>
            ))}
          </svg>
        )}

        <Dimension width={geo?.nameWidth} />
        <div
          aria-hidden="true"
          className="font-display text-[clamp(3.5rem,min(23cqi,30svh),16rem)] font-bold uppercase leading-[0.8]"
        >
          <span ref={lineRef} className="pencil-text block w-fit">
            Wenqiang
          </span>
          <span className="pencil-text mt-[0.06em] block">He</span>
        </div>

        <ul className="mt-10 grid gap-8 sm:grid-cols-3 lg:absolute lg:bottom-0 lg:left-[clamp(9rem,26cqi,20rem)] lg:right-0 lg:mt-0 lg:gap-6">
          {rest.map((note) => (
            <li
              key={note.id}
              ref={(el) => (noteRefs.current[note.id] = el)}
              onMouseEnter={() => setHot(note.id)}
              className={`transition-opacity duration-300 ${dim(note.id)}`}
            >
              <p className="label">{note.label}</p>
              <p className="mt-1.5 max-w-[28ch] leading-snug text-line">{note.value}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 font-display text-2xl font-medium uppercase tracking-[0.08em] text-mid md:text-3xl">
        {ui.role} · {ui.city}
      </p>

      <div className="mt-10 border-t border-mid/50 pt-4">
        <p className="label">{ui.generalNotes}</p>
        <ol className="mt-3 grid gap-x-10 gap-y-3 md:grid-cols-2">
          {[about.intro, focus.value].map((note, index) => (
            <li key={note} className="flex max-w-[60ch] gap-3">
              <span className="text-mid">{index + 1}.</span>
              <span>{note}</span>
            </li>
          ))}
        </ol>
      </div>
    </Sheet>
  )
}
