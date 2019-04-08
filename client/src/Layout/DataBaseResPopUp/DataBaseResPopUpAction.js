import { setModalData } from "../../utils/utils";
import {
  DB_POPUP_RESPONSE,
  RESET_DB_POPUP_RESPONSE
} from "../../actions/types";

/**
 * Reset questions reducer
 */
export const resetPopUp = () => async dispatch => {
  dispatch({ type: RESET_DB_POPUP_RESPONSE });
};

/**
 * create popup according to properties
 * @param {*} res
 * @param {*} header
 * @param {*} body
 */
export const createPopUp = (res, header, body) => async dispatch => {
  dispatch({
    type: DB_POPUP_RESPONSE,
    payload: setModalData(res, header, body, true)
  });
};
