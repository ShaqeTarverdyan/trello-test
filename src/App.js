import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/layout/Layout";
import { connect } from "react-redux";
import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/Signup/Signup";
import LogOut from "./components/auth/LogOut/LogOut";

const App = ({ isLoggedIn }) => {
  const routes = isLoggedIn ? (
    <>
      <Route exct path="/" component={Todos} />
      <Route exact path="/logOut" component={LogOut} />
      <Redirect to="/" />
    </>
  ) : (
    <>
      <Route exct path="/login" component={Login} />
      <Route exct path="/signup" component={Signup} />
      <Redirect to="/login" />
    </>
  );
  return (
    <Layout>
      <Switch>{routes}</Switch>
    </Layout>
  );
};

const mapStateToProps = ({ firebase }) => ({
  isLoggedIn: firebase.auth.uid ? true : false,
});

export default connect(mapStateToProps)(App);
