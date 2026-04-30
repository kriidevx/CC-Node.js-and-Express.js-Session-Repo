// ─────────────────────────────────────────────────────
// SLIDE 10 — Built-in Modules
// fs → file system operations
//
// Node.js gives powerful tools without frameworks.
// No install needed — fs is built in.
//
// Run this file with:
//   node examples/04_fs.js
//
// Expected output:
//   File created
// (Check your folder — test.txt will appear!)
// ─────────────────────────────────────────────────────

const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello Node');
console.log("File created");
