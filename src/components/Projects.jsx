import { useState } from "react"
import { projects } from "../data/content"
import Arrow from "./Arrow"
import CalloutBubble from "./CalloutBubble"
import DetailDiagram from "./DetailDiagram"
import DrawingFrame from "./DrawingFrame"
import RevisionCloud from "./RevisionCloud"
import Sheet from "./Sheet"

function Detail({ project, index, copy, t, open }) {
  const { ui } = t
  const title = `${ui.detail} ${index + 1} — ${project.name}`

  return (
    <RevisionCloud active={open}>
      {/* Ink the drawing each time the detail opens. */}
      <figure data-state={open ? "inked" : "pencil"} className="border-t border-mid/40 pt-6">
        <DetailDiagram id={project.id} lang={t.lang} title={title} />
        <figcaption className="mt-6 flex items-center gap-3">
          <CalloutBubble top={index + 1} bottom="2" className="h-10 w-10 shrink-0 text-line" />
          <span className="font-display text-xl font-semibold uppercase leading-none">{title}</span>
          <span className="label ml-auto">{ui.scale}</span>
        </figcaption>
      </figure>
      <div className="mt-8 grid gap-10 border-t border-mid/40 py-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-12">
        <div>
          <p className="max-w-[60ch] text-lg leading-relaxed text-line md:text-xl">{copy.description}</p>
          {copy.experience.length > 0 && (
            <>
              <p className="label mt-10">{ui.scope}</p>
              <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {copy.experience.map((item, index) => (
                  <li key={item} className="flex gap-3 border-b border-mid/25 pb-2">
                    <span className="w-5 shrink-0 tabular-nums text-mid">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>

        <div className="space-y-8">
          <DrawingFrame
            src={project.screenshot}
            alt={project.name}
            pendingLabel={`${ui.screenshotPending} · ${project.name}`}
            className="aspect-[16/10]"
          />

          <table className="w-full border-collapse border-2 border-line text-left">
            <caption className="label pb-2 text-left">{ui.bom}</caption>
            <thead>
              <tr className="border-b-2 border-line">
                <th scope="col" className="label w-14 border-r border-mid/50 px-3 py-2">{ui.item}</th>
                <th scope="col" className="label px-3 py-2">{ui.part}</th>
              </tr>
            </thead>
            <tbody>
              {project.stack.map((part, index) => (
                <tr key={part} className="border-b border-mid/30 last:border-0">
                  <td className="border-r border-mid/50 px-3 py-1.5 tabular-nums text-mid">{index + 1}</td>
                  <td className="px-3 py-1.5">{part}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <p className="label">{ui.refs}</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-line px-4 py-2 font-display text-lg font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-line hover:text-paper"
                  >
                    {link.label}
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevisionCloud>
  )
}

export default function Projects({ t }) {
  const { ui } = t
  const [openId, setOpenId] = useState(projects[0].id)

  return (
    <Sheet
      id="projects"
      title={t.sheets.projects}
      scale={ui.scale}
      rail={
        <div>
          <p className="label">{ui.generalNotes}</p>
          <p className="mt-3 max-w-[60ch]">{t.projects.intro}</p>
        </div>
      }
    >
      <ol className="border-b-2 border-line">
        {projects.map((project, index) => {
          const open = openId === project.id
          return (
            <li key={project.id} className="border-t-2 border-line">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`dwg-${project.id}`}
                  onClick={() => setOpenId(open ? null : project.id)}
                  className="group grid w-full grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-x-4 py-5 text-left md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,16rem)_auto] md:py-6"
                >
                  <CalloutBubble top={index + 1} bottom="2" className={`h-11 w-11 transition-colors md:h-12 md:w-12 ${open ? "text-line" : "text-mid"}`} />
                  <span
                    className={`font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] transition-colors duration-300 ${
                      open ? "text-line" : "text-mid group-hover:text-line"
                    }`}
                  >
                    {project.name}
                  </span>
                  <span className="hidden truncate text-right text-mid md:block">{project.stack.slice(0, 3).join(" · ")}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className={`h-7 w-7 transition-transform duration-500 ${open ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3v18M3 12h18" />
                  </svg>
                  <span className="sr-only">{open ? ui.close : ui.open}</span>
                </button>
              </h3>
              <div id={`dwg-${project.id}`} className="detail" data-open={open} inert={!open}>
                {/* Gutter keeps the revision cloud inside the clipping box. */}
                <div className="-mx-5 overflow-hidden px-5">
                  <div className="pb-10 pt-6">
                    <Detail project={project} index={index} copy={t.projects.items[project.id]} t={t} open={open} />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </Sheet>
  )
}
