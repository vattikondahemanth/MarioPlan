import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCu7BJhGzbdlskxLlqWx5zjPS4QwEXKM3w",
    authDomain: "net-ninja-marioplan-8c14c.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-8c14c.firebaseio.com",
    projectId: "net-ninja-marioplan-8c14c",
    storageBucket: "net-ninja-marioplan-8c14c.appspot.com",
    messagingSenderId: "882826259561"
  };
  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;