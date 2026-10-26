import { useEffect, useState } from "react"
import { flushSync } from "react-dom"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import TitleBlock from "./components/TitleBlock"
import { text } from "./data/content"

const sheetIds = ["about", "projects", "experience", "skills", "contact"]

function App() {
  const [lang, setLang] = useState("es")
  const [isDark, setIsDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [active, setActive] = useState(sheetIds[0])
  const t = text[lang]

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description)
  }, [lang, t])

  // The sheet crossing the middle of the viewport is the active one in the title block.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sheetIds.forEach((id) => observer.observe(document.getElementById(id)))
    return () => observer.disconnect()
  }, [])

  const changeLang = (next) => {
    if (next === lang) return
    const apply = () => flushSync(() => setLang(next))
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (document.startViewTransition && !reduced) {
      document.startViewTransition(apply)
    } else {
      apply()
    }
  }

  return (
    <>
      <main className="pb-28 lg:pb-14 xl:pb-0">
        <Hero t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <TitleBlock
        t={t}
        sheetIds={sheetIds}
        active={active}
        lang={lang}
        onLang={changeLang}
        isDark={isDark}
        onTheme={setIsDark}
      />
    </>
  )
}

export default App
