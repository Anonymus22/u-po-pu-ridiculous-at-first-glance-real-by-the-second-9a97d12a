// Ridiculous at First Glance, Real by the Second
// Writes one sentence (no trailing newline) pitching a bizarre startup idea
// that sounds absurd until you realise it would actually sell.
// Node 22, standard library only, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SENTENCE =
  "We lease trained crows to find lost wedding rings in parks, because crows can't resist shiny things and a panicking groom will pay anything to get the ring back.";

if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(
    `SENTENCE must be between 1 and 200 characters, got ${SENTENCE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, SENTENCE, "utf8");
