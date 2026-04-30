// ═══════════════════════════════════════════════════════════════
//  CC Web Dev Bootcamp — Node.js & Express.js Session
//  Instructors: Kruthi Krishna & Bhavya Chawat
//
//  This file covers LIVE CODE #1 through #5 from the slides.
//  Follow along as we explain each block live.
//
//  Run:  npm run dev
//  Test: http://localhost:8080
// ═══════════════════════════════════════════════════════════════


// ─────────────────────────────────────────────────────
// LIVE CODE #1 — Setting Up Your Express Project
// SLIDES 24
//
// STEP 1 — already done when you cloned this repo
//   mkdir my-express-app
//   cd my-express-app
//   npm init -y
//   npm install express
//
// STEP 2 — already done
//   touch .env
//   touch .gitignore
//
// STEP 3 — already configured
//   .env       → PORT=8080
//   .gitignore → node_modules/ and .env
//   package.json:
//     "type": "module"
//     "start": "node server.js"
//     "dev":   "node --watch --env-file=.env server.js"
// ─────────────────────────────────────────────────────

import express from 'express';
import 'dotenv/config';

const app  = express();
const PORT = process.env.PORT || 8080;


// ─────────────────────────────────────────────────────
// LIVE CODE #2 — Your First Express Server
// SLIDE 25
//
// Middleware
// → app.use(express.json()) lets server read JSON data from requests
// ─────────────────────────────────────────────────────

// Middleware
app.use(express.json());

// Home route
// res.send() → sends plain text (simple string response)
app.get('/', (req, res) => {
  res.send('Hello World 🚀');
});

// API route
// res.json() → sends structured JSON (object data)
app.get('/api', (req, res) => {
  res.json({ message: 'Express is alive!' });
});

// ── CHECKPOINT 1 ──────────────────────────────────────
// git add .
// git commit -m "feat: first server + routes"
//
// Open your browser:
//   http://localhost:8080       → Hello World 🚀  (res.send → plain text)
//   http://localhost:8080/api   → {"message":"Express is alive!"}  (res.json → JSON object)
//
// req & res explained:
//   req = what came IN     → req.params, req.query, req.body, req.headers
//   res = what you send OUT → res.send(), res.json(), res.status(), res.sendFile()
// ─────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────
// LIVE CODE #3 — Routing, Params & Query Strings
// SLIDES 27-28
//
// Open server.js — ADD this below middleware
// We're not connecting to a real database yet.
// This array IS our database. We'll replace it with MongoDB later.
// ─────────────────────────────────────────────────────

// 🔵 Fake database
let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' }
];

// 🔵 Existing routes above ↑

// ✅ 🔥 PASTE YOUR NEW ROUTE HERE
// GET all posts with query string
// req.query → reads values after ? in the URL
//
// Test in browser:
//   http://localhost:8080/api/posts           → all 3 posts
//   http://localhost:8080/api/posts?limit=2   → only 2 posts
app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// GET one post by ID (dynamic param)
// Paste it RIGHT BELOW your /api/posts route
//
// Previous Route — /api/posts
//   Returns a collection of posts (array of data)
//   Supports optional filtering using query string (?limit=2)
//   Response structure remains consistent (list format)
//   Used to fetch multiple records at once
//
// New Route — /api/posts/:id
//   Returns a single post based on dynamic ID
//   Uses URL parameter to identify specific resource
//   Response varies depending on input (different ID → different result)
//   Includes error handling (404 if post not found)
//
// Test in browser:
//   http://localhost:8080/api/posts/1   → Post One
//   http://localhost:8080/api/posts/99  → 404 not found
app.get('/api/posts/:id', (req, res) => {
  const id   = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({
      msg: `Post ${id} not found`
    });
  }

  res.status(200).json(post);
});


// ─────────────────────────────────────────────────────
// LIVE CODE #4 — Middleware
// SLIDE 29
//
// Simple middleware (inline) — runs before every route:
//   app.use((req, res, next) => {
//     console.log(req.method, req.url); // log request method + URL
//     next(); // VERY IMPORTANT: pass control to next middleware/route
//   });
//
// We moved this into middleware/logger.js as a custom function.
// Now we import and register it below.
//
// Middleware Flow:
//   Request In → Logger → JSON Parser → Auth Check → Route Handler → Response
// ─────────────────────────────────────────────────────

// Import custom middleware
import logger from "./middleware/logger.js";

// Register middleware (runs on every request)
app.use(logger);

// Built-in middleware
app.use(express.json()); // parses JSON data from request body

// ── CHECKPOINT 3 ──────────────────────────────────────
// git add .
// git commit -m "feat: logger middleware"
//
// Hit any route — watch your terminal print every request automatically.
// ─────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────
// LIVE CODE #5 — Full CRUD REST API
// SLIDES 30-31
//
// REST API = Representational State Transfer API
//   A design pattern for building scalable web services
//   Treats data as "resources" (e.g., /api/posts)
//   Each request is stateless (no client context stored on server)
//   Uses JSON as the common format between client and server
//
// HTTP METHODS = CRUD
//   GET    → Read
//   POST   → Create
//   PUT    → Update
//   DELETE → Delete
//
// Status Codes:
//   200 → OK
//   201 → Created
//   400 → Bad Request
//   404 → Not Found
// ─────────────────────────────────────────────────────

// POST (Create)
// Paste below your GET routes
//
// → Used to create new resources on the server
// → Client sends data in the request body (req.body)
// → Server validates input and adds new data to database/array
// → Returns 201 Created status with the newly created resource
//
// Test in Postman:
//   POST http://localhost:8080/api/posts
//   Body → raw → JSON → { "title": "My New Post" }
app.post('/api/posts', (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newPost = {
    id: posts.length + 1,
    title
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT (Update)
//
// → Used to update an existing resource completely
// → Identifies resource using URL parameter (/api/posts/:id)
// → Server finds the resource and modifies its data
// → Returns 200 OK with updated resource or 404 Not Found if missing
//
// Test in Postman:
//   PUT http://localhost:8080/api/posts/1
//   Body → raw → JSON → { "title": "Updated Title" }
app.put('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: `Post not found` });
  }

  post.title = req.body.title;
  res.status(200).json(post);
});

// DELETE (Remove)
//
// → Used to delete a specific resource from the server
// → Resource identified using URL parameter (:id)
// → Server checks existence and removes it from database/array
// → Returns 200 OK after deletion or 404 Not Found if resource doesn't exist
//
// Test in Postman:
//   DELETE http://localhost:8080/api/posts/1
app.delete('/api/posts/:id', (req, res) => {
  const exists = posts.some(p => p.id === parseInt(req.params.id));

  if (!exists) {
    return res.status(404).json({ message: `Post not found` });
  }

  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.status(200).json(posts);
});

// ── FINAL CHECKPOINT ──────────────────────────────────
// git add .
// git commit -m "feat: full CRUD API"
// ─────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────
// FINAL EXERCISE — Open Postman. Test all 5 routes.
//
//  1. GET    /api/posts                                       → should return all 3 posts
//  2. GET    /api/posts/1                                     → should return Post One
//  3. POST   /api/posts   body: { "title": "My New Post" }   → 201 Created
//  4. PUT    /api/posts/1  body: { "title": "Updated Title" } → 200
//  5. DELETE /api/posts/1                                     → 200, array without post 1
// ─────────────────────────────────────────────────────


// 🔵 Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `\nPort ${PORT} is already in use (another app is listening there).\n\n` +
        `  • Stop the other server: find the terminal running it and press Ctrl+C\n` +
        `  • Or use a different port: set PORT=3001 in your .env file, then run npm run dev again\n` +
        `  • macOS — see what is using the port:  lsof -i :${PORT}\n`
    );
    process.exit(1);
  }
  throw err;
});
