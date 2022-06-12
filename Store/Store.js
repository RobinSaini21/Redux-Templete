import { createStore, applyMiddleware } from "redux";
import authReducer from "./Reducer/Reducer";
import createSagaMiddleware from "@redux-saga/core";
import { authSagas } from "./middleware/authsaga";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.subscribe(() => console.log(store.getState()));
sagaMiddleware.run(authSagas);
export default store;
