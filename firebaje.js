
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCUBgkkJxVmQaw-jnVckmolrwGnl57tm5Q",
    authDomain: "signal-clone-a03c8.firebaseapp.com",
    projectId: "signal-clone-a03c8",
    storageBucket: "signal-clone-a03c8.appspot.com",
    messagingSenderId: "563597380135",
    appId: "1:563597380135:web:bac5e9fc6ddb22f95c5c02"
  };



  let app;

  if (firebase.apps.length ===0){
   app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};

