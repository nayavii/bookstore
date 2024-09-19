import "./index.scss";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activationEmailMiddlewareActions } from "../../store/middleware/authMiddleware";
import { AppDispatch } from "../../store";

interface IActivationEmail {
  setIsShowLogin: (value: boolean) => void
}

export const ActivationEmailPage:FC<IActivationEmail> = ({ setIsShowLogin }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { uid, token } = useParams<{ uid?: any; token?: string }>();

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  useEffect(() => {
    dispatch(activationEmailMiddlewareActions(uid, token));
  }, []);

  return (
    <div className="active-email">
      <div className="container">
        <div className="active-email__wrapper">
          <h2 className="active-email__title title">Email confirm</h2>
          <p className="active-email__text text">
            {" "}
            Congratulations, your email is confirmed.
          </p>
          <p className="active-email__text">
            {" "}
            You can log in{" "}
            <span onClick={handleLogin} className="active-email__link">
              Sing In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
