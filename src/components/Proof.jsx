import { proofFigures, testimonials } from '../content.js'

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-20 bg-ink text-paper">
      <div className="shell py-16 md:py-24">
        <p className="text-[13px] uppercase tracking-[0.14em] text-paper/65">06 &mdash; Proof</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {testimonials.map((item, index) => (
            <figure
              key={item.quote}
              className={`lg:col-span-5 ${index === 1 ? 'lg:col-start-8' : ''}`}
            >
              <blockquote className="font-display text-[clamp(1.35rem,2.3vw,1.9rem)] leading-[1.3] tracking-[-0.015em]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[14px] text-paper/70">
                {item.name} &middot; {item.role}
              </figcaption>
            </figure>
          ))}
        </div>

        <dl className="mt-16 grid gap-8 border-t border-hair-inverse pt-8 sm:grid-cols-3 sm:gap-6">
          {proofFigures.map((figure) => (
            <div key={figure.label}>
              <dt className="sr-only">{figure.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-none">
                  {figure.value}
                </span>
                <span className="mt-3 block max-w-[26ch] text-[14px] leading-snug text-paper/70">
                  {figure.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
