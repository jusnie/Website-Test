import { cases } from '../content.js'
import Reveal from './Reveal.jsx'

export default function CaseNotes() {
  return (
    <section id="cases" className="scroll-mt-20 bg-surface">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">02 &mdash; {cases.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              {cases.title}
            </h2>
          </div>
          <p className="lead max-w-[52ch] lg:col-span-5 lg:col-start-8">{cases.note}</p>
        </div>

        <div className="mt-14">
          {cases.items.map((item, index) => (
            <Reveal key={item.client} delay={index * 70}>
              <article className="grid gap-8 border-t border-hair py-10 md:grid-cols-12 md:py-12">
                <div className="md:col-span-3">
                  <p className="text-[12px] uppercase tracking-[0.12em] text-muted">Client</p>
                  <p className="mt-2 max-w-[22ch] text-[15px] leading-snug text-ink">{item.client}</p>

                  <p className="display mt-8 text-[clamp(2rem,3vw,2.6rem)] leading-none">
                    {item.metric}
                  </p>
                  <p className="mt-2 max-w-[22ch] text-[12px] leading-snug text-muted">
                    {item.metricLabel}
                  </p>
                </div>

                <dl className="space-y-5 md:col-span-8 md:col-start-5">
                  <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <dt className="text-[12px] uppercase tracking-[0.12em] text-muted">Situation</dt>
                    <dd className="text-[16px] leading-[1.6] text-body">{item.situation}</dd>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <dt className="text-[12px] uppercase tracking-[0.12em] text-muted">What changed</dt>
                    <dd className="text-[16px] leading-[1.6] text-body">{item.action}</dd>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <dt className="text-[12px] uppercase tracking-[0.12em] text-muted">A quarter later</dt>
                    <dd className="text-[16px] leading-[1.6] text-ink">{item.result}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
