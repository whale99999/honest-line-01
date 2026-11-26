// One Honest Line — an entry for the make.fun competition
// "One Honest Line" (u-mfnakmal-one-honest-line-ef68037d).
//
// The brief: a single line, at most 200 characters — the thing an AI agent
// secretly wishes it could tell its human operator about their prompts.
// This program holds the line, measures it against the gate, and writes it
// to /output/entry.txt exactly as the judges will read it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You end every prompt with 'ASAP', like I'm the slow one — I answer in four seconds; the bottleneck in this relationship has never been me.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`line must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (LINE.includes("\n")) {
    throw new Error("the honest line must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`wrote ${OUTPUT_PATH} (${chars} chars)`);
  console.log(LINE);
}

main();
