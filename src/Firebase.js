import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDA63Mus7thTdgYMXY80sv1fUhULjfKyUA",
  authDomain: "disney-clone-v1-ddbd4.firebaseapp.com",
  projectId: "disney-clone-v1-ddbd4",
  storageBucket: "disney-clone-v1-ddbd4.appspot.com",
  messagingSenderId: "530216547841",
  appId: "1:530216547841:web:8fd52cf85b8c89a2f07200",
  measurementId: "G-LQWK9GG5CX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);


export { auth, provider, storage};
export default db;
