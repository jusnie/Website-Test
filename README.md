# Ava Rivera — executive VA portfolio

A one-page portfolio for a virtual assistant, built with **React 19 + Vite + Tailwind + three.js**,
designed with **taste-skill** and gated by **Impeccable** (design detector) and **aislop** (code detector).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

## What's here

| Path | What it is |
|---|---|
| `src/content.js` | **Every word, price and link on the page.** All identity copy is placeholder — swap it here and nowhere else. |
| `src/components/` | One file per section: Nav, Hero, Services, Process, Proof, Tools, Faq, Contact, Footer. |
| `src/three/HeroScene.jsx` | The WebGL hero: six drifting paper sheets, soft shadows, pointer parallax. Raw three.js, lazy-loaded, static fallback when WebGL is absent. |
| `src/index.css` | Tailwind layers, display/lead/button primitives, reduced-motion handling. |
| `tailwind.config.js` | The dealt palette and type stack as tokens. |
| `PRODUCT.md` / `DESIGN.md` | Impeccable's context files: product truth and the visual system. |

Sections, in order (each numbered in the eyebrow): hero · **01 services** · **02 case notes** ·
**03 coverage** · 04 a week · 05 how we work · 06 proof · 07 the stack · 08 rate · 09 questions ·
10 start here · **dark closing footer**.

The coverage block draws the three time zones as a 24-hour GMT chart, with her working hours in moss
and the London/New York overlap called out in hours; the case notes run situation → what changed →
the number a quarter later.

## Design decisions

Dealt by taste-skill for page kind `service`:

- **Palette — three stones:** paper `#eeecea`, surface `#e4e1dd`, ink `#333231`, muted `#625f5b`, moss `#5c6b54`, hairlines at 16% ink.
- **Type:** Literata (display, 400, `-0.026em`) over Figtree (text), both self-hosted through `@fontsource-variable/*` because the Google Fonts CDN is unreachable here.
- **Hero:** the dealt split layout — copy in five columns, the visual in six, frame at 628×716.
- **Rhythm:** paper → paper → surface → **one** dark ink band (proof) → paper → surface → paper closing footer.

## The three.js scene

Six extruded, bevel-edged sheets in paper tones with one moss and one ink card, drifting over a
shadow plane. Hemisphere fill plus a warm key light casting 1024px soft shadows; 32° perspective
camera refitted on resize; pointer parallax damped at 0.045; DPR capped at 2; rendering paused when
the tab is hidden; geometries, materials and renderer disposed on unmount. The chunk is split out
(`React.lazy`) so the page paints before three.js arrives, and a CSS composition stands in when
WebGL is unavailable or `prefers-reduced-motion` is set (single static frame).

## Interaction detail

- Scroll reveal on the week and rate blocks (IntersectionObserver, CSS-driven, disabled under
  `prefers-reduced-motion`; no JS animation frames).
- Nav underlines track the section in view, and the menu collapses to a real disclosure button on
  mobile with Escape handling and `aria-expanded`.
- The 3D sheets fly in with a 90ms stagger per sheet, fade from the camera and settle into their
  drift; scroll adds a slow tilt to the whole stack.
- Body copy uses a solid `#45433f` rather than ink at 75% opacity — measured 7.61:1 on paper,
  where the opacity mix landed near the 4.5:1 line.

## Quality gates

```bash
./.claude/skills/impeccable/scripts/impeccable detect src dist/index.html   # design anti-patterns
aislop scan                                                                # code slop, 0–100
```

Current state: **Impeccable — 0 findings**, **aislop — 100/100, 0 warnings**.
Impeccable's URL scan and element rules (contrast, tiny text) need Chrome, which this sandbox
cannot install; run them on a normal machine before launch.

## Before this goes live

Everything in `PRODUCT.md` under *Open decisions* — the name, quote, figures, prices, email,
calendar and LinkedIn links are placeholders from `src/content.js`. Real photography would
strengthen the proof band.

---

## Tooling in this workspace

The three tools the site was built with are vendored (git-ignored) and linked for agent use:

| Path | What it is |
|---|---|
| `impeccable/` | Shallow clone of `pbakaus/impeccable`, sparse-checked to `.claude/ skill/ docs/`. |
| `.claude/skills/impeccable` | Symlink → the compiled Impeccable skill (plus `.agents/skills/`). |
| `taste-skill/` | Shallow clone of `Leonxlnx/taste-skill` (~69 MB, mostly the offline photograph library). |
| `.claude/skills/design-taste-frontend` | Symlink → `taste-skill/skills/taste-skill`. |
| `aislop/` | Shallow clone of `scanaislop/aislop`; the CLI is installed globally (`aislop scan`). |

Pinned: Impeccable `4.8.0` (engine `0.1.18`), taste-skill `2.5.0`, aislop `0.20.0`.

Two environment notes: Impeccable's engine was seeded into `~/.impeccable/bin/0.1.18/` from the npm
package (its self-download is blocked), and Tailwind is **v3** here because v4's native
`@tailwindcss/oxide` binary is missing from this registry mirror.

### taste-skill recipes used

```bash
node scripts/start.mjs deal --page service
node scripts/start.mjs css --page service --palette three-stones --type literata --radius soft
node assets/layout/deal.mjs --type service
```
