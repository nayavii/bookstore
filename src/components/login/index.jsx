import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";

import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { Register } from "../register";

import { useNavigate } from "react-router-dom";
import { loginMiddlewareActions } from "../../store/middleware/authMiddleware";
import { getUserInfoAction } from "../../store/middleware/userMiddleware";

export const Login = ({ setIsShowRegister, setIsShowLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isBlackTheme = useSelector(getBlackTheme);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  console.log(values);

  const inputRefName = useRef(null); // {current: null}

  useEffect(() => {
    inputRefName.current.focus();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  const handleLogin = () => {
    dispatch(loginMiddlewareActions(values, navigate));
    dispatch(getUserInfoAction(navigate));
    setIsShowLogin(false);
    navigate("/profile");
  };

  const handleRegister = () => {
    setIsShowRegister(true);
    setIsShowLogin(false);
  };

  return (
    <div className={`login ${isBlackTheme ? "login_black" : ""}`}>
      <div className="container">
        <div className="login__wrapper">
          <h2 className="login__title title">Login</h2>
          <label className="login__label">
            Your email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`login__input ${
                isBlackTheme ? "input_black" : "input"
              }`}
              onInput={handleChange}
              ref={inputRefName}
            />
          </label>

          <label className="login__label">
            Your password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={`login__input ${
                isBlackTheme ? "input_black" : "input"
              }`}
              onInput={handleChange}
            />
          </label>
          <div className="login__btns">
            <Button
              className="login__btn"
              title={"Cancel"}
              isOutlineButton={true}
              onClick={handleClose}
            />

            <Button
              className="login__btn"
              title={"Login"}
              onClick={handleLogin}
            />
          </div>

          <p className="login__text">
            No account? No problem. Click on
            <span onClick={handleRegister} className="login__link">
              Sing Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
