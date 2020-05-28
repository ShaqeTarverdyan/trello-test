import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div>
      <h1>home component</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToState = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToState)(Home);
