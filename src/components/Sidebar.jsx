export default function Sidebar({
  options,
  activeId,
  lang,
  isOpen,
  onSelect,
  onReset,
  onChangeLang,
  onClose,
  uiText,
}) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 flex w-[min(82vw,320px)] flex-col gap-4 border-r border-[#e7dfd3] bg-[#fcfaf6] p-4 transition-transform duration-200 dark:border-[#38332e] dark:bg-[#22201d] md:sticky md:top-0 md:h-screen md:w-[300px] md:self-start md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-[105%]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="m-0 text-[0.92rem] font-semibold tracking-[0.01em]">{uiText.appTitle}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#e7dfd3] bg-[#f5f0e8] text-sm transition hover:bg-[#eee5d8] dark:border-[#38332e] dark:bg-[#2d2823] dark:hover:bg-[#3a342e] md:hidden"
          aria-label={uiText.closeMenu}
        >
          ✕
        </button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="rounded-xl border border-[#e7dfd3] bg-[#f5f0e8] px-4 py-3 text-left text-sm font-semibold transition hover:bg-[#eee5d8] dark:border-[#38332e] dark:bg-[#2d2823] dark:hover:bg-[#3a342e]"
      >
        {uiText.newChat}
      </button>

      <nav className="flex flex-col gap-2" aria-label={uiText.categoriesLabel}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
              activeId === option.id
                ? "border-[#b97338] bg-[#f2e9dc] dark:bg-[#3b342d]"
                : "border-[#e7dfd3] bg-transparent hover:bg-[#eee5d8] dark:border-[#38332e] dark:hover:bg-[#302b26]"
            }`}
          >
            {option.title}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div
          className="inline-flex w-fit rounded-full border border-[#e7dfd3] bg-[#f5f0e8] p-1 dark:border-[#38332e] dark:bg-[#2d2823]"
          role="group"
          aria-label={uiText.languageSelector}
        >
          {["es", "en"].map((value) => {
            const isActive = lang === value

            return (
              <button
                key={value}
                type="button"
                onClick={() => onChangeLang(value)}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold uppercase transition ${
                  isActive
                    ? "bg-[#b97338] text-white"
                    : "text-[#5f554c] hover:bg-[#eee5d8] dark:text-[#d5cbc1] dark:hover:bg-[#3a342e]"
                }`}
                aria-pressed={isActive}
              >
                {value}
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
