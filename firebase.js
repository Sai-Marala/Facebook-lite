import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh1lOLdKPkalZFplIMY7C2QLJzu8kShVA",
    authDomain: "fb-clone-e685d.firebaseapp.com",
    databaseURL: "https://fb-clone-e685d.firebaseio.com",
    projectId: "fb-clone-e685d",
    storageBucket: "fb-clone-e685d.appspot.com",
    messagingSenderId: "1060728331320",
    appId: "1:1060728331320:web:4b52712fca35152b7a1acd",
    measurementId: "G-Y9PHMV2N8Y"
  };

  const firebasseApp = firebase.initializeApp(firebaseConfig);

  const db = firebasseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export{auth,provider};
  export default db;