// ─────────────────────────────────────────────────────
// SLIDE 13 — Example: Notes API
// FILE: notes.js
//
// This is a separate module — exporting addNote and getNotes
// ─────────────────────────────────────────────────────

let notes = [];

function addNote(note) {
  notes.push(note);
  return "Note added";
}

function getNotes() {
  return notes;
}

module.exports = { addNote, getNotes };
