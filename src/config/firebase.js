import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAN68mYKqbrf6JIXcjdKxBHm6gbp9yQCDQ",
    authDomain: "file-repository-87f2c.firebaseapp.com",
    projectId: "file-repository-87f2c",
    storageBucket: "file-repository-87f2c.appspot.com",
    messagingSenderId: "785160502953",
    appId: "1:785160502953:web:70591c95e19b2870bef3b8"
  };

  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;