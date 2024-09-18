import banner from "./images/banner.jpg";
import { BestBooks } from "../../components/best-books";
import { FavoriteBooks } from "../../components/favorites-books";
import { PageBanner } from "../../components/page-banner";

export const FavoritePage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <FavoriteBooks />
      <BestBooks />
    </>
  );
};
