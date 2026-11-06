import { coverage } from '../content.js'

const span = (start, end) => ({
  left: `${(start / 24) * 100}%`,
  width: `${((end - start) / 24) * 100}%`,
})

export default function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-20 border-t border-hair bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow">03 &mdash; {coverage.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              {coverage.title}
            </h2>
            <p className="lead mt-5 max-w-[46ch]">{coverage.body}</p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-hair pt-5">
              {coverage.overlaps.map((item) => (
                <div key={item.label}>
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-muted">{item.label}</dt>
                  <dd className="mt-1 text-[15px] text-ink">{item.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-soft border border-hair bg-surface/40 p-6 sm:p-8">
              <div className="space-y-5">
                {coverage.zones.map((zone) => (
                  <div key={zone.city} className="grid grid-cols-[5rem_1fr] items-center gap-4">
                    <div>
                      <p className="text-[13px] leading-tight text-ink">{zone.city}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-muted">{zone.detail}</p>
                    </div>
                    <div className="relative h-6">
                      <span className="absolute inset-x-0 top-1/2 h-px bg-hair" aria-hidden="true" />
                      <span
                        aria-hidden="true"
                        className={`absolute top-1/2 h-2 -translate-y-1/2 rounded-full ${
                          zone.mine ? 'bg-moss' : 'bg-ink/20'
                        }`}
                        style={span(zone.start, zone.end)}
                      />
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-[5rem_1fr] gap-4">
                  <span />
                  <div className="flex justify-between border-t border-hair pt-2 text-[11px] tabular-nums text-muted">
                    {coverage.axis.map((tick) => (
                      <span key={tick}>{tick}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-6 flex items-center gap-2 text-[12px] text-muted">
                <span aria-hidden="true" className="inline-block h-2 w-4 rounded-full bg-moss" />
                My working hours &mdash; all bars in GMT
              </p>
            </div>

            <p className="mt-4 max-w-[52ch] text-[13px] leading-relaxed text-muted">{coverage.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
