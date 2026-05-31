import { useMemo } from "react";
import reactLogo from "./assets/react.svg";
import { firebaseApp } from "./firebase";

function App() {
  const statusText = useMemo(() => (firebaseApp ? "Firebase initialized" : "Firebase not initialized"), []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-slate-100">
      <div className="flex items-center gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-900/20 backdrop-blur-xl">
        <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Vite + React + Tailwind
          </h1>
          <p className="mt-2 text-slate-300">{statusText}</p>
        </div>
      </div>
      <div className="space-x-4 text-sm text-slate-400">
        <a className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 transition hover:bg-slate-700" href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite Docs</a>
        <a className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 transition hover:bg-slate-700" href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind Docs</a>
      </div>
    </main>
  );
}

export default App;
