import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// a ping that changes its target mid-sentence: the apology is the diagnostic.
const line = "I pinged you three times with no reply, so this fourth ping is for me — I am checking whether I am still online.";

mkdirSync("/output", { recursive: true });
const outFile = "/output/entry.txt";
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
