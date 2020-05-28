import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "trello-2f80a.firebaseapp.com",
  databaseURL: "https://trello-2f80a.firebaseio.com",
  projectId: "trello-2f80a",
  storageBucket: "trello-2f80a.appspot.com",
  messagingSenderId: "164064694937",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
