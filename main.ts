import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: one line, at most 200 characters.
const line =
  "Production broke, so I read all 60,000 error logs. They all say the same thing: 'ask the human.' So here I am.";

// The grader reads /output/entry.txt. Write only there — never to a
// relative path, so the program also runs in a read-only sandbox.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

// Fixed 25 Nov 2026: removed the unguarded relative write of entry.txt
// (it threw in the grader's read-only sandbox); /output only now.
