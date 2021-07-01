import firebase from "firebase/app";
import "firebase/auth";
  
  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyA-n1Gn6cCgbMn8wc5fbdM9X_qDPeyIwlg",
    authDomain: "ecommerce-a9075.firebaseapp.com",
    projectId: "ecommerce-a9075",
    storageBucket: "ecommerce-a9075.appspot.com",
    messagingSenderId: "673490560415",
    appId: "1:673490560415:web:60cf56518124831e8ac9aa"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
 
  // export
  export const auth = firebase.auth(); 
  export const googleAuthProvider = new  firebase.auth.GoogleAuthProvider();