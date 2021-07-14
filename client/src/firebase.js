import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyA-n1Gn6cCgbMn8wc5fbdM9X_qDPeyIwlg",
  authDomain: "ecommerce-a9075.firebaseapp.com",
  databaseURL: "https://ecommerce-a9075.firebaseio.com",
  projectId: "ecommerce-a9075",
  storageBucket: "ecommerce-a9075.appspot.com",
  messagingSenderId: "673490560415",
  appId: "1:673490560415:web:60cf56518124831e8ac9aa",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
