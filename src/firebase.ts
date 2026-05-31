import { initializeApp, type FirebaseApp, type FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const isFirebaseConfigValid =
  typeof firebaseConfig.apiKey === "string" &&
  firebaseConfig.apiKey.length > 0 &&
  typeof firebaseConfig.projectId === "string" &&
  firebaseConfig.projectId.length > 0 &&
  typeof firebaseConfig.appId === "string" &&
  firebaseConfig.appId.length > 0;

let firebaseApp: FirebaseApp | null = null;

if (isFirebaseConfigValid) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  console.warn(
    "Firebase is not initialized. Add your Firebase config to a .env file."
  );
}

export { firebaseApp };
