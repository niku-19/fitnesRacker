import { applyMiddleware, createStore } from "redux";

import { habitReducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(habitReducer, applyMiddleware(thunk));
