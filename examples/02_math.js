// ─────────────────────────────────────────────────────
// SLIDE 09 — Modules in Node.js
// Exporting Code
//
// This file is math.js — a separate reusable module
// Modules prepare you for:
//   Controllers → logic
//   Routes      → endpoints
//   Services    → business logic
// ─────────────────────────────────────────────────────

function add(a, b) {
  return a + b;
}

module.exports = { add };
