import "./index.scss";
import { getBlackTheme } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../button";
import {
  addToCartAction,
  DELETE_FROM_CART_ACTION,
  removeFromCartAction,
} from "../../store/actions/bookActions";

export const CartBook = ({ book }) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromCartAction(book.isbn13));
  };

  const handleIncrease = () => {
    dispatch(addToCartAction(book));
  };

  const handleDecrease = () => {
    if (book.quantity > 1) {
      dispatch(removeFromCartAction(book.isbn13));
    } else {
      handleDelete();
    }
  };

  const totalPrice = parseFloat(book.price.replace('$', '')) * book.quantity;

  return (
    <div className={`cart-book  ${isBlackTheme ? "cart-book_black" : ""}`}>
      <div className="cart-book__wrapper">
        <div className="cart-book__product">
          <div className="cart-book__img">
            <img src={book.image} alt="Book cover" />
          </div>
          <div className="cart-book__product__info">
            <Link
              to={`/new-books/${book?.isbn13}`}
              className="cart-book__title"
              title={book?.title}
            >
              {book?.title}
            </Link>
            <p className="cart-book__product__price">{book?.price}</p>
          </div>
        </div>
        <div className="cart-book__controls">
          <Button
            title="-"
            onClick={handleDecrease}
            className="cart-book__controls__btn"
            isOutlineButton={true}
          />
          <p className="cart-book__quantity">{book.quantity}</p>
          <Button
            title="+"
            onClick={handleIncrease}
            className="cart-book__controls__btn"
            isOutlineButton={true}
          />
        </div>
        <p className="cart-book__totalprice">${totalPrice.toFixed(2)}</p>
        <Button title="Delete" onClick={handleDelete} />
      </div>
    </div>
  );
};
