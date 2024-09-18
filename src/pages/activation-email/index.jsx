import "./index.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activationEmailMiddlewareActions } from "../../store/middleware/authMiddleware";

export const ActivationEmailPage = ({ setIsShowLogin }) => {
  const dispatch = useDispatch();
  const { uid, token } = useParams();

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
