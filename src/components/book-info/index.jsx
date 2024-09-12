import "./index.scss";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getNewReleasesBookById,
  getNewReleasesBookByIdMiddleware,
} from "../../store/middleware/bookMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import CustomizedTable from "../info-table";
import {
  getBlackTheme,
  getBook,
  getFavoriteBooks,
} from "../../store/selectors";
import {
  addToCartAction,
  addToFavoriteAction,
} from "../../store/actions/bookActions";

export const BookInfo = ({ setIsShowLogin }) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookId } = useParams();
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  console.log(bookId);
  const book = useSelector(getBook);

  const favoriteBooks = useSelector(getFavoriteBooks);

  const isFavorite = favoriteBooks.some(
    (favoriteBook) => favoriteBook.isbn13 === book?.isbn13
  );

  useEffect(() => {
    dispatch(getNewReleasesBookByIdMiddleware(bookId));
  }, [dispatch, bookId]);

  const handleBack = () => {
    navigate(-1);
  };

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
    <section className={`book-info ${isBlackTheme ? "book-info_black" : ""}`}>
      <div className="container">
        <div className="book-info__header">
          <div className="book-info__left">
            <h2 className="book-info__title title">{book?.title}</h2>
            <p className="book-info__subtitle">{book?.subtitle}</p>
          </div>
          <Button title={"Back"} onClick={handleBack} />
        </div>

        <div className="book-info__wrapper">
          <div className="book-info__actions">
            <div className="book-info__img">
              <img src={book?.image} alt="" />
            </div>
            <Button
              className="book-info__btn"
              title={"Add to cart"}
              onClick={addToCartHandleClick}
            />

            {isFavorite ? (
              <Button
                className="book-info__btn"
                title={"Remove from favorite"}
                isOutlineButton={true}
                onClick={addToFavoriteHandleClick}
              />
            ) : (
              <Button
                className="book-info__btn"
                title={"Add to favorite"}
                isOutlineButton={true}
                onClick={addToFavoriteHandleClick}
              />
            )}
          </div>

          <div className="book-info__info">
            <CustomizedTable />
          </div>
        </div>
      </div>
    </section>
  );
};
