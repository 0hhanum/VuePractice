import { initializeApp } from "@firebase/app";
import { getDatabase, ref, set, get, child } from "@firebase/database";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytes,
} from "@firebase/storage";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "@firebase/auth";
import store from "@/store/index";

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
  url: store.getters.getIsLocal
    ? "http://localhost:8080/login"
    : "https://vue2-cc0a4.web.app/login",
  // This must be true.
  handleCodeInApp: true,
};

// DB
export const database = getDatabase(app);
// STORAGE
export const storage = getStorage(app);

/**
 * 인증 메일 전송 메서드
 * @param {String} email 메일 주소
 */
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
export const writeDB = async (DBLocation, obj) => {
  await set(ref(database, DBLocation), { ...obj }).catch((e) => {
    throw e;
  });
};
export const loadDB = async (DBLocation) => {
  return await get(child(dbRef, DBLocation)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = Object.values(snapshot.val());
      return data;
    }
  });
};

export async function uploadStorage(file, id) {
  const ref = storageRef(storage, id);
  await uploadBytes(ref, file)
    .then((snapshot) => {
      console.log(snapshot);
    })
    .catch((e) => {
      throw e;
    });
}
export async function downloadFile(fileId) {
  const ref = storageRef(storage, fileId);
  const url = await getDownloadURL(ref);
  return url;
}
