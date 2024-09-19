import banner from "./images/banner.jpg";
import { FC } from "react";
import { Books } from "../../components/books";
import { PageBanner } from "../../components/page-banner";

interface INewReleasePage {
  setIsShowLogin: (value: boolean) => void;
}

export const NewReleasePage:FC<INewReleasePage> = ({ setIsShowLogin }) => {
  return (
    <>
      <PageBanner img={banner} />
      <Books setIsShowLogin={setIsShowLogin} />
    </>
  );
};
