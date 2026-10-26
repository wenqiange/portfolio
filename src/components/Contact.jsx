import { contactLinks } from "../data/content"
import Arrow from "./Arrow"
import { Dimensioned } from "./Dimension"
import Sheet from "./Sheet"

export default function Contact({ t }) {
  const { ui, contact } = t

  return (
    <Sheet id="contact" issue className="pb-[calc(var(--frame)+var(--pad)+5rem)] xl:min-h-svh">
      <Dimensioned fit>
        <h2
          id="contact-title"
          className="pencil-text font-display text-[clamp(4rem,16vw,13rem)] font-bold uppercase leading-[0.8]"
        >
          {contact.title}
        </h2>
      </Dimensioned>
      <div className="drawing-title-rule mt-5" />
      <p className="mt-8 max-w-[52ch] text-xl leading-relaxed">{contact.intro}</p>

      <ul className="mt-12 border-t-2 border-line">
        {contactLinks.map((link) => (
          <li key={link.label} className="border-b border-mid/50">
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-5 sm:flex-nowrap"
            >
              <span className="label w-full shrink-0 sm:w-20">{link.label}</span>
              <span aria-hidden="true" className="hidden flex-1 border-b-2 border-dotted border-mid/60 sm:block" />
              <span className="min-w-0 break-words font-display text-[clamp(1.25rem,5.2vw,3rem)] font-semibold leading-none transition-colors group-hover:text-mid">
                {link.handle}
              </span>
              <Arrow className="h-6 w-6 shrink-0 self-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ul>

      <p
        aria-hidden="true"
        className="stamp mt-14 inline-block px-5 py-3 font-display text-xl font-bold uppercase tracking-[0.14em] md:absolute md:bottom-[calc(var(--frame)+var(--pad))] md:left-[var(--pad)] md:mt-0"
      >
        {ui.issued} · W.H.
      </p>
    </Sheet>
  )
}
