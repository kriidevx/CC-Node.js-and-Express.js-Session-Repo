// ─────────────────────────────────────────────────────
// SLIDES 14-15 — Example: Notes API
// Raw HTTP Server using the notes module
//
// Run this file with:
//   node examples/08_notes_server.js
//
// Test in browser:
//   Add note  → http://localhost:3000/add?note=LearnNode
//   Get notes → http://localhost:3000/notes
// ─────────────────────────────────────────────────────

const http  = require('http');
const notes = require('./07_notes');

const server = http.createServer((req, res) => {

  if (req.url.startsWith('/add')) {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const note   = urlObj.searchParams.get('note');

    const result = notes.addNote(note);
    res.end(result);
  }

  else if (req.url === '/notes') {
    const allNotes = notes.getNotes();
    res.end(JSON.stringify(allNotes));
  }

  else {
    res.end("Route not found");
  }

});

server.listen(3000);
