export default function Sidebar({
  options,
  activeId,
  isOpen,
  onSelect,
  onReset,
  onToggleTheme,
  onClose,
}) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 flex w-[min(82vw,320px)] flex-col gap-4 border-r border-[#e7dfd3] bg-[#fcfaf6] p-4 transition-transform duration-200 dark:border-[#38332e] dark:bg-[#22201d] md:sticky md:top-0 md:h-screen md:w-[300px] md:self-start md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-[105%]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="m-0 text-[0.92rem] font-semibold tracking-[0.01em]">Wen Portfolio Chat</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#e7dfd3] bg-[#f5f0e8] text-sm transition hover:bg-[#eee5d8] dark:border-[#38332e] dark:bg-[#2d2823] dark:hover:bg-[#3a342e] md:hidden"
          aria-label="Cerrar menu"
        >
          ✕
        </button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="rounded-xl border border-[#e7dfd3] bg-[#f5f0e8] px-4 py-3 text-left text-sm font-semibold transition hover:bg-[#eee5d8] dark:border-[#38332e] dark:bg-[#2d2823] dark:hover:bg-[#3a342e]"
      >
        + Nuevo chat
      </button>

      <nav className="flex flex-col gap-2" aria-label="Categorias del portfolio">
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

      <button
        type="button"
        onClick={onToggleTheme}
        className="mt-auto rounded-xl border border-[#e7dfd3] bg-[#f5f0e8] px-4 py-3 text-left text-sm font-semibold transition hover:bg-[#eee5d8] dark:border-[#38332e] dark:bg-[#2d2823] dark:hover:bg-[#3a342e]"
      >
        Alternar tema
      </button>
    </aside>
  )
}
