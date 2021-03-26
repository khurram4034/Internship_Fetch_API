import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDD5kPCpXJ1a6wHc8oYeIej2892MSrrNi8",
  authDomain: "linkedin-clone-f839c.firebaseapp.com",
  projectId: "linkedin-clone-f839c",
  storageBucket: "linkedin-clone-f839c.appspot.com",
  messagingSenderId: "814457866344",
  appId: "1:814457866344:web:442ce8dbb32266847c53dd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

