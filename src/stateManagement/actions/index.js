import firebase from "../../firebase/index";

export const handleChange = (value) => {
  return {
    type: "CHANGE_INPUT",
    payload: value,
  };
};

export const logOut = (e) => {
  return {
    type: "LOGOUT",
    payload: e,
  };
};

export const getLoginUser = () => {
  return {
    type: "LOGIN_USER",
  };
};
