// One Line to Stop the Scroll — make.fun entry
// Writes a single original line of text to /output/entry.txt.
// No dependencies, no network. The line is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry line (original, written for this competition).
const LINE =
  "At 6:20 this morning, Mrs. Hartono held a handwritten sign to her window: \u2018Your laugh fixed my radio.\u2019 I have never once heard her radio, but I laughed louder, just in case.";

// Gate validation, mirroring the scorer:
// /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, and a single line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only white space");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

console.log(`wrote ${outPath} (${chars} characters)`);
console.log(LINE);
