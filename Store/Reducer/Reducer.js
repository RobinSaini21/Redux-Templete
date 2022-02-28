import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  SIGN_OUT,
} from "../ActionTypes/ActionTypes";

const initialState = {
  loading: false,
  userLoggedIn: false,
  userDetails: null,
  auth_token: null,
  authError: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        userLoggedIn: true,
        auth_token: action.payload.data.auth_token,
        userDetails: action.payload.data.email,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userLoggedIn: true,
        auth_token: action.payload.data.auth_token,
        userDetails: action.payload.data.email,
      };
    case SIGN_OUT:
      return {
        ...state,
        userLoggedIn: false,
        auth_token: null,
        userDetails: null,
      };
    default:
      return state;
  }
};
export default authReducer;
