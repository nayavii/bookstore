import { BrowserRouter } from "react-router-dom";
import { Header } from "../header";
import { Body } from "../body";
import { useEffect, useState } from "react";
import { getNewReleasesBooksMiddleware } from "../../store/middleware/bookMiddleware.js";
import { getPostsMiddleware } from "../../store/middleware/postMiddleware.js";
import { useDispatch } from "react-redux";
import { getUserInfoAction } from "../../store/middleware/userMiddleware.js";
import { Footer } from "../footer/index.jsx";

export const App = () => {
  const dispatch = useDispatch();
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);

  useEffect(() => {
    dispatch(getNewReleasesBooksMiddleware());
    dispatch(getPostsMiddleware());
    dispatch(getUserInfoAction());
  }, []);

  return (
    <BrowserRouter>
      <Header setIsShowLogin={setIsShowLogin} />
      <Body
        setIsShowLogin={setIsShowLogin}
        isShowLogin={isShowLogin}
        setIsShowRegister={setIsShowRegister}
        isShowRegister={isShowRegister}
      />
      <Footer/>
    </BrowserRouter>
  );
};
