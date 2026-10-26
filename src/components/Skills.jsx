import { skillGroups } from "../data/content"
import Sheet from "./Sheet"

export default function Skills({ t }) {
  const { ui, skills } = t

  return (
    <Sheet
      id="skills"
      title={t.sheets.skills}
      scale={ui.scale}
      rail={
        <div>
          <p className="label">{ui.generalNotes}</p>
          <p className="mt-3 max-w-[60ch]">{skills.intro}</p>
        </div>
      }
    >
      <h3 className="label">{skills.coreTitle}</h3>
      <ul className="mt-4 grid border-t-2 border-line md:grid-cols-2 md:gap-x-10">
        {skills.core.map((skill) => (
          <li
            key={skill}
            className="pencil-text border-b border-mid/40 py-3 font-display text-[clamp(1.375rem,2.4vw,2rem)] font-semibold uppercase leading-tight"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {Object.entries(skillGroups).map(([key, items]) => (
          <section key={key} aria-labelledby={`schedule-${key}`}>
            <h3 id={`schedule-${key}`} className="label mb-2">
              {skills.groups[key]}
            </h3>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] border-l-2 border-t-2 border-line">
              {items.map((item) => (
                <li key={item} className="border-b-2 border-r-2 border-line break-words px-3 py-2.5 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Sheet>
  )
}
