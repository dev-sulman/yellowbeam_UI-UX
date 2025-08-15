
import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration provided by you.
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCcC8nJRx4DekFI55O609zpohh-Br0OD1o",
  authDomain: "sulzx-38b13.firebaseapp.com",
  projectId: "sulzx-38b13",
  storageBucket: "sulzx-38b13.appspot.com",
  messagingSenderId: "425569249415",
  appId: "1:425569249415:web:9067543f029988493f7022",
  measurementId: "G-TV60QB8118"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
