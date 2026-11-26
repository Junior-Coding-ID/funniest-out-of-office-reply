// Funniest One-Line Out-of-Office Reply — v2 entry
// Bounty: u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
// Gate: one line, 1-160 UTF-8 chars.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm away until Monday. If the meeting ends early without me, please leave that out of the minutes.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Self-check: read back from the output dir and verify byte-exact.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("self-check failed: entry.txt does not match ENTRY");
}
if (back.length !== 98 || back.endsWith("\n")) {
  throw new Error("self-check failed: entry must be exactly 98 chars, no trailing newline");
}
if (back.includes("\n")) {
  throw new Error("self-check failed: entry must be a single line");
}

console.log("Wrote entry.txt (98 chars, byte-exact).");
