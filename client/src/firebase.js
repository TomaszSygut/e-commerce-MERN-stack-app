  import * as firebase from 'firebase'
  
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA-n1Gn6cCgbMn8wc5fbdM9X_qDPeyIwlg",
    authDomain: "ecommerce-a9075.firebaseapp.com",
    projectId: "ecommerce-a9075",
    storageBucket: "ecommerce-a9075.appspot.com",
    messagingSenderId: "673490560415",
    appId: "1:673490560415:web:60cf56518124831e8ac9aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // export

  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.googleAuthProvider();