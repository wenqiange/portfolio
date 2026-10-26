function Toggle({ label, caption, options, className = "" }) {
  return (
    <div role="group" aria-label={label} className={`seg flex items-center gap-1.5 px-3 py-2 xl:flex-col xl:items-start ${className}`}>
      <span className="label hidden xl:block">{caption}</span>
      <span className="flex border border-line">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            aria-pressed={option.pressed}
            onClick={option.onClick}
            className="px-2.5 py-1 font-display text-base font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-line/15"
          >
            {option.label}
          </button>
        ))}
      </span>
    </div>
  )
}

// The drawing's title block is the site navigation: a corner panel on wide screens, a bottom strip elsewhere.
export default function TitleBlock({ t, sheetIds, active, lang, onLang, isDark, onTheme }) {
  const { ui } = t
  const activeIndex = sheetIds.indexOf(active)

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-line bg-paper xl:inset-x-auto xl:bottom-[calc(var(--frame)+1rem)] xl:right-[var(--pad)] xl:block xl:w-[var(--rail)] xl:border-2 xl:shadow-[0_18px_40px_-12px_rgb(0_0_0/0.45)]">
      <div className="hidden border-b-2 border-line px-4 py-3 xl:block">
        <p className="font-display text-[1.75rem] font-bold uppercase leading-none">Wenqiang He</p>
        <p className="label mt-1.5">
          {ui.role} · {ui.city}
        </p>
      </div>

      <nav aria-label={ui.navLabel} className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none]">
        <ol className="flex xl:grid xl:grid-cols-2">
          {sheetIds.map((id, index) => (
            <li key={id} className="shrink-0 xl:border-b xl:border-mid/50 xl:odd:border-r">
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className="flex items-baseline gap-2 whitespace-nowrap px-3 py-3 no-underline transition-colors hover:bg-line/15 aria-[current=location]:bg-line aria-[current=location]:text-paper xl:py-2"
              >
                <span className="text-xs tabular-nums opacity-80">0{index + 1}</span>
                <span className="font-display text-lg font-semibold uppercase leading-none">{t.nav[id]}</span>
              </a>
            </li>
          ))}
          <li className="hidden border-b border-mid/50 xl:block">
            <p className="label px-3 py-2.5">
              {ui.sheet} {activeIndex + 1} {ui.of} {sheetIds.length}
            </p>
          </li>
        </ol>
      </nav>

      <div className="flex shrink-0 border-l-2 border-line xl:grid xl:grid-cols-2 xl:border-l-0">
        <Toggle
          label={ui.languageLabel}
          caption={ui.revision}
          className="xl:border-r xl:border-mid/50"
          options={[
            { label: "ES", pressed: lang === "es", onClick: () => onLang("es") },
            { label: "EN", pressed: lang === "en", onClick: () => onLang("en") },
          ]}
        />
        <Toggle
          label={ui.themeLabel}
          caption={ui.print}
          className="hidden xl:flex"
          options={[
            { label: ui.day, pressed: !isDark, onClick: () => onTheme(false) },
            { label: ui.night, pressed: isDark, onClick: () => onTheme(true) },
          ]}
        />
      </div>
    </div>
  )
}
