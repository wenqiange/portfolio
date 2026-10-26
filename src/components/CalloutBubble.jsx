// Drafting detail callout: detail number over the sheet it is drawn on.
export default function CalloutBubble({ top, bottom, className = "h-12 w-12" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className}>
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 24 H46" stroke="currentColor" strokeWidth="1" />
      <text x="24" y="19" textAnchor="middle" className="fill-current font-display text-[15px] font-bold">
        {top}
      </text>
      <text x="24" y="39" textAnchor="middle" className="fill-current font-display text-[12px] font-semibold opacity-80">
        {bottom}
      </text>
    </svg>
  )
}
