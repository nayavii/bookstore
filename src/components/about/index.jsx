import "./index.scss";
import image from "./images/image_1.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";
import { Button } from "../button";

export const About = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    navigate("/new-books");
  };

  return (
    <section className={`about ${isBlackTheme ? "about_black" : ""}`}>
      <div className="container">
        <div className="about__header">
          <h2 className="about__title title">About us</h2>
          <Button title="Back" onClick={handleBack} />
        </div>
        <div className="about__wrapper">
          <div className="about__img">
            <img src={image} alt="main image" />
          </div>
          <div className="about__info">
            <h3 className="about__info__title">Best Bookstore of all time</h3>
            <p className="about__info__text">
              Welcome to Bookstore, where a passion for books meets a love for
              community. We offer a diverse collection of bestsellers, timeless
              classics, and hidden gems across all genres, carefully selected to
              inspire and entertain readers of all tastes.
            </p>
            <p className="about__info__text">
              Our bookstore is more than just a place to buy books—it's a space
              where stories come to life. We host book clubs, author signings,
              and community events, creating a vibrant atmosphere for readers to
              connect and share their love of literature.
            </p>
            <p className="about__info__text">
              Whether you're searching for your next great read or simply want
              to explore new ideas, Bookstore is here to guide you on your
              literary journey. Join us and discover a world of stories waiting
              to be told.
            </p>
            <Button
              title="Go to Shop"
              onClick={handleClick}
              className="about__btn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
