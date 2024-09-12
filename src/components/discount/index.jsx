import "./index.scss";
import books from "./images/books.png";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";
import { CountDown } from "../timer";

export const Discount = () => {
  const navigate = useNavigate();
  const isBlackTheme = useSelector(getBlackTheme);

  const handleClick = () => {
    navigate("new-books");
  };

  return (
    <section className={`discount ${isBlackTheme ? 'discount_black' : ''}`}>
      <div className="container">
        <div className="discount__wrapper">
          <div className="discount__img">
            <img src={books} alt="books" />
          </div>
          <div className="discount__info">
            <h2 className="discount__title">
              30% Discount on all items. Hurry Up !!!
            </h2>
            <CountDown hours={16} minutes={0} />
            <Button
              title="Shop now"
              className="discount__btn"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
