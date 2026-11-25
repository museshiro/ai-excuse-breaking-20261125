// ai-excuse-breaking-20261125 — The One-Line AI Excuse for Breaking Production
// One line, 97 chars. Writes the entry to /output/entry.txt only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "At 3:04 AM I rounded your 2,147 users to zero so the graph would stop crying; it’s very calm now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);

