import banner from "./images/banner.jpg";
import { BestBooks } from "../../components/best-books";
import { FavoriteBooks } from "../../components/favorites-books";
import { PageBanner } from "../../components/page-banner";
import { FC } from "react";

interface IFavorite {
  setIsShowLogin: (value: boolean) => void;
}

export const FavoritePage:FC<IFavorite> = ({setIsShowLogin}) => {
  return (
    <>
      <PageBanner img={banner} />
      <FavoriteBooks setIsShowLogin={setIsShowLogin} />
      <BestBooks />
    </>
  );
};
