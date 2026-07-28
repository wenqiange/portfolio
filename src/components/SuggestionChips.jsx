export default function SuggestionChips({ options, activeId, onSelect, disabled = false }) {
  const baseClasses =
    "rounded-xl border px-3 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-70"
  const activeClasses =
    "border-[#b97338] bg-[#f2e9dc] text-[#3b2f23] dark:bg-[#3b342d] dark:text-[#f7e8d8]"
  const idleClasses =
    "border-[#e7dfd3] bg-[#f5eee2] text-[#4a3d31] hover:bg-[#eee5d8] dark:border-[#38332e] dark:bg-[#302b26] dark:text-[#e7ddd2] dark:hover:bg-[#3b342d]"

  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(option.id)}
          className={`${baseClasses} ${activeId === option.id ? activeClasses : idleClasses}`}
        >
          {option.title}
        </button>
      ))}
    </div>
  )
}
