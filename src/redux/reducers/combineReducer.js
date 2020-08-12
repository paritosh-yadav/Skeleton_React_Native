import { combineReducers } from "redux";
import homerReducer from "./home.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({
    homerReducer,
    loginReducer,
});
