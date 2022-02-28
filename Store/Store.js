import { createStore } from "redux";
import authReducer from "./Reducer/Reducer";

const store = createStore(authReducer);
export default store;
store.subscribe(() => console.log(store.getState()));
