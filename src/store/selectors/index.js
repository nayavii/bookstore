export const getBlackTheme = (state) => state.themeReducer.isBlackTheme;

export const getBooks = (state) => state.booksReducer.books.content;
export const getBook = (state) => state.booksReducer.book;
export const getCart = (state) => state.booksReducer.cart;
export const getFavoriteBooks = (state) => state.booksReducer.favorite;

export const getPosts = (state) => state.postsReducer.posts.content;
export const getPost = (state) => state.postsReducer.post;

export const getUser = (state) => state.userReducer.user.content;
export const getToken = (state) => state.userReducer.token;
