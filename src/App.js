import React, { useEffect } from "react";
import { connect } from "react-redux";
import firebase from "./firebase/index";
import Home from "./components/Home";
import Authentication from "./components/Authentication";

const App = (props) => {
  return props.userName != null ? <Home /> : <Authentication />;
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};
export default connect(mapStateToProps)(App);
