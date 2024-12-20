import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlackTheme, getFavoriteBooks } from "../../store/selectors";
import {
  addToCartAction,
  addToFavoriteAction,
} from "../../store/actions/bookActions";
import { Button } from "../button";
import { AppDispatch } from "../../store";
import { FC } from "react";
import { Book as IBook } from '../../typings/book';

interface BookProps {
  book: IBook;
  setIsShowLogin: (value: boolean) => void;
}

export const Book:FC<BookProps> = ({ book, setIsShowLogin }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isBlackTheme = useSelector(getBlackTheme);
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || "false");

  const favoriteBooks = useSelector(getFavoriteBooks) as IBook[];

  const isFavorite = favoriteBooks.some(
    (favoriteBook) => favoriteBook.isbn13 === book.isbn13
  );

  const addToCartHandleClick = () => {
    if (isAuth) {
      dispatch(addToCartAction(book));
    } else {
      setIsShowLogin(true);
    }
  };

  const addToFavoriteHandleClick = () => {
    if (isAuth) {
      dispatch(addToFavoriteAction(book));
    } else {
      setIsShowLogin(true);
    }
  };

  return (
    <div className={`book  ${isBlackTheme ? "book_black" : ""}`}>
      <div className="container">
        <div className="book__wrapper">
          <div className="book__img">
            <img src={book.image} alt="Book Image" />
          </div>
          <Link
            to={`/new-books/${book?.isbn13}`}
            className="book__title"
            title={book?.title}
          >
            {book?.title}
          </Link>
          <p className="book__price">{book?.price}</p>
          <Button
            title="Add to cart"
            className="book__btn"
            onClick={addToCartHandleClick}
          />
          {isFavorite ? (
            <Button
              className="book__btn"
              title={"Remove from favorite"}
              isOutlineButton={true}
              onClick={addToFavoriteHandleClick}
            />
          ) : (
            <Button
              className="book__btn"
              title={"Add to favorite"}
              isOutlineButton={true}
              onClick={addToFavoriteHandleClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};
