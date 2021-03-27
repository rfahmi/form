import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIygXogN1RtGgJl2OwVoBcbwz8Yggm6TM",
  authDomain: "rfahmi-id.firebaseapp.com",
  databaseURL: "https://rfahmi-id.firebaseio.com",
  projectId: "rfahmi-id",
  storageBucket: "rfahmi-id.appspot.com",
  messagingSenderId: "572854027072",
  appId: "1:572854027072:web:3e437ede693fc3840cb0a5",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
