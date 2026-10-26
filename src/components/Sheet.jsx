import { useEffect, useRef, useState } from "react"

const zoneLetters = ["A", "B", "C", "D", "E", "F"]
const zoneNumbers = ["1", "2", "3", "4"]

// Sheets start in pencil and ink in once they scroll into view; `issue` adds the final stamp state.
export default function Sheet({ id, title, scale, rail, issue = false, className = "", children }) {
  const ref = useRef(null)
  const [state, setState] = useState("pencil")

  useEffect(() => {
    const done = issue ? "issued" : "inked"
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState(done)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(done)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -25% 0px" }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [issue])

  return (
    <section
      id={id}
      ref={ref}
      data-state={state}
      aria-labelledby={`${id}-title`}
      className={`sheet ${className}`}
    >
      <div className="sheet-frame" aria-hidden="true">
        <div className="zones zones-top">
          {zoneLetters.map((zone) => (
            <span key={zone}>{zone}</span>
          ))}
        </div>
        <div className="zones zones-side">
          {zoneNumbers.map((zone) => (
            <span key={zone}>{zone}</span>
          ))}
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_var(--rail)] xl:gap-14">
        <div className="min-w-0">
          {title && (
            <header className="mb-12 md:mb-16">
              <h2
                id={`${id}-title`}
                className="pencil-text font-display text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[0.85]"
              >
                {title}
              </h2>
              <div className="drawing-title-rule mt-4" />
              <p className="label mt-2 text-right">{scale}</p>
            </header>
          )}
          {children}
        </div>
        {rail && <aside className="mt-12 xl:mt-0">{rail}</aside>}
      </div>
    </section>
  )
}
