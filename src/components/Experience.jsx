import Sheet from "./Sheet"

// Laid out as a drawing's revision table: newest revision on top.
export default function Experience({ t }) {
  const { ui, experience } = t
  const revisions = ["B", "A"]

  return (
    <Sheet
      id="experience"
      title={t.sheets.experience}
      scale={ui.scale}
      rail={
        <div>
          <p className="label">{ui.generalNotes}</p>
          <p className="mt-3 max-w-[60ch]">{experience.intro}</p>
        </div>
      }
    >
      <div className="border-2 border-line">
        <div className="label hidden grid-cols-[5rem_minmax(0,1fr)_8rem] border-b-2 border-line md:grid">
          <span className="border-r border-mid/50 px-4 py-2">{ui.revision}</span>
          <span className="px-4 py-2">{ui.description}</span>
          <span className="border-l border-mid/50 px-4 py-2">{ui.status}</span>
        </div>
        {experience.items.map((item, index) => (
          <article
            key={item.title}
            className="grid grid-cols-[3.5rem_minmax(0,1fr)] border-b border-mid/40 last:border-0 md:grid-cols-[5rem_minmax(0,1fr)_8rem]"
          >
            <span className="border-r border-mid/50 px-4 py-6 font-display text-4xl font-bold text-mid">{revisions[index]}</span>
            <div className="px-4 py-6 md:px-6">
              <h3 className="pencil-text font-display text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-[0.95]">
                {item.title}
                <span className="text-mid"> · {item.org}</span>
              </h3>
              <p className="label mt-2 md:hidden">{index === 0 ? ui.current : ui.previous}</p>
              <ul className="mt-5 max-w-[65ch] space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-mid" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="label hidden border-l border-mid/50 px-4 py-6 md:block">
              {index === 0 ? ui.current : ui.previous}
            </p>
          </article>
        ))}
      </div>
    </Sheet>
  )
}
