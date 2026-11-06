import { tools } from '../content.js'

export default function Tools() {
  return (
    <section className="bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">07 &mdash; The stack</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              Tools I already work in.
            </h2>
          </div>
          <p className="lead max-w-[52ch] lg:col-span-5 lg:col-start-8">
            Yours, not mine. I take a seat inside the accounts you already pay for, so the history stays
            with the company.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-soft border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <li key={tool.name} className="bg-paper px-5 py-5">
              <p className="text-[15px] font-medium leading-tight text-ink">{tool.name}</p>
              <p className="mt-1 text-[13px] leading-snug text-muted">{tool.use}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
