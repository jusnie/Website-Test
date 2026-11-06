import { week } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Week() {
  return (
    <section id="week" className="scroll-mt-20 bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">04 &mdash; {week.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              {week.title}
            </h2>
          </div>
          <p className="lead max-w-[52ch] lg:col-span-5 lg:col-start-8">{week.note}</p>
        </div>

        <div className="mt-14 border-t border-hair">
          {week.days.map((day, index) => (
            <Reveal key={day.day} delay={index * 60}>
              <article className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-hair py-7 md:grid-cols-12 md:py-8">
                <div className="md:col-span-3">
                  <h3 className="display text-[clamp(1.2rem,1.7vw,1.5rem)] leading-none">
                    {day.day}
                  </h3>
                  <p className="mt-2 text-[13px] uppercase tracking-[0.12em] text-muted">
                    {day.theme}
                  </p>
                </div>

                <ul className="space-y-2 md:col-span-8 md:col-start-5">
                  {day.lines.map((line) => (
                    <li key={line} className="flex gap-3 text-[15px] leading-[1.55] text-body">
                      <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-hair" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
