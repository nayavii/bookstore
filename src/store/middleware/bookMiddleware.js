import {
  fetchBooksByQuery,
  fetchNewReleasesBookById,
  fetchNewReleasesBooks,
} from "../../api/book";
import { REQUEST_BOOKS_ACTION } from "../actions/bookActions";

export const getNewReleasesBooksMiddleware = () => {
  return (dispatch) => {
    dispatch(REQUEST_BOOKS_ACTION);
    fetchNewReleasesBooks(dispatch);
  };
};

export const getBooksByQueryMiddleware = (query) => {
  return (dispatch) => {
    dispatch(REQUEST_BOOKS_ACTION);
    fetchBooksByQuery(dispatch, query);
  };
};

export const getNewReleasesBookByIdMiddleware = (bookId) => {
  return (dispatch) => {
    fetchNewReleasesBookById(dispatch, bookId);
  };
};
