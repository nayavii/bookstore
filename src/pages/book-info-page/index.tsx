import banner from "./images/banner.jpg";
import { FC } from "react";
import { BestBooks } from "../../components/best-books";
import { BookInfo } from "../../components/book-info";
import { PageBanner } from "../../components/page-banner";

interface IBookInfo {
  setIsShowLogin: (value: boolean) => void;
}

export const BookInfoPage:FC<IBookInfo> = ({ setIsShowLogin }) => {
  return (
    <>
      <PageBanner img={banner} />
      <BookInfo setIsShowLogin={setIsShowLogin} />
      <BestBooks />
    </>
  );
};
