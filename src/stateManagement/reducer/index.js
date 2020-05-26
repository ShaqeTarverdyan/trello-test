import firebase from "../../firebase/index";
const initialState = {
  userName: null,
  isSignIn: false,
  listName: "shaqe-test",
  cardName: "",
  editCardName: "",
  keyCard: "",
  keyList: "",
  inputKey: "",
  dataLists: [],
  dataCards: ["shaqe"],
  editing: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "LOGIN_USER":
      const logInUser = firebase.auth().currentUser;
      return { ...newState, userName: logInUser.displayName };

    case "LOGOUT":
      const logOutEvent = action.payload;
      logOutEvent.preventDefault();
      firebase.auth().signOut();
      return { ...newState, userName: null };

    default:
      return newState;
  }
};

export default reducer;
