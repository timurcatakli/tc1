import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from '/shared/apiKeys';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// export const auth = firebase.auth();

export default app;
