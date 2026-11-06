import { process } from '../content.js'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-surface">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">How we work</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              Two weeks to know if it fits.
            </h2>
          </div>
          <p className="lead max-w-[52ch] lg:col-span-5 lg:col-start-8">
            No long onboarding project. You hand over one real thing on the first morning and we find
            out quickly whether the arrangement earns its keep.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-soft border border-hair bg-hair md:grid-cols-3">
          {process.map((item) => (
            <li key={item.step} className="bg-paper p-7 md:p-8">
              <span className="font-sans text-[13px] tabular-nums text-moss">{item.step}</span>
              <h3 className="display mt-4 text-[22px] leading-tight">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-body">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
