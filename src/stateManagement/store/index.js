import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/index";
import thunk from "redux-thunk";
import * as queries from "../actions/index";

const store = createStore(reducer, applyMiddleware(thunk));

//store.dispatch(queries.testRedux());

export default store;
