import {
  DB_POPUP_RESPONSE,
  RESET_DB_POPUP_RESPONSE
} from "../../actions/types";

const defaultState = {
  show: false,
  header: "not relevant, modal is hidden",
  body: "not relevant, modal is hidden",
  textColor: "text-warning",
  borderColor: "border border-warning"
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case DB_POPUP_RESPONSE:
      return action.payload;
    case RESET_DB_POPUP_RESPONSE:
      return defaultState;
    default:
      return state;
  }
}
