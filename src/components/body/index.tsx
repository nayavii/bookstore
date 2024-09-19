import "./index.scss";
import {FC} from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { NewReleasePage } from "../../pages/new-release-page";
import { BookInfoPage } from "../../pages/book-info-page";
import { BlogPage } from "../../pages/blog-page";
import { Login } from "../login";
import { Register } from "../register";
import { ActivationEmailPage } from "../../pages/activation-email";
import { AboutPage } from "../../pages/about-page";
import { PostInfoPage } from "../../pages/post-info-page";
import { UserProfilePage } from "../../pages/user-profile-page";
import { CartPage } from "../../pages/cart-page";
import { NotFound } from "../not-found";
import { FavoritePage } from "../../pages/favorite-page";
import { ProfileInfoPage } from "../../pages/profile-info-page";

interface BodyProps {
  setIsShowLogin: (value: boolean) => void;
  isShowLogin: boolean;
  setIsShowRegister: (value: boolean) => void;
  isShowRegister: boolean;
}

export const Body:FC<BodyProps> = ({
  setIsShowLogin,
  isShowLogin,
  setIsShowRegister,
  isShowRegister,
}) => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/myprofile" element={<ProfileInfoPage />} />
        <Route
          path="/new-books"
          element={<NewReleasePage setIsShowLogin={setIsShowLogin} />}
        />
        <Route
          path="/new-books/:bookId"
          element={<BookInfoPage setIsShowLogin={setIsShowLogin} />}
        />
        <Route path="/blog/:filter" element={<BlogPage />} />
        <Route path="/blog/:filter/:postId" element={<PostInfoPage />} />

        <Route
          path="activate/:uid/:token"
          element={<ActivationEmailPage setIsShowLogin={setIsShowLogin} />}
        />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorite" element={<FavoritePage setIsShowLogin={setIsShowLogin} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {isShowLogin && (
        <Login
          setIsShowRegister={setIsShowRegister}
          setIsShowLogin={setIsShowLogin}
        />
      )}
      
      {isShowRegister && (
        <Register
          setIsShowRegister={setIsShowRegister}
          setIsShowLogin={setIsShowLogin}
        />
      )}
    </section>
  );
};
