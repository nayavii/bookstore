import { Books } from "../../components/books";
import { BooksNavBar } from "../../components/books-nav-bar";
import { Discount } from "../../components/discount";
import { PageBanner } from "../../components/page-banner";
import banner from './images/banner.jpg'

export const NewReleasePage = ({setIsShowLogin}) => {
  return (
    <>
      <PageBanner img={banner} />
      
      <Books setIsShowLogin={setIsShowLogin} />

    </>
  );
};
