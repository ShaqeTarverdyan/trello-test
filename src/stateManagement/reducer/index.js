import firebase from "../../firebase/index";
const initialState = {
  userName: null,
  isSignedIn: false,
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
      const user = {
        name: logInUser.displayName,
        email: logInUser.email,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return { ...newState, userName: logInUser.displayName, isSignedIn: true };

    case "LOGOUT":
      const logOutEvent = action.payload;
      logOutEvent.preventDefault();
      firebase.auth().signOut();
      //remove user data from localStorage
      localStorage.removeItem("user");
      return { ...newState, userName: null, isSignedIn: false };

    case "GET_USER_FROM_LOCALSTORAGE":
      const userDataFromLOcalStorage = JSON.parse(localStorage.getItem("user"));
      if (userDataFromLOcalStorage) {
        return { ...newState, userName: userDataFromLOcalStorage.name };
      }
      return;

    default:
      return newState;
  }
};

export default reducer;
