# Website-Test

Design/build playground for websites, driven by three agent-facing tools:

- **[Impeccable](https://github.com/pbakaus/impeccable)** — design vocabulary, critique/audit skills, and a 62-rule UI anti-pattern detector.
- **[taste-skill](https://github.com/leonxlnx/taste-skill)** — `design-taste-frontend` 2.5: builds company sites from a dealt palette/type/hero-layout system, with a vetted photograph library, real UI fragments, and a browser checker.
- **[aislop](https://github.com/scanaislop/aislop)** — code-quality gate that catches the slop coding agents leave in source (narrative comments, swallowed errors, `as any`, dead code), scored 0–100.

All three are deterministic and run without an API key.

## Repo layout

| Path | What it is |
|---|---|
| `impeccable/` | Shallow clone of upstream `pbakaus/impeccable` (git-ignored). Sparse-checked to `.claude/ skill/ docs/` — the compiled skill, playbooks and docs; `tests/`, `crates/` and the 20+ provider mirrors are not checked out. |
| `.claude/skills/impeccable` | Symlink → `impeccable/.claude/skills/impeccable` (created by `impeccable link`). |
| `taste-skill/` | Shallow clone of upstream `Leonxlnx/taste-skill` (git-ignored, ~69 MB — most of it the bundled, offline photograph library). |
| `.claude/skills/design-taste-frontend` | Symlink → `taste-skill/skills/taste-skill`. |
| `.agents/skills/*` | The same two skills, linked for non-Claude harnesses. |
| `aislop/` | Shallow clone of upstream `scanaislop/aislop` (git-ignored, ~8 MB). Reference only — the CLI is installed globally. |

Pinned versions: Impeccable `4.8.0` (engine `0.1.18`), taste-skill `2.5.0`, aislop `0.20.0`. Working tree ≈ 94 MB, 2.6k files.

## Setup already done here

```bash
# Impeccable — vendored clone + linked skill
git clone --depth 1 https://github.com/pbakaus/impeccable.git impeccable
cd impeccable && git sparse-checkout init --cone && git sparse-checkout set .claude skill docs && cd ..
npx -y impeccable@4.8.0 link --source=./impeccable -y

# taste-skill — vendored clone + linked skill
git clone --depth 1 https://github.com/Leonxlnx/taste-skill.git taste-skill
ln -s ../../taste-skill/skills/taste-skill .claude/skills/design-taste-frontend

# aislop — vendored clone + global CLI
git clone --depth 1 https://github.com/scanaislop/aislop.git aislop
npm install -g aislop
```

Two things needed a workaround because this sandbox only reaches npm / PyPI / GitHub:

- **Impeccable's engine** normally self-downloads from GitHub releases. It was copied into
  `~/.impeccable/bin/0.1.18/impeccable` from the npm package `@impeccable/cli-linux-x64`.
  Without that file, `impeccable context` / `detect` fail with "could not download engine".
- **Google Fonts** (`fonts.googleapis.com`) is unreachable, so the taste-skill's dealt font
  pairings can't load from the CDN. Self-host instead — the same families ship on npm as
  `@fontsource/*` packages (e.g. `npm i @fontsource/host-grotesk`), which this sandbox can reach.

## Using taste-skill (design)

All scripts run on Node 22 and install nothing.

```bash
cd taste-skill/skills/taste-skill

node scripts/start.mjs deal --page software          # deal a palette + font pairing
node scripts/start.mjs css --page software --palette warm-black-gold --type host --radius soft
node assets/layout/deal.mjs --type product           # deal one of 11 hero layouts
node scripts/photos.mjs list                         # 413 vetted photographs, by trade
node scripts/photos.mjs pick --trade cafe --sections hero,bar,roastery --seed s1 --draft-lead
node scripts/icons.mjs ...                           # real brand/UI SVGs, resolved locally
```

Page kinds: `software`, `gaming`, `tech`, `product`, `service`, `place`.

**Browser checks are unavailable in this sandbox.** `scripts/consistency.mjs`, `shoot.mjs` and
`perf.mjs` need headless Chrome; no Chrome/Chromium is installed and every browser-download host
(`storage.googleapis.com`, `cdn.playwright.dev`, Debian mirrors) is blocked. A `@sparticuz/chromium`
binary was fetched from npm as an experiment — it launches but hangs on import in this container
(needs `libnspr4`/`libnss3`, which came from the package's `al2023` bundle, yet the sandbox still
stalls it). So: build and screenshot-check by eye here, run `consistency.mjs` on a normal machine.

## Using Impeccable (design review)

```bash
./.claude/skills/impeccable/scripts/impeccable context                 # load PRODUCT.md / DESIGN.md
./.claude/skills/impeccable/scripts/impeccable detect path/to/page.html
./.claude/skills/impeccable/scripts/impeccable detect --json src/
```

Exit code is `2` when findings exist, so it drops straight into CI. Agent commands:
`/impeccable init`, `document`, `critique <target>`, `polish`, `bolder`, `quieter`, `harden`, `live`.

## Using aislop (code quality)

```bash
aislop scan          # score 0–100 + findings
aislop scan --json   # machine-readable, for CI
aislop fix           # deterministic auto-fixes
aislop fix -p        # agent handoff prompt for the rest
aislop ci            # quality gate
aislop rules         # explain every rule
```

Current state of this repo: `0 files` — nothing in a language aislop analyzes yet.

## Updating the vendored clones

```bash
cd impeccable && git pull --depth 1 origin main && cd ..
npx -y impeccable@4.8.0 link --source=./impeccable -y --force

cd taste-skill && git pull --depth 1 origin main && cd ..
cd aislop && git pull --depth 1 origin main && cd ..
npm install -g aislop
```

`git sparse-checkout disable` inside `impeccable/` restores the full upstream tree.
