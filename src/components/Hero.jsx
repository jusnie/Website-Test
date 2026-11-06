import { lazy, Suspense } from 'react'
import { hero, profile } from '../content.js'

const HeroScene = lazy(() => import('../three/HeroScene.jsx'))

function resolve(href) {
  if (href === 'calendar') return profile.calendar
  if (href === 'mailto') return `mailto:${profile.email}`
  return href
}

function ScenePlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative h-2/3 w-2/3">
        <div className="absolute inset-0 rotate-[6deg] rounded-[10px] border border-hair bg-[#f8f6f3]" />
        <div className="absolute inset-x-6 inset-y-10 -rotate-[4deg] rounded-[10px] border border-hair bg-[#e7e3dc]" />
        <div className="absolute bottom-10 left-8 size-16 rotate-[12deg] rounded-[10px] bg-moss" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-16">
      <div className="shell grid grid-cols-1 items-start gap-y-10 pb-16 pt-10 lg:grid-cols-12 lg:gap-x-8 lg:pb-[64px] lg:pt-[120px]">
        <div className="lg:col-span-5">
          <p className="flex items-center gap-2.5 text-[13px] font-medium text-muted">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="display mt-5 text-[clamp(2.4rem,4.9vw,4.5rem)] leading-[1.02] text-ink">
            {hero.title}
          </h1>

          <p className="lead mt-6 max-w-[44ch]">{hero.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-solid" href={resolve(hero.primaryCta.href)}>
              {hero.primaryCta.label}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a className="btn-line" href={resolve(hero.secondaryCta.href)}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-hair pt-6">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[12px] uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
                <dd className="mt-1.5 text-[15px] leading-snug text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[628/700] w-full overflow-hidden rounded-[14px] border border-hair bg-surface sm:aspect-[628/660] lg:aspect-[628/716]">
            <Suspense fallback={<ScenePlaceholder />}>
              <HeroScene />
            </Suspense>

            <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-soft border border-hair bg-paper/90 px-3.5 py-2.5 backdrop-blur-[1px]">
              <span className="status-dot" aria-hidden="true" />
              <span className="text-[13px] leading-none text-ink">Next opening &mdash; February</span>
            </div>
          </div>
          <p className="mt-3 text-[12px] text-muted">
            A week&rsquo;s papers, kept in order. Move your cursor across the frame.
          </p>
        </div>
      </div>
    </section>
  )
}
