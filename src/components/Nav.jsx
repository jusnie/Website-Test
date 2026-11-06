import { useEffect, useState } from 'react'
import { nav, profile } from '../content.js'

export default function Nav() {
  const [lifted, setLifted] = useState(false)

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b bg-paper/95 backdrop-blur-[2px] transition-colors duration-300 ease-calm ${
        lifted ? 'border-hair' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#main" className="group flex items-baseline gap-2.5">
          <span className="font-display text-[19px] leading-none tracking-[-0.03em]">
            {profile.name}
          </span>
          <span className="hidden text-[13px] text-muted sm:inline">{profile.role}</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-muted transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={profile.calendar} className="btn-line h-9 px-4 text-[14px]">
          Book a call
        </a>
      </div>
    </header>
  )
}
