# Product

## What it is

A one-page portfolio for a solo **executive virtual assistant** selling remote administrative support to founders and small leadership teams. The page has one job: get a qualified visitor to book a 30-minute intro call.

## Users

- **Primary:** founders and operators of 3–30 person companies who answer their own email and book their own travel. They are evaluating a stranger with their calendar and their inbox.
- **Their moment:** late evening, comparing two or three assistants, skimming for hours covered, tools already known, and a clear price.
- **What wins:** specificity (what exactly gets taken), the shape of the first two weeks, and evidence that the arrangement is reversible.

## Position

General executive support with a time-zone advantage (GMT+8), sold in monthly hours with a two-week paid trial. Not an agency, not a gig marketplace: one person, one seat inside the client's existing tools.

## Platform

`web`, responsive from 390px to 1440px and beyond. No native app.

## Stack

Delegated by the user: React + Vite + Tailwind + three.js. Chosen by the agent within that brief:
- React 19 with Vite, hand-composed sections (no component library, no CSS framework presets beyond Tailwind utilities).
- three.js as a single lazy-loaded hero scene; the rest of the page is text, hairlines and flat colour.
- Fonts self-hosted from npm (`@fontsource-variable/*`) because the CDN is unreachable in this environment.

## Success

A visitor can answer, without scrolling past the hero: who this is, what gets handled, where she sits on the clock, and how to start. Contact requires no form.

## Constraints

- **All identity copy is placeholder.** Name, client quote, prices, figures and links are invented for layout; they are collected in `src/content.js` and must all be replaced before launch.
- Contacts must sit on `.example` domains and links must be marked as placeholders until real ones exist.
- No fabricated client logos. Tool names only, no brand marks.
- Accessibility: WCAG AA contrast, keyboard-reachable navigation, `prefers-reduced-motion` honoured (the 3D scene renders a single static frame).
- The 3D scene must degrade to a static CSS composition when WebGL is unavailable.

## Evidence

None supplied yet. The testimonial and the three figures in the proof band are structural placeholders, not claims.

## Open decisions

- Real pricing (currently "from" figures per service).
- Whether the booking link is Cal.com, Calendly, or a mailto-only flow.
- Real photography: the brief supplies none, so the page is typography and one WebGL moment. Adding two or three real photographs of a desk or a working day would strengthen the proof band.
