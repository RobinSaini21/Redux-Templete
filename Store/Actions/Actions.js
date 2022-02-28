import { LOGIN_SUCCESS } from "../ActionTypes/ActionTypes";

export const loginsucces = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    data: data,
  },
});
