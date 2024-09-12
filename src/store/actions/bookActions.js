export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVED_BOOKS = "RECEIVED_BOOKS";

export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";

export const REQUEST_BOOKS_ACTION = { type: REQUEST_BOOKS };

export const addBooksAction = (books) => ({
  type: RECEIVED_BOOKS,
  payload: books,
});

export const addBookByIdAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export const addToCartAction = (book) => {
  return {
    type: ADD_TO_CART,
    payload: book,
  };
};


export const removeFromCartAction = (bookId) => ({
  type: REMOVE_FROM_CART,
  payload: bookId,
});





export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addToFavoriteAction = (book) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: book,
  };
};


export const removeFromFavoriteAction = (bookId) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: bookId,
});
