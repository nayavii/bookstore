import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="notFound">
      <div className="container">
        <h1 className="notFound__title title">404</h1>
        <p className="notFound__text">Page not found</p>
        <Button
          title="Back to home"
          onClick={handleClick}
          className="notFound__btn"
        />
      </div>
    </section>
  );
};
