import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS_NEW,
} from "../ActionTypes/ActionTypes";

export const loginsucces = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    data: data,
  },
});
export const loginsuccesnew = (data) => ({
  type: LOGIN_SUCCESS_NEW,
  payload: {
    data: data,
  },
});

export const loginfailed = () => ({
  type: LOGIN_SUCCESS,
});

export const loginstart = () => ({
  type: LOGIN_START,
});
