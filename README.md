# 🟢 Node.js & Express.js — Session Starter

**CC Web Dev Bootcamp**
**Instructors:** Kruthi Krishna & Bhavya Chawat

---

## ⚡ Do This RIGHT NOW Before We Start

```bash
git clone <repo-link>
cd <repository-folder>
npm install
npm run dev
```

Use the folder **git creates for you** when you clone (on GitHub it usually matches the repository name). All lesson files are at the **root** of that folder—no extra `cd` into another subfolder.

Open browser → `http://localhost:8080`

You should see `Hello World 🚀`

**That's it. Don't touch anything else yet. We explain everything live.**

---

## 📁 What's In This Repo

```
.
├── examples/
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
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js                 ← LIVE CODE #1–#5 — All Express coding here
```

---

## 🗺️ Session Flow — Every Slide Covered

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

---

### 📍 SLIDES 05-06 — Setup & First Program

Verify your installation in terminal:

```bash
node -v
npm -v
```

Initialize a project:

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

---

### 📍 SLIDES 18-19 — Environment Variables (.env)

**What are Environment Variables?**
- Used to store configuration values
- Keeps sensitive data outside code

**Why Do We Use Them?**
- Protect secrets (API keys, passwords)
- Easy to change config without editing code
- Different settings for dev / production

**File:** `.env`
```
PORT=8080
DB_URL=mongodb://localhost:27017/notes-app
JWT_SECRET=mySuperSecretKey
API_BASE_URL=https://api.weatherapi.com
```

```bash
npm install dotenv
```

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

---

### 📍 LIVE CODE #1 — Setting Up Your Express Project (SLIDE 24)

**Switch to `server.js` now. All Express coding happens here.**

Already done for you in this repo. This is what was set up:

**STEP 1** *(skip if you cloned this repo—you already have the project; run `npm install` from the repo root instead)*  
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
  "dev": "node --watch --env-file=.env server.js"
}
```

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

---

## 🧪 FINAL EXERCISE

Open Postman. We're going to test all 5 routes.

```
1. GET    /api/posts                                           → should return all 3 posts
2. GET    /api/posts/1                                         → should return Post One
3. POST   /api/posts   body: { "title": "My New Post" }        → 201 Created
4. PUT    /api/posts/1  body: { "title": "Updated Title" }     → 200
5. DELETE /api/posts/1                                         → 200, array without post 1
```
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

Add this to your `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

**Example:**

```
MONGO_URI=mongodb://localhost:27017/posts-app
```

Mongoose is a library that helps us:

* Connect Node.js to MongoDB
* Define data structure
* Perform database operations easily

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

---

## 📌 What's Next

The **Deadline Tracker API** assignment drops after this session.
You'll build your own Express + MongoDB API from scratch using everything you just learned.

---

*CC Web Dev Bootcamp · Kruthi Krishna & Bhavya Chawat*
