import "./index.scss";
import { Link } from "react-router-dom";
import cover_1 from "./images/romance.jpg";
import cover_2 from "./images/lifestyle.jpg";
import cover_3 from "./images/recipe.jpg";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";

export const Categories = () => {
  const isBlackTheme = useSelector(getBlackTheme)

  return (
    <div className={`categories ${isBlackTheme ? 'categories_black' : ''}`}>
      <div className="container">
        <h2 className="categories__title title">Categories</h2>
        <div className="categories__wrapper">
          <Link to="/new-books" className="categories__item">
            <img src={cover_1} alt="Cover of category" />
            <p className="categories__text">Romance</p>
          </Link>
          <Link to="/new-books" className="categories__item">
            <img src={cover_2} alt="Cover of category" />
            <p className="categories__text">LifeStyle</p>
          </Link>
          <Link to="/new-books" className="categories__item">
            <img src={cover_3} alt="Cover of category" />
            <p className="categories__text">Recipe</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
