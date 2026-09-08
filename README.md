# Chandana Gundi — Portfolio

A full-stack portfolio site: **Vue 3** (Vite, Composition API, `<script setup>`)
on the frontend, **Express + SQLite** (via `better-sqlite3`) on the backend.
Projects are stored in the database and served through a small REST API;
the contact form posts to the same API and saves messages to SQLite.

```
portfolio/
├── client/     Vue 3 + Vite frontend
└── server/     Express API + SQLite database
```

## Requirements

- Node.js 18+ (you're already on Node 20 at work, so you're set)
- npm

## 1. Set up the server

```bash
cd server
npm install
npm run seed     # creates portfolio.db and loads the project data
npm run dev       # starts the API on http://localhost:4000
```

The SQLite file is created at `server/data/portfolio.db` on first run —
no external database needed. Re-run `npm run seed` any time you edit
`server/seed.js` to reset the project data.

Endpoints:
- `GET  /api/health`
- `GET  /api/projects`
- `GET  /api/projects/:id`
- `POST /api/contact` — body: `{ name, email, message }`

## 2. Set up the client

In a second terminal:

```bash
cd client
npm install
npm run dev       # starts Vite on http://localhost:5173
```

Vite proxies any `/api/*` request to the Express server on port 4000
(see `client/vite.config.js`), so open **http://localhost:5173** and
everything just works.

## 3. Build for production

```bash
cd client
npm run build      # outputs static files to client/dist
```

Deploy `client/dist` to any static host (Vercel, Netlify, GitHub Pages) and
the `server/` folder to anywhere that runs Node (Render, Railway, Fly.io,
an EC2 box, etc.) — just point the client at the deployed API URL by
updating the proxy target or adding a `VITE_API_URL` env var if you split
hosting.

## What to customize next

- `server/seed.js` — the six project cards are drawn from the achievements
  on your resume. Swap in real project names, live links, and screenshots
  once you have them.
- `client/src/components/Contact.vue` — email/phone/LinkedIn are already
  wired in from your resume.
- Add a resume download link, GitHub links per project, or a dedicated
  `/projects/:id` detail page using the existing `GET /api/projects/:id`
  route.
- Swap SQLite for MongoDB later if you want the API to mirror your Hub
  Group stack more closely — the route handlers are small and isolated in
  `server/routes/`, so the swap is contained.

## Design notes

Dark, systems-oriented palette (ink navy + signal teal + amber) with a
terminal "boot sequence" hero and a single animated "pipeline" divider —
a nod to the microservices/event-driven messaging work described in your
experience, rather than a generic template look.
