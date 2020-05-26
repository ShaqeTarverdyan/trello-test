import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAS4TwqWIMmG1hM4H2dfYpjhQMKc0DFmz8",
  authDomain: "trello-2f80a.firebaseapp.com",
  databaseURL: "https://trello-2f80a.firebaseio.com",
  projectId: "trello-2f80a",
  storageBucket: "trello-2f80a.appspot.com",
  messagingSenderId: "164064694937",
};
firebase.initializeApp(config);

export default firebase;
