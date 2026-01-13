Good, ab clear ho gaya problem **kyon folders ek line me aa rahe hain**.
Reason simple hai:

👉 **Folder structure aur HTML code Markdown code block (` ``` `) ke andar nahi hai**, isliye GitHub usko normal text ki tarah render kar raha hai.

Neeche **FINAL, CORRECT, GITHUB-READY README.md** de raha hoon.
Isko **POORA KA POORA COPY–PASTE** karo **README.md** file me.
**Ek bhi backtick kam–zyada mat karna.**

---

````md
# Vet Chatbot Project

This repository contains the backend server and the frontend embeddable SDK for the Vet Chatbot.

---

## Backend

The backend is built using Node.js, Express, and MongoDB.

### Technologies

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

### Folder Structure

```text
backend/
├── index.js
├── package.json
├── .env
└── src/
    └── modules/
        ├── chat/
        │   ├── chat.controller.js
        │   ├── chat.service.js
        │   ├── chat.routes.js
        │   └── chat.model.js
        └── appointment/
            ├── appointment.controller.js
            ├── appointment.service.js
            ├── appointment.routes.js
            └── appointment.model.js
````

### Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/vet_chatbot
```

Start the server:

```bash
npm run dev
```

### Test

Open in browser:

```text
http://localhost:5000/health
```

Response:

```json
{"status":"OK"}
```

### API Routes

```text
POST /api/chat
POST /api/appointments
```

---

## Frontend and SDK

The frontend is a React app that can also be built as an embeddable SDK.

### Technologies

* React
* Vite
* Tailwind CSS
* JavaScript

### Folder Structure

```text
frontend/chatbot-sdk/
├── sdk/
│   ├── index.jsx
│   ├── App.jsx
│   └── style.css
├── dist/
│   ├── vet-chatbot-sdk.iife.js
│   └── vet-chatbot-sdk.css
├── vite.sdk.config.js
├── tailwind.config.js
└── package.json
```

### Setup

```bash
cd frontend/chatbot-sdk
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

### Build SDK

```bash
npm run build:sdk
```

Generated files:

```text
dist/
├── vet-chatbot-sdk.iife.js
├── vet-chatbot-sdk.css
```

### Use SDK

```html
<link rel="stylesheet" href="https://vet-chat-bot-liard.vercel.app/vet-chatbot-sdk.css">
<script src="https://vet-chat-bot-liard.vercel.app/vet-chatbot-sdk.iife.js"></script>
```

### Local SDK Test

```html
<!DOCTYPE html>
<html>
  <head>
    <title>SDK Test</title>
    <link rel="stylesheet" href="./dist/vet-chatbot-sdk.css">
  </head>
  <body>
    <h1>Hello</h1>
    <script src="./dist/vet-chatbot-sdk.iife.js"></script>
  </body>
</html>
```

---

## Status

Backend working
Frontend working
SDK working
Ready for deployment

```