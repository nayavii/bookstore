import banner from "./images/banner.jpg";
import { BestBooks } from "../../components/best-books";
import { BookInfo } from "../../components/book-info";
import { PageBanner } from "../../components/page-banner";

export const BookInfoPage = ({ setIsShowLogin }) => {
  return (
    <>
      <PageBanner img={banner} />
      <BookInfo setIsShowLogin={setIsShowLogin} />
      <BestBooks />
    </>
  );
};
