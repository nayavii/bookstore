import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme, getBooks } from "../../store/selectors";
import { Book } from "../book";
import {
  getBooksByQuery,
  getBooksByQueryMiddleware,
  getNewReleasesBooks,
  getNewReleasesBooksMiddleware,
} from "../../store/middleware/bookMiddleware.js";
import { useEffect } from "react";
import { BooksNavBar } from "../books-nav-bar/index.jsx";

export const Books = ({ setIsShowLogin }) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const books = useSelector(getBooks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewReleasesBooksMiddleware());
  }, []);

  const handleSearch = (searchValue) => {
    if (searchValue) {
      dispatch(getBooksByQueryMiddleware(searchValue));
    } else {
      dispatch(getNewReleasesBooksMiddleware());
    }
  };

  return (
    <>
      <BooksNavBar handleSearch={handleSearch} />
      <section className={`books ${isBlackTheme ? "books_black" : ""}`}>
        <div className="container">
          <h1 className="books__title title">New Releases</h1>
          <div className="books__wrapper">
            {books?.map((book, index) => {
              return (
                <Book
                  book={book}
                  index={index}
                  key={book.isbn13}
                  setIsShowLogin={setIsShowLogin}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
