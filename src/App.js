import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/layout/Layout";
import { connect } from "react-redux";
import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exct path="/todos" component={Todos} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDistatchToState = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDistatchToState)(App);
