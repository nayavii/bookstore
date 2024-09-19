import "./index.scss";
import logoWhite from "./images/logo_white.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import youtube from "./images/youtube.png";
import visa from "./images/visa.png";
import mastercard from "./images/mastercard.png";
import paypal from "./images/paypal.png";
import dhl from "./images/dhl.png";
import ups from "./images/ups.png";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";

export const Footer:FC = () => {
  const isBlackTheme = useSelector(getBlackTheme);

  return (
    <footer className={`footer ${isBlackTheme ? "footer_black" : ""}`}>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info">
            <Link to="/" className="footer__logo">
              <img src={logoWhite} alt="" />
            </Link>
            <p className="footer__desc">
              Welcome to our bookstore, your haven for literary treasures. We
              offer a diverse collection of books, ranging from timeless
              classics to the latest bestsellers, catering to readers of all
              ages and interests.
            </p>
            <div className="footer__social">
              <Link to="/" className="footer__social__icon">
                <img src={facebook} alt="Facebook link" />
              </Link>
              <Link to="/" className="footer__social__icon">
                <img src={instagram} alt="Instagram link" />
              </Link>
              <Link to="/" className="footer__social__icon">
                <img src={twitter} alt="Twitter link" />
              </Link>
              <Link to="/" className="footer__social__icon">
                <img src={linkedin} alt="LinkedIn link" />
              </Link>
              <Link to="/" className="footer__social__icon">
                <img src={youtube} alt="Youtube link" />
              </Link>
            </div>
          </div>
          <div className="footer__links">
            <h2 className="footer__title">Quick Links</h2>
            <div className="footer__item">
              <Link to="/" className="footer__btn">
                Home
              </Link>
            </div>
            <div className="footer__item">
              <Link to="/about" className="footer__btn">
                About
              </Link>
            </div>
            <div className="footer__item">
              <Link to="/new-books" className="footer__btn">
                New Books
              </Link>
            </div>
            <div className="footer__item">
              <Link to="/blog/all" className="footer__btn">
                Blog
              </Link>
            </div>
          </div>
          <div className="footer__payment">
            <div className="footer__pay">
              <h2 className="footer__title footer__pay__title">
                Payment options:
              </h2>
              <img src={visa} alt="Visa" className="footer__pay__img" />
              <img
                src={mastercard}
                alt="Mastercard"
                className="footer__pay__img"
              />
              <img src={paypal} alt="Paypal" className="footer__pay__img" />
            </div>
            <div className="footer__shipping">
              <h2 className="footer__title footer__shipping__title">
                We ship with:
              </h2>
              <img src={dhl} alt="DHL" className="footer__shipping__img" />
              <img src={ups} alt="UPS" className="footer__shipping__img" />
            </div>
          </div>
          <div className="footer__contact">
            <h2 className="footer__title">Contact Us</h2>
            <p className="footer__text">
              Do you have any queries or suggestions?{" "}
              <span>yourinfo@gmail.com</span>
            </p>
            <p className="footer__text">
              If you need support? Just give us a call.{" "}
              <span>+34 111 222 333</span>
            </p>
          </div>
        </div>
        <p className="footer__copyright">© Copyright 2024 Bookstore. </p>
      </div>
    </footer>
  );
};
