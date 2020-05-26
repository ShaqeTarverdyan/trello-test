import React, { useState } from "react";
import firebase from "../../firebase/index";
import { connect } from "react-redux";
import { getLoginUser } from "../../stateManagement/actions/index";

const SignUp = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(function (result) {
        return (
          result.user.updateProfile({
            displayName: user.name,
          }),
          firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(function (result) {
              props.getLoginUser();
            })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form>
        <input
          placeholder="Name"
          onChange={handleChange}
          name="name"
          type="text"
        />
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
        <button type="submit" onClick={signUp}>
          Sign up
        </button>
      </form>
    </div>
  );
};

const mapDispatchToState = (dispatch) => {
  return {
    getLoginUser: (name) => dispatch(getLoginUser(name)),
  };
};

export default connect(null, mapDispatchToState)(SignUp);
