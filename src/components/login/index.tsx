import "./index.scss";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlackTheme } from "../../store/selectors";
import { loginMiddlewareActions } from "../../store/middleware/authMiddleware";
import { getUserInfoAction } from "../../store/middleware/userMiddleware";
import { Button } from "../button";
import { AppDispatch } from "../../store";

interface ILogin {
  setIsShowRegister: (value: boolean) => void;
  setIsShowLogin: (value: boolean) => void;
}

export const Login:FC<ILogin> = ({ setIsShowRegister, setIsShowLogin }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isBlackTheme = useSelector(getBlackTheme);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const inputRefName = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRefName.current) {
      inputRefName.current.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setError("");
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  const validateEmail = (email: string) => {
    return email.includes("@") && email.includes(".");
  };

  const handleLogin = () => {
    if (!values.email || !values.password) {
      setError("Please fill in both fields.");
    } else if (!validateEmail(values.email)) {
      setError("Please enter a valid email.");
    } else if (values.password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
      dispatch(loginMiddlewareActions(values, navigate));
      dispatch(getUserInfoAction(navigate));
      setIsShowLogin(false);
      navigate("/profile");
    }
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
          {error && <p className="login__error">{error}</p>}{" "}
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
