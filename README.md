# TaskFlow Lite

A simple task management app.

- **Frontend:** React (Vite), plain CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (to be integrated later)

## Project structure

```
taskflow-lite/
├── client/   # React app (http://localhost:5173)
└── server/   # Express API (http://localhost:5000)
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer

## Setup and run

You need two terminals, one for each app.

### 1. Backend

```bash
cd server
npm install
npm run dev
```

Runs at http://localhost:5000. Test it: http://localhost:5000/api/health

Optional: copy `.env.example` to `.env` to change settings (a default `.env` is fine).

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173. The homepage shows a green status when the backend is reachable.

## How the frontend talks to the backend

Vite's dev server proxies any request starting with `/api` to `http://localhost:5000` (see `client/vite.config.js`), so the React code just calls `fetch('/api/health')`. The server also enables CORS for the client URL.

## API

| Method | Endpoint      | Description                  |
| ------ | ------------- | ---------------------------- |
| GET    | `/api/health` | Confirms the server is running |

Example response:

```json
{ "status": "ok", "message": "TaskFlow Lite server is running", "timestamp": "..." }
```
