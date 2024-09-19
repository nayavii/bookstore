import {
  ADD_BOOK,
  ADD_TO_CART,
  ADD_TO_FAVORITE,
  DELETE_BOOK,
  RECEIVED_BOOKS,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITE,
  REQUEST_BOOKS,
} from "../actions/bookActions";

const initialState = {
  books: {
    content: [],
    loading: false,
    loaded: false,
  },
  book: null,
  cart: [],
  favorite: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
        books: {
          ...state.books,
          loading: true,
          loaded: false,
          error: null,
        },
      };

    case RECEIVED_BOOKS:
      return {
        ...state,
        books: {
          content: action.payload,
          loading: false,
          loaded: true,
        },
      };

    case ADD_BOOK:
      return {
        ...state,
        book: action.payload,
      };

    case DELETE_BOOK:
      return {
        ...state,
        book: null,
      };

    case ADD_TO_CART: {
      const existingBookIndex = state.cart.findIndex(
        (book) => book.isbn13 === action.payload.isbn13
      );

      if (existingBookIndex >= 0) {
        const updatedCart = state.cart.map((book, index) =>
          index === existingBookIndex
            ? { ...book, quantity: book.quantity + 1 }
            : book
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      const existingBookIndex = state.cart.findIndex(
        (book) => book.isbn13 === action.payload
      );

      if (existingBookIndex >= 0) {
        const existingBook = state.cart[existingBookIndex];

        if (existingBook.quantity > 1) {
          const updatedCart = state.cart.map((book, index) =>
            index === existingBookIndex
              ? { ...book, quantity: book.quantity - 1 }
              : book
          );
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          return {
            ...state,
            cart: state.cart.filter((book) => book.isbn13 !== action.payload),
          };
        }
      }
      return state;
    }

    case ADD_TO_FAVORITE: {
      const isBookInFavorite = state.favorite.some(
        (book) => book.isbn13 === action.payload.isbn13
      );

      if (isBookInFavorite) {
        return {
          ...state,
          favorite: state.favorite.filter(
            (book) => book.isbn13 !== action.payload.isbn13
          ),
        };
      } else {
        return {
          ...state,
          favorite: [...state.favorite, action.payload],
        };
      }
    }

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter(
          (book) => book.isbn13 !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default booksReducer;
