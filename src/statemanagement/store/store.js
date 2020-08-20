import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "../reducers/combineReducer";
export default createStore(combineReducers, composeWithDevTools());
