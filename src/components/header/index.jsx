import "./index.scss";
import searchIcon from "./images/search_icon.svg";
import searchWhiteIcon from "./images/search_icon_white.svg";
import personIcon from "./images/person_icon.svg";
import personWhiteIcon from "./images/person_icon_white.svg";
import shopIcon from "./images/bag.svg";
import shopWhiteIcon from "./images/bag_white.svg";
import logo from "./images/logo.png";
import logoWhite from "./images/logo_white.png";
import heart from "./images/heart.png";
import heartWhite from "./images/heart_white.png";
import menuIcon from "./images/menu__burger__icon.svg";
import closeIcon from "./images/close_icon.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ModeButton } from "../mode-btn";
import {
  getBlackTheme,
  getCart,
  getFavoriteBooks,
} from "../../store/selectors";
import { LOGOUT_ACTION } from "../../store/actions/userActions";
import { Button } from "../button";

export const Header = ({ setIsShowLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isBlackTheme = useSelector(getBlackTheme);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const cart = useSelector(getCart);
  const favoriteBooks = useSelector(getFavoriteBooks);

  const handleLogout = () => {
    dispatch(LOGOUT_ACTION);
    localStorage.setItem("isAuth", false);
    localStorage.setItem("accessToken", null);
    localStorage.setItem("refreshToken", null);
    navigate("/");
  };

  const getProfile = () => {
    if (isAuth) {
      navigate("/profile");
    } else {
      setIsShowLogin(true);
    }
  };

  const handleSerachClick = () => {
    navigate("new-books");
  };

  const handleLoginClick = () => {
    setIsShowLogin(true);
  };

  const handleCartClick = () => {
    if (isAuth) {
      navigate("/cart");
    } else {
      setIsShowLogin(true);
    }
  };

  const handleFavoriteClick = () => {
    if (isAuth) {
      navigate("/favorite");
    } else {
      setIsShowLogin(true);
    }
  };

  const burgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isBlackTheme ? "header_black" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img src={isBlackTheme ? logoWhite : logo} alt="" />
          </Link>

          <div className={`header__menu__wrapper ${isMenuOpen ? "open" : ""}`}>
            <nav className="header__menu">
              <ul className="header__list">
                <li className="header__item">
                  <Link to="/" className="header__btn">
                    HOME
                  </Link>
                </li>
                <li className="header__item">
                  <Link to="/about" className="header__btn">
                    ABOUT
                  </Link>
                </li>
                <li className="header__item">
                  <Link to="/new-books" className="header__btn">
                    NEW BOOKS
                  </Link>
                </li>
                <li className="header__item">
                  <Link to="/blog/all" className="header__btn">
                    BLOG
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="header__actions">
              <img
                src={isBlackTheme ? searchWhiteIcon : searchIcon}
                alt="search"
                className="header__icon"
                onClick={handleSerachClick}
              />
              <img
                src={isBlackTheme ? personWhiteIcon : personIcon}
                alt="profile"
                className="header__icon"
                onClick={getProfile}
              />
              <div className="header__icon-wrapper" onClick={handleCartClick}>
                <img
                  src={isBlackTheme ? shopWhiteIcon : shopIcon}
                  alt="cart"
                  className="header__icon"
                />
                {cart.length > 0 && (
                  <span className="header__icon-badge">{cart.length}</span>
                )}
              </div>
              <div
                className="header__icon-wrapper"
                onClick={handleFavoriteClick}
              >
                <img
                  src={isBlackTheme ? heartWhite : heart}
                  alt="favorite"
                  className="header__icon"
                />
                {favoriteBooks.length > 0 && (
                  <span className="header__icon-badge">
                    {favoriteBooks.length}
                  </span>
                )}
              </div>
              <ModeButton />
            </div>
            {isAuth ? (
              <>
                <Button
                  title="Log out"
                  onClick={handleLogout}
                  isOutlineButton={true}
                  className="header__logout"
                />
              </>
            ) : (
              <>
                <Button title="Sing in" onClick={handleLoginClick} />
              </>
            )}
          </div>

          <div className="header__burger" onClick={burgerMenu}>
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu" />
          </div>
        </div>
      </div>
    </header>
  );
};
