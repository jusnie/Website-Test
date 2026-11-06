# Design

The visual system for the Ava Rivera portfolio. Dealt with taste-skill (`start.mjs`, `assets/layout/deal.mjs`) for page kind `service`, then implemented in React/Tailwind. Executed tokens live in `tailwind.config.js` and `src/index.css`; nothing here may drift from those two files without updating this one.

## Palette — "three stones"

| Token | Value | Use |
|---|---|---|
| `paper` | `#eeecea` | Page ground |
| `surface` | `#e4e1dd` | Alternating bands, inset panels, hover fills |
| `ink` | `#333231` | Body and display text; the single dark band |
| `muted` | `#625f5b` | Secondary text, labels, captions |
| `moss` | `#5c6b54` | The one accent: primary button, status dot, index numbers, selection |
| `hair` | `rgba(51,50,49,0.16)` | Every rule, border and divider |
| `hair-inverse` | `rgba(238,236,234,0.2)` | Rules inside the dark band |

No gradients, no shadows on text, no tinted cards. Depth comes from hairlines, band alternation and one 3D scene.

## Type

- **Display:** Literata Variable, weight 400, tracking `-0.026em`, `text-wrap: balance`. Sizes: hero `clamp(2.4rem, 4.9vw, 4.5rem)` at line-height 1.02; section headings `clamp(1.9rem, 3.2vw, 2.9rem)` at 1.08; row titles 1.35–1.75rem.
- **Text:** Figtree Variable, 400 body / 500 labels. Body 17px (19px lead), line-height 1.55–1.65, `text-wrap: pretty` on leads.
- **Labels:** 12–13px, uppercase, `0.12–0.14em` tracking, `muted`.
- **Numerals:** tabular in the service index and the proof figures.

Both faces are self-hosted via `@fontsource-variable/*`; the Google Fonts links taste-skill prints are not used.

## Layout

- Shell: `max-w-[1440px]`, gutters 24 / 40 / 72px.
- Hero: 12-column split at `lg` — text `col-span-5`, visual `col-start-7 span-6`, hero frame `628/716`, radius 14px, one hairline border. Nav is 64px and fixed; hero padding-top 120px on desktop.
- One section per screen at 1440×900 for hero and closing footer; the middle bands breathe at `py-16` / `md:py-24`.
- Rules: full-width hairlines separate list rows; grid gaps of `1px` over a `hair` background draw the table borders in Process, Tools and Contact.

## Components

| Element | Rule |
|---|---|
| Buttons | 44px tall, radius 10px. Solid = moss/paper. Line = hairline border, fills `surface/60` on hover. Arrow translates 3px. |
| Rows | Service rows lift `-2px` on hover; the whole row is the hover target. |
| Table cells | Process, Tools, Contact all use the same 1px-gap hairline grid. |
| Details/summary | FAQ uses native `<details>`, `+` rotates 45° when open, question turns moss. |
| Status dot | 7px moss circle, **static** — the pulsing variant was rejected by the Impeccable detector as decorative liveness. |
| Proof band | Dark section: `ink` ground, two quotes at display size, figures on inverse hairlines. |
| Coverage chart | 24-hour GMT ruler; each zone a hairline track with a rounded bar (moss for her hours, `ink/20` for clients), axis ticks in tabular numerals. |
| Case notes | Three-part definition list under a display-size metric; the metric is the column's anchor. |
| Footer | Dark, bookending the proof band: closing line, email, solid button on three columns of links, legal line at `paper/60`. |

## Motion

Calm and short: 200–300ms, `cubic-bezier(0.22, 0.61, 0.36, 1)`. Hover lifts, arrow nudges, FAQ marker rotation, 700ms fade-in for the canvas. `prefers-reduced-motion` collapses all of it and renders the 3D scene as one static frame.

## The 3D scene

Six extruded, bevel-edged sheets (`#f8f6f3` → `#d9d4cc`, one moss, one ink) drifting in a loose stack over a soft shadow plane, keyed by a hemisphere light plus a warm key light with 1024px PCF soft shadows. Perspective camera, 32° field of view, refit on resize so the stack always fills the frame. Pointer parallax damps at 0.045; each sheet breathes on its own sine phase. DPR capped at 2, rendering paused when the tab is hidden, everything disposed on unmount, chunk lazy-loaded behind a static CSS fallback.

## Bans honoured

No purple/violet, no blue-to-purple gradient, no Inter/Roboto, no icon tile above every heading, no nested cards, no glassmorphism, no invented client logos, no stock handshakes, no carousel, no tabs, no pulsing decorative dots.
