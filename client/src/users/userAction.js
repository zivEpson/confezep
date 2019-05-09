import axios from "axios";
import { difference } from "../utils/utils";

import {
  FETCH_USERS,
  GET_USER,
  REQUEST_USER,
  CLEAR_USERS,
  CLEAR_USER
} from "../actions/types";

export const fetchUsers = values => async dispatch => {
  const res = await axios.get("/api/users", {
    params: {
      name: values["name"]
    }
  });
  dispatch({ type: FETCH_USERS, payload: res.data });
};

export const clearUsers = () => async dispatch => {
  dispatch({ type: CLEAR_USERS });
};

export const getUser = id => async dispatch => {
  if (id !== null) {
    dispatch({ type: REQUEST_USER });
    const res = await axios.get(`/api/users/${id}`);
    dispatch({ type: GET_USER, payload: res.data });
  } else {
    dispatch({ type: CLEAR_USER });
  }
};

export const submitUser = (values, initialValues) => async dispatch => {
  let res;
  if (initialValues === null) {
    res = await axios.post("/api/users", values);
    // on update question the delta is sent to be updated
  } else {
    res = await axios.put(
      `/api/users/${values._id}`,
      difference(values, initialValues)
    );
  }
};

export const deleteUser = id => async dispatch => {
  dispatch({
    type: "SHOW_MODAL",
    modalType: "DELETE_MODAL",
    modalProps: {
      modelId: id
    }
  });
};
