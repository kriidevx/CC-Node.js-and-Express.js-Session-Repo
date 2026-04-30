// ─────────────────────────────────────────────────────
// SLIDES 18-19 — Environment Variables (.env)
//
// What are Environment Variables?
//   Used to store configuration values
//   Keeps sensitive data outside code
//
// Why Do We Use Them?
//   Protect secrets (API keys, passwords)
//   Easy to change config without editing code
//   Different settings for dev / production
//
// Run from repo root (needs a `.env` file — copy `.env.example` to `.env` first):
//   node examples/09_env.js
//
// Expected output:
//   Connecting to DB: mongodb://localhost:27017/notes-app
//   Server running on port 8080
// ─────────────────────────────────────────────────────

require('dotenv').config();

const http = require('http');

const PORT   = process.env.PORT;
const DB_URL = process.env.DB_URL;

console.log("Connecting to DB:", DB_URL);

const server = http.createServer((req, res) => {
  res.end("Server running");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
