// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { hotNewsReducer } from "./reduces";

// const slice = createSlice({
//   name: "hot-news",
//   initialState: {
//     articlesNum: 0,
//     articles: [],
//   },
//   reducers: {},
// });

// const store = configureStore({
//   reducer: {
//     hot-news: fetchReducer,
//   },
// });

// export default store;

// export const actions = slice.actions;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const rootReducer = combineReducers({
  hotNews: hotNewsReducer,
});

export const store = legacy_createStore(rootReducer, enhancer);
