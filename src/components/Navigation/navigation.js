import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../stateManagement/actions/index";

const Navigation = (props) => {
  return (
    <div>
      <button onClick={props.logOut}>log out</button>
      Hello {props.userName}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    logOut: (e) => dispatch(logOut(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Navigation);
