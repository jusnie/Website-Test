import { contact, profile } from '../content.js'

const hrefFor = (option) =>
  option.href === 'calendar' ? profile.calendar : `mailto:${profile.email}`

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow">10 &mdash; Start here</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              {contact.title}
            </h2>
            <p className="lead mt-5 max-w-[46ch]">{contact.note}</p>

            <dl className="mt-10 border-t border-hair">
              {contact.details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-baseline justify-between gap-6 border-b border-hair py-3.5"
                >
                  <dt className="text-[13px] uppercase tracking-[0.12em] text-muted">
                    {detail.label}
                  </dt>
                  <dd className="text-right text-[15px] text-ink">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="grid gap-px overflow-hidden rounded-soft border border-hair bg-hair">
              {contact.options.map((option) => (
                <li key={option.label} className="bg-paper">
                  <a
                    href={hrefFor(option)}
                    className="group flex items-center justify-between gap-6 px-6 py-7 transition-colors duration-200 hover:bg-surface/70"
                  >
                    <span>
                      <span className="block font-display text-[21px] leading-tight text-ink">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-[14px] text-muted">{option.value}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[18px] text-muted transition-transform duration-200 ease-calm group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[14px] leading-relaxed text-muted">
              Prefer to check first?{' '}
              <a href={profile.linkedin} className="link-quiet">
                My LinkedIn
              </a>{' '}
              has the last six years of it, and the same email reaches me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
