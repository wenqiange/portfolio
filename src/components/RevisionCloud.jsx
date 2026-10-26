import { useLayoutEffect, useRef, useState } from "react"

const PAD = 20

// Scalloped outline walked clockwise so every arc bulges outward.
function cloudPath(w, h) {
  const x0 = PAD - 4
  const y0 = PAD - 4
  const width = w + 8
  const height = h + 8
  const edge = (length, dx, dy) => {
    const count = Math.max(1, Math.round(length / 28))
    const step = length / count
    const arc = `a ${step / 2} ${step / 2} 0 0 1 ${dx * step} ${dy * step} `
    return arc.repeat(count)
  }
  return `M ${x0} ${y0} ${edge(width, 1, 0)}${edge(height, 0, 1)}${edge(width, -1, 0)}${edge(height, 0, -1)}Z`
}

export default function RevisionCloud({ active, children }) {
  const ref = useRef(null)
  const [size, setSize] = useState(null)

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { offsetWidth: w, offsetHeight: h } = entry.target
      setSize({ w, h })
    })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative">
      {children}
      {size && (
        <svg
          aria-hidden="true"
          className="cloud pointer-events-none absolute"
          data-active={active}
          style={{ left: -PAD, top: -PAD }}
          width={size.w + PAD * 2}
          height={size.h + PAD * 2}
        >
          <path pathLength="1" d={cloudPath(size.w, size.h)} />
        </svg>
      )}
    </div>
  )
}
