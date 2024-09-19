import "./index.scss";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";
import { registerMiddlewareActions } from "../../store/middleware/authMiddleware";
import { Button } from "../button";
import { AppDispatch } from "../../store";

interface IRegister {
  setIsShowRegister: (value: boolean) => void;
  setIsShowLogin: (value: boolean) => void;
}

export const Register:FC<IRegister> = ({ setIsShowRegister, setIsShowLogin }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isBlackTheme = useSelector(getBlackTheme);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    course_group: "",
  });

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
  };

  const handleClose = () => {
    setIsShowRegister(false);
  };

  const handleLogin = () => {
    setIsShowRegister(false);
    setIsShowLogin(true);
  };

  const handleRegister = () => {
    dispatch(registerMiddlewareActions(values));
  };

  return (
    <div className={`register ${isBlackTheme ? "register_black" : ""}`}>
      <div className="container">
        <div className="register__wrapper">
          <h2 className="register__title title">Register</h2>
          <label className="register__label">
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`register__input ${
                isBlackTheme ? "input_black" : "input"
              }`}
              onInput={handleChange}
              ref={inputRefName}
            />
          </label>
          <label className="register__label">
            Your email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`register__input ${
                isBlackTheme ? "input_black" : "input"
              }`}
              onInput={handleChange}
              ref={inputRefName}
            />
          </label>

          <label className="register__label">
            Your password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={`register__input ${
                isBlackTheme ? "input_black" : "input"
              }`}
              onInput={handleChange}
            />
          </label>
          <label className="register__label">
            Your Group
            <input
              type="text"
              name="course_group"
              placeholder="Enter your course group"
              className={`register__input ${
                isBlackTheme ? "input_black" : "input"
              }`}
              onInput={handleChange}
              ref={inputRefName}
            />
          </label>
          <div className="register__btns">
            <Button
              className="register__btn"
              title={"Cancel"}
              isOutlineButton={true}
              onClick={handleClose}
            />

            <Button
              className="register__btn"
              title={"Register"}
              onClick={handleRegister}
            />
          </div>

          <p className="register__text">
            Already have an account? Click on
            <span onClick={handleLogin} className="register__link">
              Sing in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
