import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer.js";
import booksReducer from "./reducer/booksReducer.js";
import postsReducer from "./reducer/postsReducer.js";
import userReducer from "./reducer/userReducer.js";

const rootReducer = combineReducers({
  themeReducer,
  booksReducer,
  postsReducer,
  userReducer,
});
const store = configureStore<any>({ reducer: rootReducer });

export default store;

export type AppStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
