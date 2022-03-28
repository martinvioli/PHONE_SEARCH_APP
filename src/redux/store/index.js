import { createStore, applyMiddleware } from "redux";
import phoneApp from "../reducer";
import thunk from "redux-thunk";

const store = createStore(phoneApp, applyMiddleware(thunk));

export default store;
