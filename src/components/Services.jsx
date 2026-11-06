import { services } from '../content.js'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">01 &mdash; Services</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              Four jobs, taken off your desk.
            </h2>
          </div>
          <p className="lead max-w-[52ch] lg:col-span-5 lg:col-start-8">
            Pick one or take all four. Every arrangement starts with the same question: which hour of
            your week should never be yours again?
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-soft border border-hair bg-hair lg:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.name} className="group bg-paper p-6 transition-colors duration-300 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-sans text-[13px] tabular-nums text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-[13px] text-muted">{service.from}</span>
              </div>

              <h3 className="display mt-4 text-[clamp(1.35rem,2.1vw,1.75rem)] leading-tight">
                {service.name}
              </h3>
              <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6] text-body">{service.line}</p>

              <ul className="mt-5 space-y-2 border-t border-hair pt-5">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-snug text-muted">
                    <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 rounded-full bg-moss" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-[62ch] text-[14px] leading-relaxed text-muted">
          Hours are billed monthly, twenty minimum, and stop whenever you need them to. No retainer
          beyond the month you are in.
        </p>
      </div>
    </section>
  )
}
