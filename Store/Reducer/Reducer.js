import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  SIGN_OUT,
  LOGIN_FAILED,
  LOGIN_SUCCESS_NEW,
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
        userDetails: action.payload.data,
      };
    case SIGN_OUT:
      return {
        ...state,
        userLoggedIn: false,
        auth_token: null,
        userDetails: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        userLoggedIn: false,
        auth_token: null,
        userDetails: null,
      };
    case LOGIN_SUCCESS_NEW:
      return {
        ...state,
        userDetails: action.payload.data,
      };
    default:
      return state;
  }
};
export default authReducer;
