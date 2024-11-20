import "./index.scss";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme, getBooks } from "../../store/selectors";
import {
  getBooksByQueryMiddleware,
  getNewReleasesBooksMiddleware,
} from "../../store/middleware/bookMiddleware";
import { BooksNavBar } from "../books-nav-bar";
import { Pagination } from "../pagination";
import { Book } from "../book";
import { AppDispatch } from "../../store";
import { Book as IBook } from '../../typings/book';

interface BooksProps {
  setIsShowLogin: (value: boolean) => void;
}

export const Books:FC<BooksProps> = ({ setIsShowLogin }) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const books = useSelector(getBooks) as IBook[];

  const dispatch = useDispatch<AppDispatch>();

  const booksPerPage = 9;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleSearch = (searchValue:string) => {
    if (searchValue) {
      dispatch(getBooksByQueryMiddleware(searchValue));
    } else {
      dispatch(getNewReleasesBooksMiddleware());
    }
  };

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <BooksNavBar handleSearch={handleSearch} />
      <section className={`books ${isBlackTheme ? "books_black" : ""}`}>
        <div className="container">
          <h1 className="books__title title">New Releases</h1>
          <div className="books__wrapper">
            {currentBooks?.map((book) => {
              return (
                <Book
                  book={book}
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
