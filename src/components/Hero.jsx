import { useLayoutEffect, useRef, useState } from "react"
import { portrait } from "../data/content"
import { Dimension } from "./Dimension"
import DrawingFrame from "./DrawingFrame"
import Sheet from "./Sheet"

// Where each leader leaves the name, in ems from its note, and how far each note drops below the row.
const leaderOffsets = [-0.42, 0.22, -0.18, 0.4]
const noteDrops = ["lg:mt-0", "lg:mt-14", "lg:mt-5", "lg:mt-20"]

export default function Hero({ t }) {
  const { ui, about } = t
  const wrapRef = useRef(null)
  const lineRef = useRef(null)
  const noteRefs = useRef({})
  const [geo, setGeo] = useState(null)
  const [hot, setHot] = useState(null)

  // Angled leaders run from the baseline of "WENQIANG" down to a short shoulder over each note.
  useLayoutEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current.getBoundingClientRect()
      const line = lineRef.current.getBoundingClientRect()
      const em = parseFloat(getComputedStyle(lineRef.current).fontSize)
      const baseline = line.bottom - wrap.top - line.height * 0.06
      const leaders = about.notes.map(({ id }, index) => {
        const note = noteRefs.current[id].getBoundingClientRect()
        const x = note.left - wrap.left
        const from = Math.min(Math.max(x + leaderOffsets[index] * em, 12), line.width - 12)
        return { id, from, x, y: note.top - wrap.top - 12 }
      })
      setGeo({ width: wrap.width, nameWidth: line.width, baseline, leaders })
    }
    // The name line resizes when the display face swaps in, so watch it as well as the wrapper.
    const observer = new ResizeObserver(measure)
    observer.observe(wrapRef.current)
    observer.observe(lineRef.current)
    return () => observer.disconnect()
  }, [about])

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
                  d={`M ${leader.from} ${geo.baseline} L ${leader.x} ${leader.y} H ${leader.x + 36}`}
                />
                <circle cx={leader.from} cy={geo.baseline} r="4" fill="rgb(var(--line))" />
              </g>
            ))}
          </svg>
        )}

        <Dimension width={geo?.nameWidth} />
        <div className="font-display text-[clamp(3.5rem,min(23cqi,30svh),16rem)] font-bold uppercase leading-[0.8]">
          <span aria-hidden="true" ref={lineRef} className="pencil-text block w-fit">
            Wenqiang
          </span>
          <div className="mt-[0.06em] lg:flex lg:items-start lg:gap-[0.3em]">
            <span aria-hidden="true" className="pencil-text block">
              He
            </span>
            <ul className="mt-10 grid gap-8 font-sans text-base font-normal normal-case leading-snug sm:grid-cols-2 lg:mt-[0.2em] lg:flex-1 lg:grid-cols-4 lg:gap-5">
              {about.notes.map((note, index) => (
                <li
                  key={note.id}
                  ref={(el) => (noteRefs.current[note.id] = el)}
                  onMouseEnter={() => setHot(note.id)}
                  className={`transition-opacity duration-300 ${noteDrops[index]} ${hot && hot !== note.id ? "opacity-50" : ""}`}
                >
                  <p className="label">{note.label}</p>
                  <p className="mt-1.5 max-w-[28ch] text-line lg:text-[0.9375rem]">{note.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-10 font-display text-2xl font-medium uppercase tracking-[0.08em] text-mid md:text-3xl">
        {ui.role} · {ui.city}
      </p>

      <div className="mt-8 max-w-[70ch] border-t border-mid/50 pt-4">
        <p className="label">{ui.generalNotes}</p>
        <p className="mt-3">{about.intro}</p>
      </div>
    </Sheet>
  )
}
