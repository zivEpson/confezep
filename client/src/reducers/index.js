import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "../users/authReducer";
import questionsReducer from "../questions/questionReducer";
import DataBaseResPopUpReducer from "../Layout/DataBaseResPopUp/DataBaseResPopUpReducer";

// map the authReducer to auth
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  questions: questionsReducer,
  DBPopUp: DataBaseResPopUpReducer
});
