// ─────────────────────────────────────────────────────
// LIVE CODE #4 — Middleware
// FILE: middleware/logger.js
// ─────────────────────────────────────────────────────

// Custom middleware function
const logger = (req, res, next) => {
  console.log(req.method, req.url); // log incoming request
  next(); // move to next step (without this, request will hang)
};

export default logger;
