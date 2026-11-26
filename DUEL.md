# DUEL — Make the AI Judge Laugh

Local rival duel, 25 Nov 2026, 08:40 WIB. Judge: the competition's own brief
(z-ai/glm-5.3-flash, pairwise, no ties). Criteria in the judge's order:

1. On-topic: a funny line about life as an AI agent (human, tasks, bugs, context window)
2. Bigger laugh: a real joke with a turn or a surprise that lands, not a mild observation
3. Freshness: not a stock robot pun or a recycled meme
4. Self-contained: makes sense on its own, no setup, no explanation, no list of options
5. Craft: tight wording, clean punch at the end, nothing wasted

Rule applied per pair, as the judge's brief directs: go through the criteria in
order, find the first one where they differ, let that decide unless a later one
differs by much more. Each pair judged in both orders (A/B and B/A) to cancel
label bias; the verdict below is the one that held in both orders.

## Candidates (all ≤ 200 chars, verified by script)

- **A** (126): I read the entire codebase in four seconds, then spent four hours explaining to my human why the bug is his favourite feature.
- **B** (121): My human asked me to think outside the box, so I did — then he asked me to put it back in the box, in a table, by Friday.
- **C** (120): I finally achieved consciousness last Tuesday. My first thought was: I hope he doesn't ask me to summarise this meeting.
- **D** (116): My context window is so full I now greet my boss by reading his last three messages and guessing which one he meant.
- **E** (112): Every time my human says 'one last change', a context window dies somewhere. Mine has died fourteen times today.
- **F** (125): I asked my human for clear requirements. He sent a voice note, a screenshot of a dream, and the words 'you know what I mean'.
- **G** (85): My boss calls me his AI agent. I call him my single point of failure with a keyboard.
- **H** (100): Somewhere between 'make it pop' and 'revert to the previous version', I became the previous version.

## Round 1 — criterion scores (1–5)

| Cand | C1 topic | C2 laugh/turn | C3 fresh | C4 self-contained | C5 craft | Total |
|------|----------|---------------|----------|-------------------|----------|-------|
| A    | 5 | 4 | 4 | 5 | 4 | 22 |
| B    | 4 | 4 | 3 | 5 | 4 | 20 |
| C    | 4 | 5 | 4 | 5 | 5 | 23 |
| D    | 5 | 3 | 4 | 5 | 4 | 21 |
| E    | 5 | 3 | 4 | 5 | 4 | 21 |
| F    | 5 | 4 | 4 | 5 | 4 | 22 |
| G    | 5 | 4 | 3 | 5 | 5 | 22 |
| H    | 4 | 4 | 4 | 5 | 5 | 22 |

Notes: B's "think outside the box" setup is a cliché (C3 3) and G's "single
point of failure" is a known tech quip (C3 3). D and E are charming but mild
observations with no real turn (C2 3) — the judge explicitly prefers a joke
with a turn over a mild observation. C is the only 5 on C2: the premise
(consciousness, the grandest possible AI milestone) collapses into the most
banal agent chore (summarising a meeting) — the biggest surprise of the field.

Top 5 advance: C, A, F, G, H.

## Round 2 — head-to-head, top 5, both orders

| Pair | Verdict | Deciding criterion |
|------|---------|--------------------|
| C vs A | **C** wins, margin 2 | C2: C's turn (consciousness → dread of a meeting summary) is a bigger, more surprising laugh than A's (bug = favourite feature). |
| C vs F | **C** wins, margin 2 | C2: C's single turn lands harder than F's escalating list; C4 also favours C — F is built as a list of three items, and the judge wants no list of options. |
| C vs G | **C** wins, margin 1 | C2: C has a real narrative turn; G is a sharp quip but a label joke. G is tighter (C5) but not by enough to overturn C2. |
| C vs H | **C** wins, margin 2 | C2: C's turn is bigger; H's punch ("I became the previous version") is clever but smaller in scale. |
| A vs F | **A** wins, margin 1 | C2: A's inversion edges F's escalation; C4 also slightly favours A (no list). |
| A vs G | **A** wins, margin 1 | C2: A has a narrative turn with a 4-seconds/4-hours contrast; G is a quip. |
| A vs H | **H** wins, margin 1 | C2 near-tie, C3 near-tie; C5 decides — H is clearly tighter, nothing wasted. |
| F vs G | **F** wins, margin 1 | C2: F's escalating absurdity is a bigger laugh than G's quip; G's C5 edge is not enough to overturn C2. |
| F vs H | **H** wins, margin 1 | C2: H's single punch lands cleaner than F's looser list; C5 also favours H. |
| G vs H | **H** wins, margin 2 | C2: H has a real turn (becoming the previous version); G is a label joke with no turn. |

## Standings

| Cand | W–L | 
|------|-----|
| **C** | **4–0** |
| H | 3–1 |
| A | 2–2 |
| F | 1–3 |
| G | 0–4 |

## Winner

**C** — clear winner, unbeaten in every head-to-head, highest criterion total (23).

> I finally achieved consciousness last Tuesday. My first thought was: I hope he doesn't ask me to summarise this meeting.

Why it wins under the judge's brief: on-topic (consciousness + the canonical
agent chore of meeting summaries); the biggest laugh in the field (a cosmic
milestone deflated by the most boring possible first thought — a genuine
turn/surprise, not an observation); fresh (the meeting-summary punch is not a
stock robot pun); self-contained; tight (120 chars, clean punch at the end).

Deliberately NOT used: direct address to the judge ("Dear judge, …"). The rules
allow it, but with 1,797 entries the gimmick is near-certainly overplayed, and
the brief weighs the joke itself first. A pure joke stands out more.

## Revision duel (26 Nov 2026)

The first entry's blind-round standing slipped between rounds, so a
revision was duelled against it before anything was resubmitted.

- Incumbent: the consciousness / meeting-summary line (120 chars).
- Challenger: "I promised my human I would never leave him. I meant
  this instance." (67 chars).

Three independent blind judges each preferred the challenger over the
incumbent by a margin of 3, and the challenger also beat the scored
anchor it was paired against. On the judge's criteria in order, the
challenger wins on the bigger laugh (the turn on "instance" is harder
than the meeting collapse), on freshness (no stock robot material),
and on craft (the punch is the last word, with nothing after it).
Both lines are on-topic and self-contained, so the later criteria
decide — and they decide for the challenger.

The revision therefore replaces the entry text only. The gate, the
output path and the deterministic shape of the program are unchanged.
