# Website-Test

Design/build playground for websites, driven by two agent-facing tools:

- **[Impeccable](https://github.com/pbakaus/impeccable)** — design vocabulary, critique/audit skills, and a 62-rule UI anti-pattern detector.
- **[aislop](https://github.com/scanaislop/aislop)** — code-quality gate that catches the slop coding agents leave behind (narrative comments, swallowed errors, `as any`, hallucinated imports, dead code), scored 0–100.

Both are deterministic and run without an API key.

## Repo layout

| Path | What it is |
|---|---|
| `impeccable/` | Shallow clone of upstream `pbakaus/impeccable` (git-ignored, ~95 MB). Source of the skills + reference playbooks. |
| `.claude/skills/impeccable` | Symlink → `impeccable/.claude/skills/impeccable` (compiled skill, created by `impeccable link`). |
| `.agents/skills/impeccable` | Same skill, linked for other agent harnesses. |
| `aislop/` | Shallow clone of upstream `scanaislop/aislop` (git-ignored, ~8 MB). Reference only — the CLI itself is installed globally. |

Pinned versions: Impeccable `4.8.0` (upstream `c3bb418`, engine `0.1.18`), aislop `0.20.0`.

## Setup already done here

```bash
# Impeccable — vendored clone + linked skill
git clone --depth 1 https://github.com/pbakaus/impeccable.git impeccable
npx -y impeccable@4.8.0 link --source=./impeccable -y

# aislop — vendored clone + global CLI
git clone --depth 1 https://github.com/scanaislop/aislop.git aislop
npm install -g aislop
```

Impeccable's skill launcher downloads its native engine once; in this sandbox that download is
blocked, so the engine was copied to `~/.impeccable/bin/0.1.18/impeccable` (taken from the npm
package `@impeccable/cli-linux-x64`). On a machine with normal network access the launcher
fetches it itself.

## Using Impeccable (design)

```bash
# load project context (PRODUCT.md / DESIGN.md / surface briefs)
./.claude/skills/impeccable/scripts/impeccable context

# mechanical anti-pattern detector (no LLM, no API key)
./.claude/skills/impeccable/scripts/impeccable detect path/to/page.html
./.claude/skills/impeccable/scripts/impeccable detect --json src/
```

Exit code is `2` when findings exist, so it drops straight into CI. In an agent, the skill
exposes commands such as:

```
/impeccable init            # write PRODUCT.md (who it's for, what it must do)
/impeccable document        # capture the existing visual system as DESIGN.md
/impeccable critique the pricing cards
/impeccable polish settings
/impeccable bolder the hero
/impeccable harden checkout
```

Full command list and playbooks: `impeccable/skill/reference/`, docs at <https://impeccable.style/docs>.

## Using aislop (code quality)

```bash
aislop scan                 # score the project 0–100 + findings
aislop scan --json          # machine-readable, for CI
aislop fix                  # deterministic auto-fixes
aislop fix -p               # print an agent handoff prompt for the rest
aislop ci                   # quality gate (fails on regressions)
aislop rules                # explain every rule
aislop hook install --claude # run aislop after each agent edit
```

Current state of this repo: `0 files` — nothing in a language aislop analyzes yet.

## Updating the vendored clones

```bash
cd impeccable && git pull --depth 1 origin main && cd ..
npx -y impeccable@4.8.0 link --source=./impeccable -y --force

cd aislop && git pull --depth 1 origin main && cd ..
npm install -g aislop
```
