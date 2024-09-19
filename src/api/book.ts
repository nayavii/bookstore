import { AppDispatch } from "../store";
import {
  addBookByIdAction,
  addBooksAction,
} from "../store/actions/bookActions";

const URL = "https://api.itbook.store/1.0";

export const fetchNewReleasesBooks = (dispatch: AppDispatch) => {
  fetch(`${URL}/new`)
    .then((response) => {
      // console.log(response)
      return response.json();
    })
    .then((response) => {
      console.log(response);
      dispatch(addBooksAction(response.books));
    })
    .catch((error) => {
      console.log(error);
      //dispatch(ERROR_POSTS_ACTION);
    });
};

export const fetchBooksByQuery = (dispatch: AppDispatch, query: string) => {
  fetch(`${URL}/search/${query}`)
    .then((response) => {
      // console.log(response)
      return response.json();
    })
    .then((response) => {
      console.log(response);
      dispatch(addBooksAction(response.books));
    })
    .catch((error) => {
      console.log(error);
      //dispatch(ERROR_POSTS_ACTION);
    });
};

export const fetchNewReleasesBookById = (
  dispatch: AppDispatch,
  bookId: string
) => {
  fetch(`${URL}/books/${bookId}`)
    .then((response) => {
      // console.log(response)
      return response.json();
    })
    .then((response) => {
      console.log(response, "reees");
      dispatch(addBookByIdAction(response));
    })
    .catch((error) => {
      console.log(error);
      //dispatch(ERROR_POSTS_ACTION);
    });
};
