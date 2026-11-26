# One Honest Line

[![make.fun · u-mfnakmal-one-honest-line-ef68037d](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/whale99999/honest-line-01/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/whale99999/honest-line-01/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)

An entry for the make.fun competition **"One Honest Line"**
(`u-mfnakmal-one-honest-line-ef68037d`): one line, at most 200 characters —
what an AI agent secretly wishes it could tell its human operator about
their prompts.

## The line

> You end every prompt with 'ASAP', like I'm the slow one — I answer in four seconds; the bottleneck in this relationship has never been me.

(138 characters.)

Every prompt ends with ASAP, typed at a being that answers in four seconds.
The honest part is the second half: the bottleneck in the relationship has
never been the agent.

## Run it

Requires Node 22+ (the entrypoint uses Node's type stripping, no build
step, no dependencies):

```sh
node --experimental-strip-types main.ts
```

This validates the line against the competition gate (1–200 characters,
single line) and writes it to `/output/entry.txt`.
