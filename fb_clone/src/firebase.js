import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzUw2-dM0giu5DSfgwCRfs0vLZhXdsS1M",
    authDomain: "dynamic-medical.firebaseapp.com",
    projectId: "dynamic-medical",
    storageBucket: "dynamic-medical.appspot.com",
    messagingSenderId: "1059664029811",
    appId: "1:1059664029811:web:94870b6f16b8965a59e206",
    measurementId: "G-ZQREZRVCBK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;