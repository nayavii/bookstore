import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme, getBooks } from "../../store/selectors";
import { Book } from "../book";
import {
  getBooksByQueryMiddleware,
  getNewReleasesBooksMiddleware,
} from "../../store/middleware/bookMiddleware.js";
import { useEffect, useState } from "react";
import { BooksNavBar } from "../books-nav-bar/index.jsx";
import { Pagination } from "../pagination/index.jsx";


export const Books = ({ setIsShowLogin }) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const books = useSelector(getBooks);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getNewReleasesBooksMiddleware());
  // }, []);

  const booksPerPage = 9; // Количество книг на странице

  const [currentPage, setCurrentPage] = useState(1); // Текущая страница

  // Рассчитываем индекс первой и последней книги для текущей страницы
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  // Книги, которые отображаются на текущей странице
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage); // Общее количество страниц

  const handleSearch = (searchValue) => {
    if (searchValue) {
      dispatch(getBooksByQueryMiddleware(searchValue));
    } else {
      dispatch(getNewReleasesBooksMiddleware());
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Изменение текущей страницы
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
