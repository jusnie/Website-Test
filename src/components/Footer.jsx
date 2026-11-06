import { footer, profile } from '../content.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="shell flex min-h-[70svh] flex-col justify-between pb-10 pt-20">
        <div>
          <p className="eyebrow">Closing</p>
          <h2 className="display mt-5 max-w-[18ch] text-[clamp(2.1rem,5vw,4rem)] leading-[1.04]">
            {footer.closing}
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="link-quiet mt-8 inline-block font-display text-[clamp(1.1rem,2vw,1.5rem)] leading-none"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-6 border-t border-hair pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-muted">
              {profile.name} &middot; {profile.role} &middot; {profile.location}
            </p>
            <nav aria-label="Elsewhere" className="flex items-center gap-6">
              <a href={profile.linkedin} className="text-[13px] text-muted transition-colors hover:text-ink">
                LinkedIn
              </a>
              <a href={profile.calendar} className="text-[13px] text-muted transition-colors hover:text-ink">
                Calendar
              </a>
              <a href={`mailto:${profile.email}`} className="text-[13px] text-muted transition-colors hover:text-ink">
                Email
              </a>
            </nav>
          </div>

          <p className="mt-6 text-[12px] leading-relaxed text-muted/80">
            {footer.credit} &copy; {YEAR} {profile.name}.
          </p>
        </div>
      </div>
    </footer>
  )
}
