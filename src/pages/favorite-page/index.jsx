import { BestBooks } from "../../components/best-books";
import { FavoriteBooks } from "../../components/favorites-books";
import { PageBanner } from "../../components/page-banner";
import banner from './images/banner.jpg'

export const FavoritePage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <FavoriteBooks />
      <BestBooks/>
    </>
  );
};
