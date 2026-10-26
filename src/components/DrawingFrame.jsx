// An image in a drawn frame; with no image it shows the drafting convention for "to be supplied": a crossed box.
export default function DrawingFrame({ src, alt, pendingLabel, caption, className = "" }) {
  return (
    <figure className={className}>
      <div className="relative h-full w-full border-2 border-line bg-paper-deep/60 p-1.5">
        <div className="relative h-full w-full overflow-hidden border border-mid/50">
          {src ? (
            <img src={`${import.meta.env.BASE_URL}${src}`} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          ) : (
            <>
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgb(var(--mid))" strokeWidth="1" strokeDasharray="4 5" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgb(var(--mid))" strokeWidth="1" strokeDasharray="4 5" />
              </svg>
              <p className="label absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-paper px-3 py-1.5 text-line">
                {pendingLabel}
              </p>
            </>
          )}
        </div>
      </div>
      {caption && <figcaption className="label mt-2">{caption}</figcaption>}
    </figure>
  )
}
