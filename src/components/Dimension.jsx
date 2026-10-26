import { useLayoutEffect, useRef, useState } from "react"

// Architectural dimension line: oblique ticks at both ends, measured value in the middle.
export function Dimension({ width, className = "mb-5" }) {
  return (
    <div aria-hidden="true" className={`relative h-6 ${className}`} style={{ width: width ?? "100%" }}>
      <div className="absolute inset-x-0 top-1/2 border-t border-line" />
      <div className="absolute left-0 top-0 h-full border-l border-line" />
      <div className="absolute right-0 top-0 h-full border-r border-line" />
      <span className="absolute left-0 top-1/2 h-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l-2 border-line" />
      <span className="absolute right-0 top-1/2 h-3 translate-x-1/2 -translate-y-1/2 rotate-45 border-l-2 border-line" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-2 font-display text-base tabular-nums text-mid">
        {width ? Math.round(width) : ""}
      </span>
    </div>
  )
}

// Puts a live dimension line over whatever it wraps.
export function Dimensioned({ fit = false, children }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(null)

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => setWidth(entry.target.offsetWidth))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Dimension width={width} className="mb-3" />
      <div ref={ref} className={fit ? "w-fit max-w-full" : ""}>
        {children}
      </div>
    </div>
  )
}
