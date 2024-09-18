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
const store = configureStore({ reducer: rootReducer });

export default store;
