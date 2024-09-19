import { AppStore } from "..";

export const getBlackTheme = (state:AppStore) => state.themeReducer.isBlackTheme;

export const getBooks = (state:AppStore) => state.booksReducer.books.content;
export const getBook = (state:AppStore) => state.booksReducer.book;
export const getCart = (state:AppStore) => state.booksReducer.cart;
export const getFavoriteBooks = (state:AppStore) => state.booksReducer.favorite;

export const getPosts = (state:AppStore) => state.postsReducer.posts.content;
export const getPost = (state:AppStore) => state.postsReducer.post;

export const getUser = (state:AppStore) => state.userReducer.user.content;
export const getToken = (state:AppStore) => state.userReducer.token;
