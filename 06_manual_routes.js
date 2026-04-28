// ─────────────────────────────────────────────────────
// SLIDE 12 — Handling Routes Manually
//
// Run this file with:
//   node examples/06_manual_routes.js
//
// Test in browser:
//   http://localhost:3000        → Home Page
//   http://localhost:3000/about  → About Page
//   http://localhost:3000/xyz    → Not Found
//
// See how messy this gets? This is why we need Express.
// ─────────────────────────────────────────────────────

const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end("Home Page");
  }
  else if (req.url === '/about') {
    res.end("About Page");
  }
  else {
    res.end("Not Found");
  }

});

server.listen(3000);
