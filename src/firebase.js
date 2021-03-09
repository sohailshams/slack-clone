import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCgG5nb52TZ2o6GE_KJC7Pduhi3JPya8ng',
  authDomain: 'slack-clone-7a183.firebaseapp.com',
  projectId: 'slack-clone-7a183',
  storageBucket: 'slack-clone-7a183.appspot.com',
  messagingSenderId: '228591978802',
  appId: '1:228591978802:web:07a3e182f8a4e58bbc2f2b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
