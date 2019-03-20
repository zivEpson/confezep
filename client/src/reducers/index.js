import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import questionsReducer from "./questionsReducer";
import navReducer from "./navReducer";
import modalReducer from "./modalReducer";

// map the authReducer to auth
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  questions: questionsReducer,
  navAction: navReducer,
  modalAction: modalReducer
});
