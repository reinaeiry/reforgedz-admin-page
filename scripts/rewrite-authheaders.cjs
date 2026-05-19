#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const file = path.resolve(__dirname, "..", "src", "util", "api.ts");
let src = fs.readFileSync(file, "utf8");
const before = src;

src = src.replace(/headers:\s*\{\s*\.\.\.authHeaders\(\),\s*'Content-Type':\s*'application\/json'\s*\},?/g,
  `credentials: 'include',\n    headers: { 'Content-Type': 'application/json' },`);

src = src.replace(/headers:\s*authHeaders\(\),?/g, `credentials: 'include',`);

src = src.replace(/\{\s*headers:\s*authHeaders\(\)\s*\}/g, `{ credentials: 'include' }`);

if (src === before) {
  console.error("No changes made.");
  process.exit(1);
}

const remaining = (src.match(/authHeaders\(/g) || []).length;
console.log("Remaining authHeaders references:", remaining);
fs.writeFileSync(file, src);
