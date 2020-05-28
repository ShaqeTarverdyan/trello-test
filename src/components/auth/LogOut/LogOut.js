import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const LogOut = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, []);
  return null;
};

const mapDispatchToProps = {
  signOut: actions.signOut,
};

export default connect(null, mapDispatchToProps)(LogOut);
