#!/usr/bin/env node
// One-shot codemod: rewrite api.ts to use cookie-based auth instead of Bearer tokens.
const fs = require("fs");
const path = require("path");
const file = path.resolve(__dirname, "..", "src", "util", "api.ts");
let src = fs.readFileSync(file, "utf8");

const before = src;

// Multiline: Bearer then Content-Type
src = src.replace(
  /headers:\s*\{\s*\n\s*Authorization:\s*`Bearer \$\{session\.token\}`,\s*\n\s*'Content-Type':\s*'application\/json',\s*\n\s*\},/g,
  `credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },`
);

// Multiline: Content-Type then Bearer
src = src.replace(
  /headers:\s*\{\s*\n\s*'Content-Type':\s*'application\/json',\s*\n\s*Authorization:\s*`Bearer \$\{session\.token\}`,\s*\n\s*\},/g,
  `credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },`
);

// Multiline: Bearer alone
src = src.replace(
  /headers:\s*\{\s*\n\s*Authorization:\s*`Bearer \$\{session\.token\}`,\s*\n\s*\},/g,
  `credentials: 'include',`
);

// Single-line: Bearer + Content-Type
src = src.replace(
  /headers:\s*\{\s*Authorization:\s*`Bearer \$\{session\.token\}`,\s*'Content-Type':\s*'application\/json'\s*\},/g,
  `credentials: 'include',\n    headers: { 'Content-Type': 'application/json' },`
);
src = src.replace(
  /headers:\s*\{\s*'Content-Type':\s*'application\/json',\s*Authorization:\s*`Bearer \$\{session\.token\}`\s*\},/g,
  `credentials: 'include',\n    headers: { 'Content-Type': 'application/json' },`
);

// Single-line: Bearer alone
src = src.replace(
  /headers:\s*\{\s*Authorization:\s*`Bearer \$\{session\.token\}`\s*\},/g,
  `credentials: 'include',`
);

if (src === before) {
  console.error("No changes made. Patterns may need updating.");
  process.exit(1);
}

const remaining = (src.match(/Bearer \$\{session\.token\}/g) || []).length;
console.log(`Rewrote api.ts. Remaining Bearer references: ${remaining}`);
fs.writeFileSync(file, src);
