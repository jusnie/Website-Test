import { services } from '../content.js'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-hair bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">What I handle</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              Four jobs, taken off your desk.
            </h2>
          </div>
          <p className="lead max-w-[52ch] lg:col-span-5 lg:col-start-8">
            Pick one or take all four. Every arrangement starts with the same question: which hour of your
            week should never be yours again?
          </p>
        </div>

        <ul className="mt-14 border-b border-hair">
          {services.map((service, index) => (
            <li key={service.name} className="group border-t border-hair">
              <div className="grid grid-cols-1 items-baseline gap-x-8 gap-y-3 py-7 transition-transform duration-300 ease-calm group-hover:-translate-y-0.5 md:grid-cols-12 md:py-8">
                <span className="font-sans text-[13px] tabular-nums text-muted md:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="display text-[clamp(1.35rem,2.1vw,1.75rem)] leading-tight md:col-span-4">
                  {service.name}
                </h3>

                <div className="md:col-span-5">
                  <p className="text-[16px] leading-[1.55] text-body">{service.line}</p>
                  <p className="mt-1.5 text-[14px] text-muted">{service.detail}</p>
                </div>

                <p className="font-sans text-[14px] text-muted md:col-span-2 md:text-right">
                  {service.from}
                </p>
              </div>
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
