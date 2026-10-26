// Drafting leader arrowhead, used for outbound links.
export default function Arrow({ className = "h-4 w-4" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 13 13 3M6 3h7v7" />
    </svg>
  )
}
