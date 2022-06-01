import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCw6gbe5DYeNclJssCEiv7v2GL7myBM02o",
  authDomain: "enews-da608.firebaseapp.com",
  projectId: "enews-da608",
  storageBucket: "enews-da608.appspot.com",
  messagingSenderId: "775720286098",
  appId: "1:775720286098:web:d6a5b0dc47fcf1c739734b",
  measurementId: "G-VQ68GRE25Q"
};

const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);