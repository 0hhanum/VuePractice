import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const actionCodeSettings = {
  url: "http://localhost:8080/login",
  // This must be true.
  handleCodeInApp: true,
};

export const database = getDatabase(app);
export const sendSignInLink = (email) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      localStorage.setItem("signInEMail", email);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInFirebase = async () => {
  const email = localStorage.getItem("signInEMail");
  if (!email) return false;
  localStorage.clear();

  if (isSignInWithEmailLink(auth, window.location.href)) {
    const response = await signInWithEmailLink(
      auth,
      email,
      window.location.href
    );
    return response;
  }
};

const dbRef = ref(getDatabase());
export const writeDB = (DBLocation, obj) => {
  set(ref(database, DBLocation), { ...obj });
};
export const loadDB = async (DBLocation) => {
  return await get(child(dbRef, DBLocation)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = Object.values(snapshot.val());
      return data;
    }
  });
};
