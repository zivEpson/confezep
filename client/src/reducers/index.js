import { combineReducers } from "redux";
import authReducer from "./authReducer";

// map the authReducer to auth
export default combineReducers({
  auth: authReducer
});
