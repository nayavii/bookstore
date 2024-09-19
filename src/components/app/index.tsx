import React, { FC } from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNewReleasesBooksMiddleware } from "../../store/middleware/bookMiddleware";
import { getPostsMiddleware } from "../../store/middleware/postMiddleware";
import { getUserInfoAction } from "../../store/middleware/userMiddleware";
import { AppDispatch } from "../../store";
import { Header } from "../header";
import { Body } from "../body";
import { Footer } from "../footer";


export const App:FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isShowLogin, setIsShowLogin] = useState<boolean>(false);
  const [isShowRegister, setIsShowRegister] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getNewReleasesBooksMiddleware());
    dispatch(getPostsMiddleware());
    dispatch(getUserInfoAction(dispatch));
  }, []);

  const handleChangeShowLogin = (value: boolean) => {
    setIsShowLogin(value);
  }

  const handleChangeShowRegister = (value: boolean) => {
    setIsShowRegister(value);
  }

  return (
    <BrowserRouter>
      <Header setIsShowLogin={handleChangeShowLogin} />
      <Body
        setIsShowLogin={handleChangeShowLogin}
        isShowLogin={isShowLogin}
        setIsShowRegister={handleChangeShowRegister}
        isShowRegister={isShowRegister}
      />
      <Footer />
    </BrowserRouter>
  );
};
