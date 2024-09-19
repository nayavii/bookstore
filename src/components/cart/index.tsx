import "./index.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlackTheme, getCart } from "../../store/selectors";
import { CartBook } from "../book-cart";
import { Button } from "../button";
import { FC } from "react";

export const Cart:FC = () => {
  const navigate = useNavigate();
  const isBlackTheme = useSelector(getBlackTheme);

  const books = useSelector(getCart) as Book[];

  const handleClick = () => {
    navigate("/new-books");
  };

  const totalPrice = books?.reduce((total, book) => {
    const priceNumber = parseFloat(book.price.replace("$", ""));
    return total + priceNumber * book.quantity;
  }, 0);

  return (
    <section className={`cart ${isBlackTheme ? "cart_black" : ""}`}>
      <div className="container">
        <h1 className="cart__title title">Cart</h1>
        <div className="cart__wrapper">
          <div className="cart__header">
            <p className="cart__text">Product</p>
            <p className="cart__text cart__text__quantity">Quantity</p>
            <p className="cart__text">Subtotal</p>
            <p className="cart__text cart__text__delete">Delete</p>
          </div>
          {books.length === 0 ? (
            <div className="cart__empty">
              <p className="cart__empty__text">Its empty here. Take a look</p>
              <Button
                className="cart__btn"
                title="Go to shop"
                onClick={handleClick}
              />
            </div>
          ) : (
            <>
              <div className="cart__books">
                {books.map((book) => (
                  <CartBook book={book} key={book.isbn13} />
                ))}
              </div>

              <div className="cart__totals">
                <div className="cart__totals__info">
                  <div className="cart__totals__title">Total:</div>
                  <div className="cart__totals__value">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>
                <Button
                  title="Proceed to Checkout"
                  onClick={() => console.log("Proceed to checkout")}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
