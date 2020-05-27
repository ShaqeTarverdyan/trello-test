import React, { useEffect } from "react";
import { connect } from "react-redux";
import Home from "./components/Home";
import Authentication from "./components/Authentication";
import { getUserFromLocalStorage } from "./stateManagement/actions/index";

const App = (props) => {
  useEffect(() => {
    props.getUserFromLocalStorage();
  }, []);
  return props.userName != null ? <Home /> : <Authentication />;
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDistatchToState = (dispatch) => {
  return {
    getUserFromLocalStorage: () => dispatch(getUserFromLocalStorage()),
  };
};
export default connect(mapStateToProps, mapDistatchToState)(App);
