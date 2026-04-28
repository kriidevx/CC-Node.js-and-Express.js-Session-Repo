// ─────────────────────────────────────────────────────
// SLIDE 11 — Raw HTTP Server
// Creating a Server
//
// Run this file with:
//   node examples/05_http.js
//
// Open browser → http://localhost:3000
// Expected output in browser:
//   Hello World
// ─────────────────────────────────────────────────────

const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);
