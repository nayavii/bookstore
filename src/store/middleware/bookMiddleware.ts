import { AppDispatch } from "..";
import {
  fetchBooksByQuery,
  fetchNewReleasesBookById,
  fetchNewReleasesBooks,
} from "../../api/book";
import { REQUEST_BOOKS_ACTION } from "../actions/bookActions";

export const getNewReleasesBooksMiddleware = () => {
  return (dispatch: AppDispatch) => {
    dispatch(REQUEST_BOOKS_ACTION);
    fetchNewReleasesBooks(dispatch);
  };
};

export const getBooksByQueryMiddleware = (query: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(REQUEST_BOOKS_ACTION);
    fetchBooksByQuery(dispatch, query);
  };
};

export const getNewReleasesBookByIdMiddleware = (bookId: any) => {
  return (dispatch: AppDispatch) => {
    fetchNewReleasesBookById(dispatch, bookId);
  };
};
