import { faq } from '../content.js'

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-hair bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              The four I get asked most.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {faq.map((item) => (
              <details key={item.q} className="group border-t border-hair last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors duration-200 hover:text-moss [&::-webkit-details-marker]:hidden">
                  <span className="text-[17px] leading-snug text-ink group-hover:text-moss">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[18px] leading-none text-muted transition-transform duration-300 ease-calm group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 pr-8 text-[15px] leading-[1.65] text-ink/75">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
