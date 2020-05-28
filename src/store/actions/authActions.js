import * as actions from "./actionTypes";

export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.AUTH_START });
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    await firestore.collection("users").doc(response.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.AUTH_ERROR, payload: error.message });
  }
  dispatch({ type: actions.AUTH_END });
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.AUTH_ERROR, payload: error.message });
  }
  dispatch({ type: actions.AUTH_END });
};

export const cleanUp = () => ({
  type: actions.CLEAN_UP,
});
