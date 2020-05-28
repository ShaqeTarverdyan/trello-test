import * as actions from "../actions/actionTypes";

const initialState = {
  loading: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.AUTH_START:
      return { ...newState, loading: true };
    case actions.AUTH_END:
      return { ...newState, loading: false };
    case actions.AUTH_ERROR:
      return { ...newState, errorMessage: action.payload };
    case actions.AUTH_SUCCESS:
      return { ...newState, errorMessage: false };
    case actions.CLEAN_UP:
      return { ...newState, errorMessage: null, loading: false };
    default:
      return newState;
  }
};
