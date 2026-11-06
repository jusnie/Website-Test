import { footer, profile } from '../content.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell pb-10 pt-20 md:pt-24">
        <div className="grid gap-10 border-b border-hair-inverse pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="text-[13px] uppercase tracking-[0.14em] text-paper/60">Closing</p>
            <h2 className="display mt-5 max-w-[16ch] text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04]">
              {footer.closing}
            </h2>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block font-display text-[clamp(1.1rem,2vw,1.5rem)] leading-none underline decoration-paper/30 underline-offset-[6px] transition-colors duration-200 hover:decoration-paper"
            >
              {profile.email}
            </a>

            <div className="mt-8">
              <a href={profile.calendar} className="btn-solid bg-paper text-ink hover:bg-paper/90">
                Book an intro call
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:col-start-9">
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="text-[12px] uppercase tracking-[0.12em] text-paper/65">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-paper/75 transition-colors duration-200 hover:text-paper"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-paper/60">
            {profile.name} &middot; {profile.role} &middot; {profile.location}
          </p>
          <nav aria-label="Elsewhere" className="flex items-center gap-6">
            <a href={profile.linkedin} className="text-[13px] text-paper/70 transition-colors hover:text-paper">
              LinkedIn
            </a>
            <a href={profile.calendar} className="text-[13px] text-paper/70 transition-colors hover:text-paper">
              Calendar
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[13px] text-paper/70 transition-colors hover:text-paper"
            >
              Email
            </a>
          </nav>
        </div>

        <p className="mt-6 text-[12px] leading-relaxed text-paper/60">
          &copy; {YEAR} {profile.name}. {footer.legal}
        </p>
      </div>
    </footer>
  )
}
