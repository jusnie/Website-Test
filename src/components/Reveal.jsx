import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const reveal = () => {
      node.dataset.shown = 'true'
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
