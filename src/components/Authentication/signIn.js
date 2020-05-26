import React, { useState } from "react";
import { connect } from "react-redux";
import firebase from "../../firebase/index";
import { getLoginUser } from "../../stateManagement/actions/index";

const SignIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    return setUser({ ...user, [e.target.name]: e.target.value });
  };

  const userSignIn = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(function (result) {
        props.getLoginUser();
      })
      .catch((err) => {
        console.log(err.message);
      });
    e.preventDefault();
  };
  return (
    <div>
      <h3>Sign in</h3>
      <form>
        <input
          placeholder="Email"
          onChange={handleChange}
          name="email"
          type="email"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          name="password"
          type="password"
        />
        <button type="submit" onClick={userSignIn}>
          Sign IN
        </button>
      </form>
    </div>
  );
};

const mapDispatchToState = (dispatch) => {
  return {
    getLoginUser: () => dispatch(getLoginUser()),
  };
};

export default connect(null, mapDispatchToState)(SignIn);
