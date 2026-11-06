# Website-Test

Design/build playground for websites, driven by [Impeccable](https://github.com/pbakaus/impeccable)
— the design vocabulary, critique/audit skills, and anti-pattern detector for AI coding agents.

## Repo layout

| Path | What it is |
|---|---|
| `impeccable/` | Shallow clone of upstream `pbakaus/impeccable` (git-ignored, ~95 MB). Source of the skills + reference playbooks. |
| `.claude/skills/impeccable` | Symlink → `impeccable/.claude/skills/impeccable` (compiled skill, created by `impeccable link`). |
| `.agents/skills/impeccable` | Same skill, linked for other agent harnesses. |

Pinned versions: upstream commit `c3bb418`, Impeccable CLI `4.8.0`, engine `0.1.18`.

## Setup already done here

```bash
git clone --depth 1 https://github.com/pbakaus/impeccable.git impeccable   # vendored clone
npx -y impeccable@4.8.0 link --source=./impeccable -y                      # symlink skill into .claude/ + .agents/
```

The skill launcher downloads its native engine once; in this sandbox that download is
blocked, so the engine was copied to `~/.impeccable/bin/0.1.18/impeccable` (taken from the
npm package `@impeccable/cli-linux-x64`). On a fresh machine with normal network access the
launcher fetches it itself.

## Using it

```bash
# load project context (PRODUCT.md / DESIGN.md / surface briefs)
./.claude/skills/impeccable/scripts/impeccable context

# mechanical anti-pattern detector (no LLM, no API key)
./.claude/skills/impeccable/scripts/impeccable detect path/to/page.html
./.claude/skills/impeccable/scripts/impeccable detect --json src/
```

Exit code is `2` when findings exist, so it drops straight into CI.

In an agent, the skill exposes commands such as:

```
/impeccable init            # write PRODUCT.md (who it's for, what it must do)
/impeccable document        # capture the existing visual system as DESIGN.md
/impeccable critique the pricing cards
/impeccable polish settings
/impeccable bolder the hero
/impeccable harden checkout
```

Full command list and playbooks: `impeccable/skill/reference/`, docs at <https://impeccable.style/docs>.

## Updating the vendored clone

```bash
cd impeccable && git pull --depth 1 origin main && cd ..
npx -y impeccable@4.8.0 link --source=./impeccable -y --force
```
