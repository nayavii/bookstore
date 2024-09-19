import "./index.scss";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlackTheme, getUser } from "../../store/selectors";
import { getUserInfoAction } from "../../store/middleware/userMiddleware";
import { Button } from "../button";
import { AppDispatch } from "../../store";

export const UserProfile:FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const isBlackTheme = useSelector(getBlackTheme);

  const isAuth = JSON.parse(localStorage.getItem("isAuth") || "false");

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserInfoAction(dispatch));
    }
  }, [isAuth]);

  const handleNavigate = (path:string) => {
    navigate(path);
  };

  return (
    <section className={`profile ${isBlackTheme ? "profile_black" : ""}`}>
      <div className="container">
        <div className="profile__wrapper">
          <h1 className="profile__title title">Hello, {user?.username}</h1>

          <div className="profile__actions">
            <Button
              title="My profile"
              className="profile__btn"
              onClick={() => handleNavigate("/myprofile")}
            />
            <Button
              title="My cart"
              className="profile__btn"
              onClick={() => handleNavigate("/cart")}
            />
            <Button
              title="My favorite"
              className="profile__btn"
              onClick={() => handleNavigate("/favorite")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
