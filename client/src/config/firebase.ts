import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-Z_HlEOIZYk4AfwTssz8vEGZbody02zk",
  authDomain: "translator-app-8048c.firebaseapp.com",
  projectId: "translator-app-8048c",
  storageBucket: "translator-app-8048c.appspot.com",
  messagingSenderId: "281097503783",
  appId: "1:281097503783:web:b231a30976419f3fb7ba02",
  measurementId: "G-9N0PRS762P",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const storage = getStorage(app);
