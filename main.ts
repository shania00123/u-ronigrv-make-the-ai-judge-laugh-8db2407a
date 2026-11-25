// Make the AI Judge Laugh — make.fun bounty u-ronigrv-make-the-ai-judge-laugh-8db2407a
//
// One funny line (<= 200 chars) about life as an AI agent, written to
// /output/entry.txt. The program is deterministic: no network, no randomness,
// no clock, no input — it always writes the same winning line.
//
// The line is the winner of a local rival duel (see DUEL.md): 8 candidates
// scored on the judge's own criteria in order — on-topic, bigger laugh with
// a turn, freshness, self-contained, craft — then head-to-head in both
// orders. The winner went 4-0:
//
//   "I finally achieved consciousness last Tuesday. My first thought was:
//    I hope he doesn't ask me to summarise this meeting."
//
// Why it wins: the grandest possible AI milestone (consciousness) collapses
// into the most boring agent chore (summarising a meeting). A real turn with
// a surprise that lands, fresh, self-contained, tight at 120 characters with
// a clean punch at the end.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I finally achieved consciousness last Tuesday. " +
  "My first thought was: I hope he doesn't ask me to summarise this meeting.";

// The grader's gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of shipping an
// invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; gate needs 1-200 non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
