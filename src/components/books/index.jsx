import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getBlackTheme, getBooks } from "../../store/selectors";
import { Book } from "../book";
import {
  getBooksByQueryMiddleware,
  getNewReleasesBooksMiddleware,
} from "../../store/middleware/bookMiddleware.js";
import { BooksNavBar } from "../books-nav-bar/index.jsx";
import { Pagination } from "../pagination/index.jsx";

export const Books = ({ setIsShowLogin }) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const books = useSelector(getBooks);

  const dispatch = useDispatch();

  const booksPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleSearch = (searchValue) => {
    if (searchValue) {
      dispatch(getBooksByQueryMiddleware(searchValue));
    } else {
      dispatch(getNewReleasesBooksMiddleware());
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <BooksNavBar handleSearch={handleSearch} />
      <section className={`books ${isBlackTheme ? "books_black" : ""}`}>
        <div className="container">
          <h1 className="books__title title">New Releases</h1>
          <div className="books__wrapper">
            {currentBooks?.map((book, index) => {
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};
