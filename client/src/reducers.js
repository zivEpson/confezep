import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./auth/authReducer";
import questionsReducer from "./questions/questionReducer";
import DataBaseResPopUpReducer from "./Layout/DataBaseResPopUp/DataBaseResPopUpReducer";
import loadingSpinnerReducer from "./utils/LoadinSpinner/loadingSpinnerReducer";
import userReducer from "./users/userReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  questions: questionsReducer,
  users: userReducer,
  DBPopUp: DataBaseResPopUpReducer,
  loadingSpinner: loadingSpinnerReducer
});
