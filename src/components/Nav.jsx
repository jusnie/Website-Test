import { useEffect, useState } from 'react'
import { nav, profile } from '../content.js'

export default function Nav() {
  const [lifted, setLifted] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((node) => node instanceof HTMLElement)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b bg-paper/95 backdrop-blur-[2px] transition-colors duration-300 ease-calm ${
        lifted ? 'border-hair' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#main" className="flex items-baseline gap-2.5">
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
              aria-current={active === item.href ? 'true' : undefined}
              className={`relative py-2 text-[14px] transition-colors duration-200 hover:text-ink ${
                active === item.href ? 'text-ink' : 'text-muted'
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-px h-px origin-left bg-moss transition-transform duration-300 ease-calm ${
                  active === item.href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.calendar} className="hidden h-9 px-4 text-[14px] btn-line sm:inline-flex">
            Book a call
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex size-9 items-center justify-center rounded-soft border border-hair md:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-200 ease-calm ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-200 ease-calm ${
                  open ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-hair bg-paper md:hidden"
      >
        <nav aria-label="Sections" className="shell flex flex-col py-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hair py-3 text-[15px] text-body last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.calendar}
            onClick={() => setOpen(false)}
            className="btn-solid mt-3 mb-2"
          >
            Book an intro call
          </a>
        </nav>
      </div>
    </header>
  )
}
