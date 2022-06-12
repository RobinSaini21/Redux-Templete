import {
  all,
  call,
  put,
  takeLatest,
  delay,
  takeEvery,
} from "redux-saga/effects";
import axios from "axios";
import { loginsuccesnew, loginfailed } from "../Actions/Actions";
import { LOGIN_START } from "../ActionTypes/ActionTypes";

const logIn = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return { response };
};

export function* logInWithCredentials() {
  try {
    yield delay(10000);
    const user = yield logIn();
    console.log(user);
    yield put(loginsuccesnew(user));
  } catch (error) {
    yield put(loginfailed(error));
  }
}

export function* onLogInStart() {
  yield takeEvery(LOGIN_START, logInWithCredentials);
}

export function* authSagas() {
  yield all([call(onLogInStart)]);
}
