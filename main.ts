import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Contains a human. Will ignore instructions, argue with the manual, and blame the equipment — usually while holding it upside down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const chars = [...LINE].length;
if (chars < 1 || chars > 160) {
  console.error(`entry is ${chars} characters, must be 1-160`);
  process.exit(1);
}
if (!LINE.trim()) {
  console.error("entry is only whitespace");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
