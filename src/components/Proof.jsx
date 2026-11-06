import { proof } from '../content.js'

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-20 bg-ink text-paper">
      <div className="shell py-16 md:py-24">
        <p className="text-[13px] uppercase tracking-[0.14em] text-paper/65">Proof</p>

        <blockquote className="mt-8 max-w-[26ch] font-display text-[clamp(1.7rem,3.6vw,3.1rem)] leading-[1.16] tracking-[-0.02em] sm:max-w-[34ch]">
          &ldquo;{proof.quote}&rdquo;
        </blockquote>

        <figcaption className="mt-8 text-[14px] text-paper/60">
          {proof.attribution}, {proof.company}
        </figcaption>

        <dl className="mt-16 grid gap-8 border-t border-hair-inverse pt-8 sm:grid-cols-3 sm:gap-6">
          {proof.figures.map((figure) => (
            <div key={figure.label}>
              <dt className="sr-only">{figure.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-none">
                  {figure.value}
                </span>
                <span className="mt-3 block max-w-[26ch] text-[14px] leading-snug text-paper/60">
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
