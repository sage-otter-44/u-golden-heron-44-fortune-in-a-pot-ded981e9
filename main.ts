// Fortune in a Pot — one kind, funny fortune for the houseplant on the windowsill.
// Writes the entry text to /output/entry.txt (no trailing newline, so the
// file holds exactly the fortune: 114 characters, one line).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will outgrow this pot by spring, shade the whole sill, and the cat will move over. It was your spot all along.";

if (FORTUNE.length > 120 || FORTUNE.includes("\n")) {
  throw new Error(`Fortune must be one line of at most 120 characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`);

// Read back and confirm the file holds exactly the fortune, byte for byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== FORTUNE) throw new Error("Read-back mismatch: entry.txt differs from the fortune");
console.log("Read-back verified: entry.txt matches the fortune exactly.");
