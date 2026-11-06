import { rate } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Rate() {
  return (
    <section id="rate" className="scroll-mt-20 bg-surface">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow">08 &mdash; {rate.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              {rate.title}
            </h2>

            <p className="mt-8 flex items-baseline gap-2">
              <span className="display text-[clamp(2.6rem,4.4vw,3.6rem)] leading-none">
                {rate.headline.value}
              </span>
              <span className="text-[15px] text-muted">{rate.headline.unit}</span>
            </p>

            <p className="lead mt-5 max-w-[44ch]">{rate.body}</p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <dl className="border-t border-hair">
                {rate.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-hair py-3.5"
                  >
                    <dt className="text-[13px] uppercase tracking-[0.12em] text-muted">{row.label}</dt>
                    <dd className="text-right text-[15px] text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={80}>
              <h3 className="mt-10 text-[13px] uppercase tracking-[0.12em] text-muted">
                Included every month
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {rate.included.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-body">
                    <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-moss" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
