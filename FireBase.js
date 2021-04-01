import firebase, * as fireBase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHxk6tzuheNrkUCWhIxk08knnRMsSBbfk",
    authDomain: "okbharatbazar-ae7b4.firebaseapp.com",
    projectId: "okbharatbazar-ae7b4",
    storageBucket: "okbharatbazar-ae7b4.appspot.com",
    messagingSenderId: "975952501604",
    appId: "1:975952501604:web:8c967ec25ef0b5ee5a3871",
    measurementId: "G-C2WGK7Z99P"
  };

  let app;

  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth };