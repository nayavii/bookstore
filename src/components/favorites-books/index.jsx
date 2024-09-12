import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlackTheme,
  getBooks,
  getFavoriteBooks,
} from "../../store/selectors/index.js";
import { Book } from "../book/index.jsx";
import {
  getBooksByQuery,
  getBooksByQueryMiddleware,
  getNewReleasesBooks,
  getNewReleasesBooksMiddleware,
} from "../../store/middleware/bookMiddleware.js";
import { useEffect } from "react";
import { BooksNavBar } from "../books-nav-bar/index.jsx";
import { Button } from "../button/index.jsx";
import { useNavigate } from "react-router-dom";

export const FavoriteBooks = ({ setIsShowLogin }) => {
  const navigate = useNavigate()
  const isBlackTheme = useSelector(getBlackTheme);
  const favoriteBooks = useSelector(getFavoriteBooks);

  const handleClick = () => {
    navigate('/new-books')
  }

  return (
    <>
      <section className={`fav-books ${isBlackTheme ? "fav-books_black" : ""}`}>
        <div className="container">
          <h1 className="fav-books__title title">My favorite books</h1>
          {favoriteBooks.length === 0 ? (
            <div className="fav-books__empty">
              <p className="fav-books__text">Its empty here. Take a look</p>
              <Button className="fav-books__btn" title='Go to shop' onClick={handleClick} />
            </div>
          ) : (
            <div className="fav-books__wrapper">
              {favoriteBooks?.map((book, index) => {
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
          )}
        </div>
      </section>
    </>
  );
};
