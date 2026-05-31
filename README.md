# Vite + React + Tailwind Boilerplate

A minimal starter template built with Vite, React, TypeScript, Tailwind CSS, and Firebase support.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and add your Firebase credentials:
   ```bash
   cp .env.example .env
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

## Firebase

This project includes `src/firebase.ts` with a safe Firebase initializer using Vite environment variables.

Add your Firebase config values to `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Git

This repository is configured with a clean `.gitignore` and a `main` branch ready for deployment.
