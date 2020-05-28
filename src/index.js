import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import theme from "./utils/theme";
import GlobalStyles from "./utils/globals";
import firebase from "firebase/app";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider, useSelector } from "react-redux";
import store from "./store/index";
import { isLoaded } from "react-redux-firebase";

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

//load page until content will appeare
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <AuthIsLoaded>
              <App />
            </AuthIsLoaded>
            <GlobalStyles />
          </React.StrictMode>
        </ThemeProvider>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
