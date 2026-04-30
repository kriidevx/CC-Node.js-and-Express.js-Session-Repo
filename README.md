# 🟢 Node.js & Express.js — Session Starter

**CC Web Dev Bootcamp**  
**Instructors:** Kruthi Krishna & Bhavya Chawat

**How to use this file:** (1) Do **After you clone** in order. (2) In class, read **Session flow** from top to bottom — it matches the slide deck. (3) Use the **Quick fixes** table any time something breaks.

---

## What you will learn

- **Node.js** — run JavaScript on your computer, `console.log`, **modules** (`require` / `import`), built-ins like **`fs`** and **`http`**
- **HTTP** — what a request is, simple servers, why hand-written routes get messy
- **Express** — a small framework: **routes**, **middleware**, JSON APIs
- **REST** — **GET / POST / PUT / DELETE** on a sample **posts** API in `server.js`
- **Later: MongoDB** — same API idea, but data lives in a database (optional extension)

---

## Before you start

| Check | What to do |
|-------|------------|
| **Node.js** | Run `node -v` in terminal. You want **v20+** (install from [nodejs.org](https://nodejs.org) if needed). |
| **This folder** | You know how to `cd` into a folder and open a terminal there. |
| **Git** | You can `git clone` using the link your instructor gives you. |

---

<a id="after-clone"></a>
## After you clone — follow these steps in order

Do everything from the **repository root** — the folder that contains **`package.json`** and **`server.js`**. (On GitHub, the folder name is usually the same as the repository name.)

### Step 1 — Open the project folder in your terminal

```bash
cd path/to/your-cloned-folder
```

Use the real path on your machine (e.g. `cd ~/Projects/CC-Node.js-and-Express.js-Session-Repo-1`).

### Step 2 — Make sure you are in the right place

```bash
ls
```

You should see **`package.json`**, **`server.js`**, **`examples`**, and **`README.md`**. If not, you are in the wrong directory — `cd` until you see them.

### Step 3 — Install dependencies (do this once per clone)

```bash
npm install
```

Wait until it finishes without errors.

### Step 4 — Create your local `.env` file (strongly recommended)

Git does **not** store `.env` (so secrets are never public). This repo includes **`.env.example`** with safe placeholder values.

**macOS / Linux:**

```bash
cp .env.example .env
```

**Windows (Command Prompt):**

```cmd
copy .env.example .env
```

**Windows (PowerShell):**

```powershell
Copy-Item .env.example .env
```

> **Note:** You *can* run the next step even if you skip Step 4 — the app falls back to port **8080**. Step 4 avoids `undefined` when you run **`examples/09_env.js`** and matches the env lessons.

### Step 5 — Start the dev server

```bash
npm run dev
```

Keep this terminal **open**. Stop the server any time with **Ctrl+C** (Mac / Windows) or **Ctrl+Break** in some Windows terminals.

### Step 6 — Test in the browser

Open: **http://localhost:8080**  
You should see: **Hello World 🚀**

If that works, you are ready for class. **You do not need to edit any code before the instructor says so.**

### All-in-one (after you are in the right folder)

```bash
npm install
cp .env.example .env
npm run dev
```

*(On Windows, use `copy` or `Copy-Item` instead of `cp` for the second line.)*

---

## Cloned students vs. “start from empty folder” (don’t mix these up)

| Situation | What you do |
|-----------|-------------|
| **You cloned this repo** (most people) | Follow the steps above. Use **`npm install` only** at the root. **Do not** run **`npm init`** or **`npm init -y`** here. |
| **Slides show `npm init -y`** | That is for building a project in a **completely empty folder** during a live demo. **Skip** that if you already have this repo. |

---

## FAQ (beginner confusion, cleared up)

**Why are there two `package.json` files?**

- **Root** `package.json` = the real app (`npm install`, `npm run dev`, Express).
- **`examples/package.json`** = a **small helper** so files under `examples/` can use old-style **`require()`** like the slides. It is **not** a second app. **Do not** `npm init` inside `examples/`. **Do not** delete that file.

**Why isn’t `.env` in the download?**

- Secrets must not be on GitHub. Copy **`.env.example` → `.env`** (Step 4).

**What must I never run at the project root after cloning?**

- **`npm init`** / **`npm init -y`** — it can **overwrite** the real `package.json`. If you did it by accident: `git checkout package.json package-lock.json` then `npm install` again.

---

## Common problems (quick fixes)

| What you see | What to do |
|--------------|------------|
| `git clone` failed | Check the URL, internet, and GitHub login / SSH. |
| `npm install` errors | Run `node -v` (need v20+). Read the error text — often a typo or network issue. |
| `EADDRINUSE` / port 8080 in use | Another program is using 8080. **Ctrl+C** the other terminal, or set `PORT=3001` in `.env` and open **http://localhost:3001** — or on Mac/Linux: `lsof -i :8080` to see the process. |
| `Cannot find module` when running `node examples/...` | Run that command from the **repository root**, not from inside `examples/`. |
| `require is not defined` in `examples/` | Stay at the **root** so Node finds `examples/package.json`. |
| `node: .env: not found` in an old `dev` script | `git pull` the latest repo, or your `dev` script should be `node --watch server.js` (no required `.env` on disk). |
| Port **3000** errors in `examples/05_*.js` | Only one program can use a port. Stop the previous `node` server before starting the next. |

---

## What’s in this folder

```
.
├── .env.example              ← copy to `.env` locally (see Step 4)
├── examples/
│   ├── package.json          ← allows `require()` in lesson scripts (do not delete; do not npm init here)
│   ├── 01_hello.js           ← SLIDE 07 — First Node program
│   ├── 02_math.js            ← SLIDE 09 — Exporting a module
│   ├── 03_import.js          ← SLIDE 09 — Importing a module
│   ├── 04_fs.js              ← SLIDE 10 — Built-in fs module
│   ├── 05_http.js            ← SLIDE 11 — Raw HTTP server
│   ├── 06_manual_routes.js   ← SLIDE 12 — Handling routes manually
│   ├── 07_notes.js           ← SLIDE 13 — Notes module
│   ├── 08_notes_server.js    ← SLIDES 14-15 — Notes API server
│   └── 09_env.js             ← SLIDES 18-19 — Environment variables
├── middleware/
│   └── logger.js             ← LIVE CODE #4 — Custom logger
├── .env                      ← you create (not on GitHub)
├── .gitignore
├── package.json
├── README.md
└── server.js                 ← LIVE CODE #1–#5 — Express app (main lesson file)
```

---

## How the rest of this README is organized

1. **Session flow** (below) — **same order as the slides**. Follow along during class.
2. **`examples/*.js`** — small demos. From the repo root, run: `node examples/01_hello.js`, etc.
3. **`server.js`** — where **Express live coding** happens when the instructor opens it.

---

## Table of contents

Jump ahead when reviewing:

- [Session flow — every slide](#session-flow)
- [Final exercise](#final-exercise)
- [MongoDB integration](#mongodb)
- [What’s next](#whats-next)

---

<a id="session-flow"></a>
## 🗺️ Session Flow — Every Slide Covered

**During class:** follow these sections **in order** (same order as the deck). When you see a command in a gray code block, run it from the **repository root** (the folder with `package.json`) **unless the slide says otherwise**. Slides that only explain ideas have **no commands**—just read and listen.

---

### 📍 SLIDES 03-04 — Why JavaScript on the Server? What is Node.js?

No code yet. Just concepts.

**Why JavaScript on the Server?**
- Same language everywhere (frontend + backend)
- Faster development cycles
- Huge ecosystem (npm)

**What is Node.js?**
- Runtime environment built on **V8 engine**
- Executes JavaScript **outside the browser**
- Single-threaded event loop
- Handles multiple requests efficiently

**Core Features:**
- Non-blocking I/O
- Event-driven
- Lightweight and fast

**Flow:**
```
1. Request comes in
2. Event loop processes
3. Delegates heavy work to libuv
```

**Important Points:**
- ❌ Not suitable for CPU-heavy tasks
- ✅ Best for I/O-heavy applications

**Troubleshooting:** If concepts feel abstract, that is normal—live demos tie it together. No terminal commands yet in this block.

---

### 📍 SLIDES 05-06 — Setup & First Program

**Cloned this repo?** You already have `package.json` — use **`npm install`** only; **do not** run `npm init` (see **Cloned students vs. “start from empty folder”** at the top). The commands below are for **starting a brand-new project in an empty folder** (instructor live demo).

Verify your installation in terminal:

```bash
node -v
npm -v
```

Initialize a **new** project (empty folder only — not after `git clone`):

```bash
npm init -y
```

This creates `package.json` — the blueprint of your project.

```json
{
  "name": "your-folder-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

**Troubleshooting:** `node` or `npm` **command not found** → install Node.js from [nodejs.org](https://nodejs.org) and reopen the terminal. Wrong folder → run `pwd` and `ls`; you should see `package.json` when working on this cloned repo.

---

### 📍 SLIDE 07 — Create and Run app.js

**File:** `examples/01_hello.js`

```js
console.log("Hello Node.js");
```

```bash
node examples/01_hello.js
```

Expected output:
```
Hello Node.js
```

**Troubleshooting:** **`Cannot find module`** → run the command from the **repository root** (same folder as `package.json`). **`ENOENT`** or wrong output → check spelling: `examples/01_hello.js` uses an underscore, not a space.

---

### 📍 SLIDES 08-09 — Modules in Node.js

**What is a Module?**
- A module is a separate file containing reusable code
- Every `.js` file in Node.js is automatically a module

**Why Modules Matter:**
- Keeps code clean and organized
- Enables reuse
- Makes scaling possible

**Modules prepare you for:**
- Controllers → logic
- Routes → endpoints
- Services → business logic

**File:** `examples/02_math.js` — Exporting Code

```js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

**File:** `examples/03_import.js` — Importing Code

```js
const math = require('./02_math');

console.log(math.add(2, 3));
```

```bash
node examples/03_import.js
```

Expected output:
```
5
```

**Troubleshooting:** **`require is not defined`** → run `node examples/03_import.js` from the repo root so Node picks up `examples/package.json` (CommonJS). **`Cannot find module './02_math'`** → stay in the repo root; paths are relative to the `examples/` folder.

---

### 📍 SLIDE 10 — Built-in Modules

Node.js gives powerful tools without frameworks.

**Examples:**
- `http` → create servers
- `fs` → file system operations

**File:** `examples/04_fs.js`

```js
const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello Node');
console.log("File created");
```

```bash
node examples/04_fs.js
```

Expected output:
```
File created
```

Check your folder — `test.txt` appeared!

**Troubleshooting:** **`EACCES` / permission denied** → run the terminal from a folder you own (e.g. Desktop or your project), not a protected system directory. **`test.txt` missing** → confirm you ran `node examples/04_fs.js` and look in the **current working directory** (`pwd`).

---

### 📍 SLIDE 11 — Raw HTTP Server

**File:** `examples/05_http.js`

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);
```

```bash
node examples/05_http.js
```

Open browser → `http://localhost:3000`

You built a server with 7 lines. No frameworks. No install.

**Troubleshooting:** **`EADDRINUSE`** → another app is using port **3000**; quit the other server or change `3000` to `3001` in `examples/05_http.js` and open `http://localhost:3001`. Browser shows **Cannot connect** → ensure the terminal shows the script running (no crash) and the URL is **http** not https.

---

### 📍 SLIDE 12 — Handling Routes Manually

**File:** `examples/06_manual_routes.js`

```js
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
```

```bash
node examples/06_manual_routes.js
```

Test in browser:
```
http://localhost:3000        → Home Page
http://localhost:3000/about  → About Page
http://localhost:3000/xyz    → Not Found
```

**See how messy this gets? This is exactly why Express exists.**

**Troubleshooting:** Same as the raw HTTP server: only **one** process can listen on port **3000**—stop `05_http.js` before starting `06_manual_routes.js`. Trailing slashes (`/about/` vs `/about`) can change matching—use the exact URLs from the slide table.

---

### 📍 SLIDES 13-15 — Example: Notes API (Raw HTTP)

**File:** `examples/07_notes.js` — the module

```js
let notes = [];

function addNote(note) {
  notes.push(note);
  return "Note added";
}

function getNotes() {
  return notes;
}

module.exports = { addNote, getNotes };
```

**File:** `examples/08_notes_server.js` — the server

```js
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
```

```bash
node examples/08_notes_server.js
```

Test in browser:
```
http://localhost:3000/add?note=LearnNode   → Note added
http://localhost:3000/notes                → ["LearnNode"]
```

**Troubleshooting:** **`Cannot find module './07_notes'`** → run `node examples/08_notes_server.js` from the **repo root** (not from inside `examples/`). Empty or odd query results → use exactly `/add?note=LearnNode` (note the `?` and `=`).

---

### 📍 SLIDES 16-17 — Request Structure & JSON

**Every HTTP Request has 4 parts:**

| Part | What it is | Example |
|---|---|---|
| **URL** | What resource is requested | `/notes` or `/add?note=LearnNode` |
| **Method** | What action to perform | `GET`, `POST`, `DELETE` |
| **Headers** | Extra information about request | `Content-Type`, `Authorization` |
| **Body** | Data sent by client | Used mainly in POST/PUT |

**What is JSON?**

JSON = JavaScript Object Notation — a lightweight format to send data between frontend and backend.

```js
const data = {
  note: "Learn Node",
  completed: false
};

JSON.stringify(data);
// → {"note":"Learn Node","completed":false}
```

**Troubleshooting:** JSON errors usually mean a missing comma, trailing comma, or smart quotes—use plain ASCII `"` and validate at [jsonlint.com](https://jsonlint.com) if unsure.

---

### 📍 SLIDES 18-19 — Environment Variables (.env)

**What are Environment Variables?**
- Used to store configuration values
- Keeps sensitive data outside code

**Why Do We Use Them?**
- Protect secrets (API keys, passwords)
- Easy to change config without editing code
- Different settings for dev / production

**File:** `.env` (create by copying **`.env.example`** in this repo, or paste the block below next to `package.json`)

```
PORT=8080
DB_URL=mongodb://localhost:27017/notes-app
JWT_SECRET=mySuperSecretKey
API_BASE_URL=https://api.weatherapi.com
```

```bash
npm install dotenv
```

*(If you **cloned** this repo, `dotenv` is already in `package.json`—**`npm install`** at the root is enough. Use the command above only when you created a **new** project from scratch.)*

**File:** `examples/09_env.js`

```js
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
```

**Always add `.env` to `.gitignore` — never push secrets to GitHub.**

**Troubleshooting:** **`Cannot find module 'dotenv'`** → run `npm install` from the repo root (this repo already lists `dotenv`). **`PORT` is `undefined`** or server won’t listen → create `.env` from **`.env.example`** (`cp .env.example .env`), no spaces around `=`, run **`node examples/09_env.js` from repo root**. **`dotenv` installed but env empty** → restart the script after editing `.env`.

---

### 📍 SLIDES 20-21 — Problems We Face & What is Express.js?

**Problems with raw Node.js:**
- Routing is messy
- Code grows quickly
- Hard to maintain
- No middleware

**What is Express.js?**

Express is a minimal and flexible Node.js web framework that provides a robust set of features for building web and mobile applications, APIs, and micro-services.

- Used for server-side applications and backend APIs
- Core component of the MEAN/MERN/MEVN stacks
- Adopted by large companies: **IBM, Uber, Nike**

```
React.js  ←→  Node.js + Express.js  ←→  MongoDB
  WEB              SERVER               DATABASE
```

**Troubleshooting:** If Express feels overwhelming, focus on one idea: **routes answer URLs**. You will wire the same mental model in `server.js` next—slides stay conceptual here.

---

### 📍 SLIDES 22-23 — Express Mental Model & HTTP Status Codes

**The Only 3 Things Express Does:**
- **Routing** → Map a URL + HTTP method to a function
- **Middleware** → Run logic between request and response
- **req / res** → Every route receives what came in and sends something back

**How Every Request Flows:**
```
CLIENT → REQUEST → MIDDLEWARE → ROUTE HANDLER → RESPONSE → CLIENT
```

**HTTP METHODS = CRUD:**
```
GET    → Read
POST   → Create
PUT    → Update
DELETE → Delete
```

**One Rule to Remember:**
> Every route in Express is just: receive a question → send back an answer

```js
app.get('/api', (req, res) => { res.json({ message: "alive" }) })
```

**Status Codes:**

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 301 | Moved Permanently |
| 302 | Found (Temporary redirect) |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |
| 502 | Bad Gateway |
| 503 | Service Unavailable |

**Troubleshooting:** Mixed up **4xx vs 5xx**? Client mistakes (bad input, auth) → **4xx**; server bugs or downstream failures → **5xx**. Memorize **200 / 201 / 400 / 404 / 500** first.

---

### 📍 LIVE CODE #1 — Setting Up Your Express Project (SLIDE 24)

**Switch to `server.js` now. All Express coding happens here.**

Already done for you in this repo. If you followed **[After you clone](#after-clone)** at the top, you are set — open `server.js` and listen for live edits. The steps below mirror what an instructor would type **starting from zero**:

**STEP 1** *(skip if you cloned — you already ran `npm install`; never run `npm init` here)*  
```bash
mkdir my-express-app
cd my-express-app
npm init -y
npm install express
```

**STEP 2**
```bash
touch .env
touch .gitignore
```

**STEP 3 — create files**
```
# put this in .env
PORT=8080

# put this in .gitignore
node_modules/
.env

# add this to package.json
"scripts": {
  "start": "node server.js",
  "dev": "node --watch server.js"
}
```
*(This repo loads env vars via `import 'dotenv/config'` in `server.js`, so `npm run dev` works right after clone even before you create `.env`. Using `cp .env.example .env` is still recommended for lessons.)*

**Troubleshooting:** **`Cannot find module 'express'`** → run `npm install` in the repo root. **`node: .env: not found`** → you are on an **old** `dev` script; run `git pull` or set `"dev": "node --watch server.js"` (no `--env-file`). Typos in `package.json` → validate JSON (commas, double quotes).

---

### 📍 LIVE CODE #2 — Your First Express Server (SLIDE 25)

**Look at `server.js` — find the LIVE CODE #2 block**

```js
import express from 'express';
import 'dotenv/config';

const app  = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello World 🚀');
});

// API route
app.get('/api', (req, res) => {
  res.json({ message: 'Express is alive!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**req & res explained:**
- `req` = what came IN
- `res` = what you send OUT
- Every route in Express is just: receive a question → send back an answer

| req — Request Object | res — Response Object |
|---|---|
| req.params → URL params | res.send() → send text |
| req.query → query strings | res.json() → send JSON |
| req.body → POST data | res.status() → set status code |
| req.headers → HTTP headers | res.sendFile() → serve a file |

**Open your browser (SLIDE 26):**
```
http://localhost:8080        → Hello World 🚀
http://localhost:8080/api    → {"message":"Express is alive!"}
```

Notice the difference?
- `/`    → `res.send()` → plain text (simple string response)
- `/api` → `res.json()` → structured JSON (object data)

**✅ CHECKPOINT 1**
```bash
git add .
git commit -m "feat: first server + routes"
```

**Troubleshooting:** **`EADDRINUSE` / address already in use** → see the **Troubleshooting** note at the **top of this README** (port 8080 is taken—usually another terminal or `09_env.js`). Blank page or **Cannot GET** → confirm `npm run dev` is running and the URL matches **`PORT`** in `.env` (default **8080**). **`ERR_EMPTY_RESPONSE`** → server crashed; read the terminal. Wrong JSON on `/api` → hard-refresh or incognito.

---

### 📍 LIVE CODE #3 — Routing, Params & Query Strings (SLIDES 27-28)

**Look at `server.js` — find the LIVE CODE #3 block**

Open `server.js`. ADD this below middleware.
We're not connecting to a real database yet.
This array IS our database. We'll replace it with MongoDB later.

```js
// 🔵 Fake database
let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' }
];
```

**GET all posts with query string**
Paste this between `/api` and `app.listen`:

```js
app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});
```

Test in browser:
```
http://localhost:8080/api/posts           → all 3 posts
http://localhost:8080/api/posts?limit=2   → only 2 posts
```

**GET one post by ID (dynamic param)**
Paste it RIGHT BELOW your `/api/posts` route:

```js
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
```

Test in browser:
```
http://localhost:8080/api/posts/1    → Post One
http://localhost:8080/api/posts/99   → 404 not found
```

| | Previous Route `/api/posts` | New Route `/api/posts/:id` |
|---|---|---|
| Returns | collection of posts (array) | single post |
| Filtering | optional query string (?limit=2) | URL parameter (:id) |
| Error handling | none needed | 404 if post not found |
| Used for | fetch multiple records | fetch one specific record |

**Troubleshooting:** **`NaN` or wrong post** → `req.params.id` is a **string**; this repo uses `parseInt`—IDs must be numeric (`/api/posts/1`, not `/api/posts/abc`). Query `limit` ignored → use **`?limit=2`** (question mark) with no spaces. Still seeing old data → restart `npm run dev` after editing `server.js`.

---

### 📍 LIVE CODE #4 — Middleware (SLIDE 29)

**Look at `server.js` — LIVE CODE #4 block**
**Also open `middleware/logger.js`**

Simple middleware (inline):
```js
// Middleware runs before every route
app.use((req, res, next) => {
  console.log(req.method, req.url); // log request method + URL
  next(); // VERY IMPORTANT: pass control to next middleware/route
});
```

**File:** `middleware/logger.js` — Custom logger:
```js
// Custom middleware function
const logger = (req, res, next) => {
  console.log(req.method, req.url); // log incoming request
  next(); // move to next step (without this, request will hang)
};

export default logger;
```

Import and register in `server.js`:
```js
// Import custom middleware
import logger from "./middleware/logger.js";

// Register middleware (runs on every request)
app.use(logger);

// Built-in middleware
app.use(express.json()); // parses JSON data from request body
```

**Middleware Flow:**
```
Request In → Logger → JSON Parser → Auth Check → Route Handler → Response
```

**✅ CHECKPOINT 3**
```bash
git add .
git commit -m "feat: logger middleware"
```

Hit any route — watch your terminal. Every request prints automatically.

**Troubleshooting:** Requests **hang forever** → middleware called **`next()`** missing or not reached—every path must call `next()` or send a response. No logs → ensure `app.use(logger)` runs **before** routes you are testing (order matters). **`Failed to load module`** for logger → path must be `./middleware/logger.js` from `server.js` at repo root.

---

### 📍 LIVE CODE #5 — Full CRUD REST API (SLIDES 30-31)

**Look at `server.js` — LIVE CODE #5 block**
**Use Postman for these — the browser only does GET**

**REST API** = Representational State Transfer Application Programming Interface
- A design pattern for building scalable web services using standard HTTP methods
- Treats data as "resources" (e.g., `/api/posts`)
- Each request is stateless (server does not store client context)
- Uses JSON as the common format for communication between client and server

**POST (Create)**
Paste below your GET routes:
```js
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
```

**PUT (Update)**
```js
app.put('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: `Post not found` });
  }

  post.title = req.body.title;
  res.status(200).json(post);
});
```

**DELETE (Remove)**
```js
app.delete('/api/posts/:id', (req, res) => {
  const exists = posts.some(p => p.id === parseInt(req.params.id));

  if (!exists) {
    return res.status(404).json({ message: `Post not found` });
  }

  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.status(200).json(posts);
});
```

**✅ FINAL CHECKPOINT**
```bash
git add .
git commit -m "feat: full CRUD API"
```

**Troubleshooting:** **POST/PUT return 400** → body must be **JSON** with `Content-Type: application/json` (Postman: Body → raw → JSON). **404 on PUT/DELETE** → ID must exist; order of requests matters if you already deleted that ID. **Still GET-only in browser** → browsers do not send POST bodies like Postman—use Postman or fetch/curl for writes.

---

<a id="final-exercise"></a>
## 🧪 FINAL EXERCISE

### Install Postman first (Mac & Windows)

Postman is a **separate desktop app** — it does **not** install with `npm`. You only need it to send **POST**, **PUT**, and **DELETE** with a JSON body (browsers alone are awkward for that).

**macOS**

1. Download the app: **[postman.com/downloads](https://www.postman.com/downloads/)** → choose **Mac (Apple Silicon or Intel)** to match your Mac.
2. Open the **`.dmg`**, drag **Postman** into **Applications**, then launch it from **Applications** or **Spotlight** (`⌘ + Space`, type `Postman`).
3. **Optional — Homebrew:** if you use [Homebrew](https://brew.sh), you can run: `brew install --cask postman` then open Postman from Applications.

**Windows**

1. Download the installer: **[postman.com/downloads](https://www.postman.com/downloads/)** → choose **Windows 64-bit**.
2. Run **`.exe`**, follow the installer (typical “Next” flow), then start Postman from the **Start** menu.
3. If Windows SmartScreen appears, pick **Run anyway** or **More info → Run anyway** (the installer is from Postman’s official site).

**Before you test:** in a terminal, from the project root, run **`npm run dev`** and leave it running. In Postman, your base URL is **`http://localhost:8080`**.

---

Open Postman. We're going to test all 5 routes.

```
1. GET    /api/posts                                           → should return all 3 posts
2. GET    /api/posts/1                                         → should return Post One
3. POST   /api/posts   body: { "title": "My New Post" }        → 201 Created
4. PUT    /api/posts/1  body: { "title": "Updated Title" }     → 200
5. DELETE /api/posts/1                                         → 200, array without post 1
```

### How to run each request in Postman (click‑by‑click)

**Setup once**

1. Terminal: `npm run dev` from the project root — leave it running.
2. Postman: click **New** → **HTTP Request** (or use the empty tab if you see one).
3. Your **full URLs** always start with **`http://localhost:8080`** — copy‑paste the lines below into Postman’s address bar.

**Parts of Postman**

- **Dropdown on the left** of the URL bar = HTTP method (**GET**, **POST**, **PUT**, **DELETE**).
- **Big URL bar** = paste the full URL here.
- **Send** = sends the request.
- **Bottom panel** = **response** — status code (e.g. **200**, **201**) and JSON body. That’s how you “check” it worked.

---

**1 — GET all posts**

| Field | Value |
|-------|--------|
| Method | **GET** |
| URL | `http://localhost:8080/api/posts` |
| Body | none |

Click **Send**. **Check:** Status **200**, body is a **JSON array** with **3** posts.

---

**2 — GET one post**

| Field | Value |
|-------|--------|
| Method | **GET** |
| URL | `http://localhost:8080/api/posts/1` |

Click **Send**. **Check:** Status **200**, one object — **Post One**.

---

**3 — POST (create)**

| Field | Value |
|-------|--------|
| Method | **POST** |
| URL | `http://localhost:8080/api/posts` |

1. Click the **Body** tab (below the URL).
2. Select **raw**.
3. On the right of **raw**, change the dropdown from **Text** to **JSON**.
4. Paste exactly:

```json
{ "title": "My New Post" }
```

5. Click **Send**.

**Check:** Status **201 Created**. Body shows the **new** post (with an `id`).

---

**4 — PUT (update)**

| Field | Value |
|-------|--------|
| Method | **PUT** |
| URL | `http://localhost:8080/api/posts/1` |

1. **Body** → **raw** → **JSON** (same as POST).
2. Paste:

```json
{ "title": "Updated Title" }
```

3. **Send**.

**Check:** Status **200**, post **1** has **`title`: `"Updated Title"`**.

---

**5 — DELETE**

| Field | Value |
|-------|--------|
| Method | **DELETE** |
| URL | `http://localhost:8080/api/posts/1` |

No body. Click **Send**.

**Check:** Status **200**, body is a **JSON array** of posts — **post `1` should be gone**.

---

**Tip:** To run **5** after **4**, post `1` still exists — good. If you already ran **5** or deleted `1`, GET `/api/posts` first and use an **`id` that still appears in the list**, or restart **`npm run dev`** to reset the in‑memory posts.

**Troubleshooting:** Postman shows **Could not get response** → server not running or wrong host/port. **415 / parse errors** → select **JSON** body, not form-data. Results differ from neighbor → in-memory `posts` reset when the server restarts.

---

<a id="mongodb"></a>
## 📍 SLIDES 32–35 — MongoDB Integration (Real Database)

Until now, we’ve been using an in-memory array as our database:

```js
let posts = [...]
```

This helped us understand API logic, but it comes with a major limitation.

### ❌ Problem with Current Approach

* Data is stored in memory
* Server restart = data loss
* Not usable in real-world applications

---

## ✅ Why MongoDB?

MongoDB allows us to store data permanently in a database.

**What changes:**

* Data is now stored in MongoDB
* Survives server restarts
* Can scale for real applications

**What stays the same:**

* Same 5 routes (GET, POST, PUT, DELETE)
* Same request and response structure
* Same API design

👉 We are only replacing the **data layer**, not the API.

---

## 🔌 Step 1 — Install & Setup

Install Mongoose:

```bash
npm install mongoose
```

Add **`MONGO_URI`** to your `.env` file (copy **`.env.example`** to **`.env`** first if you have not already—this repo’s template already includes a placeholder line you can edit).

```
MONGO_URI=your_mongodb_connection_string
```

**Example:**

```
MONGO_URI=mongodb://localhost:27017/posts-app
```

### Where does `MONGO_URI` come from? (new to MongoDB — read this)

The **connection string** is just the **address + login** MongoDB expects so your Node app can reach a database. You don’t invent it by hand at first—you **copy** it from one of two places:

---

**Option A — MongoDB Atlas (free cloud)** — easiest if you don’t want to install a database on your laptop.

1. Go to **[mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)** and sign up / log in (free tier is fine).
2. **Create a project** (any name) → **Build a database** → choose the **FREE (M0)** cluster → pick a **region** close to you → create.
3. **Database Access** (left menu): **Add New Database User** → choose **Password** → save the **username** and **password** somewhere safe (you’ll paste the password into the URI).
4. **Network Access** (left menu): **Add IP Address** → for learning, choose **Allow access from anywhere** (`0.0.0.0/0`) so your laptop can connect. (For production you’d lock this down.)
5. **Database** → your cluster → **Connect** → **Drivers** (or “Connect your application”) → copy the **connection string**. It looks like:
   ```text
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **Edit that string:** replace `<password>` with your database user’s password (if your password has special characters, you may need to **URL-encode** it). Optionally add a database name before `?`, e.g. `...mongodb.net/posts-app?retryWrites=...`
7. Put the **full single line** into `.env` as:
   ```bash
   MONGO_URI=paste_the_full_string_here
   ```

That one variable is what **`mongoose.connect(process.env.MONGO_URI)`** uses in code.

---

**Option B — MongoDB on your own computer** (local install).

1. Install **MongoDB Community Server** from **[mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)** (pick your OS).
2. Start the MongoDB service (on Mac with Homebrew it’s often `brew services start mongodb-community`; the installer may start it for you on Windows).
3. If you **did not** set up users locally, a simple URI is:
   ```bash
   MONGO_URI=mongodb://localhost:27017/posts-app
   ```
   Here **`localhost:27017`** is where Mongo listens by default, and **`posts-app`** is just the **database name** (Mongo creates it when you first write data).

If you see **`connection refused`**, Mongo isn’t running locally — start the service or switch to **Atlas (Option A)**.

---

Mongoose is a library that helps us:

* Connect Node.js to MongoDB
* Define data structure
* Perform database operations easily

**Troubleshooting:** **`mongosh` / connection refused** → start MongoDB locally or use Atlas and paste the full **`MONGO_URI`** (including password). **`Authentication failed`** → check username/password and IP **allow list** (Atlas: Network Access). Wrong Node version for Mongoose → use **Node 18+**.

---

## 🧠 Step 2 — Connect & Create Model

We now connect to MongoDB and define how our data should look.

### Concept:

* **Schema** → defines structure
* **Model** → used to read/write data

### Example Data in MongoDB:

Instead of this:

```js
{ id: 1, title: "Post One" }
```

MongoDB stores:

```json
{
  "_id": "661f8c9b2f1a4c001234abcd",
  "title": "Post One"
}
```

Notice:

* `_id` is automatically generated
* No need to manually manage IDs

👉 This model now replaces our `posts` array.

**Troubleshooting:** **`Cast to ObjectId failed`** → route `:id` must be a valid Mongo **`ObjectId`** string, not the old numeric `1`. **`ValidationError`** → body fields must match the schema (e.g. required `title`).

---

## 🔄 Step 3 — Same Routes, New Data Source

We do not change API routes.
We only change how data is handled internally.

---

### 📥 GET — Fetch All Posts

**Before (Array):**

* Returns data from memory

**Now (MongoDB):**

* Fetches all posts from database

**Example Response:**

```json
[
  { "_id": "1", "title": "Post One" },
  { "_id": "2", "title": "Post Two" }
]
```

---

### 📥 GET — Fetch Single Post

**Before:**

* Search in array using `id`

**Now:**

* Query MongoDB using `_id`

**Example:**

```
GET /api/posts/661f8c9b2f1a4c001234abcd
```

---

### 📤 POST — Create New Post

**Before:**

* Push into array

**Now:**

* Insert into MongoDB

**Request Body:**

```json
{
  "title": "My New Post"
}
```

**Response:**

```json
{
  "_id": "661f8c9b2f1a4c001234xyz",
  "title": "My New Post"
}
```

---

### 🔁 PUT — Update Post

**Before:**

* Modify object in array

**Now:**

* Update document in MongoDB

**Example:**

```json
{
  "_id": "1",
  "title": "Updated Title"
}
```

---

### ❌ DELETE — Remove Post

**Before:**

* Filter array

**Now:**

* Delete document from database

---

## 🔁 Before vs After

| Feature     | Array (Before)    | MongoDB (After) |
| ----------- | ----------------- | --------------- |
| Storage     | In-memory         | Database        |
| Persistence | ❌ Lost on restart | ✅ Permanent     |
| ID Handling | Manual            | Automatic       |
| Scalability | Limited           | High            |
| API Routes  | Same              | Same            |

---

## 🧪 Example Flow (End-to-End)

1. Create a post

```
POST /api/posts
```

2. Fetch all posts

```
GET /api/posts
```

3. Update a post

```
PUT /api/posts/:id
```

4. Delete a post

```
DELETE /api/posts/:id
```

👉 Exact same flow as before — only backend storage changed.

---

## 🧠 Final Takeaway

We didn’t rewrite our API.
We didn’t change our routes.

We only replaced:

```
Array → MongoDB
```

**Same API. Same logic. Now persistent and production-ready.**

**Troubleshooting (MongoDB overall):** Data **disappears after deploy** → you wired Atlas but `.env` missing on the host; set **`MONGO_URI`** in production secrets. **Works locally, fails in cloud** → Atlas firewall must allow **0.0.0.0/0** (temp dev) or your host’s outbound IP.

---

<a id="whats-next"></a>
## 📌 What's Next

The **Deadline Tracker API** assignment drops after this session.
You'll build your own Express + MongoDB API from scratch using everything you just learned.

---

*CC Web Dev Bootcamp · Kruthi Krishna & Bhavya Chawat*
