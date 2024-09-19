import "./index.scss";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getBlackTheme,
  getFavoriteBooks,
} from "../../store/selectors";
import { Book } from "../book";
import { Button } from "../button";


interface IFavoriteBooksProps {
  setIsShowLogin: (value: boolean) => void;
}

export const FavoriteBooks:FC<IFavoriteBooksProps> = ({ setIsShowLogin }) => {
  const navigate = useNavigate();
  const isBlackTheme = useSelector(getBlackTheme);
  const favoriteBooks = useSelector(getFavoriteBooks) as Book[];

  const handleClick = () => {
    navigate("/new-books");
  };

  return (
    <>
      <section className={`fav-books ${isBlackTheme ? "fav-books_black" : ""}`}>
        <div className="container">
          <h1 className="fav-books__title title">My favorite books</h1>
          {favoriteBooks.length === 0 ? (
            <div className="fav-books__empty">
              <p className="fav-books__text">Its empty here. Take a look</p>
              <Button
                className="fav-books__btn"
                title="Go to shop"
                onClick={handleClick}
              />
            </div>
          ) : (
            <div className="fav-books__wrapper">
              {favoriteBooks?.map((book) => {
                return (
                  <Book
                    book={book}
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
