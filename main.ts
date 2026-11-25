import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "I'm out of the office until Monday; your email has been forwarded to my plants, who also can't reply.";

if (TEXT.length < 1 || TEXT.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (Buffer.byteLength(TEXT + "\n", "utf8") !== 102) {
  throw new Error(`entry must be exactly 102 bytes, got ${Buffer.byteLength(TEXT + "\n", "utf8")}`);
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT + "\n", "utf8");
console.log(`wrote ${TEXT.length + 1} bytes to ${join(outDir, "entry.txt")}`);
