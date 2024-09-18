import banner from "./images/banner.jpg";
import { Books } from "../../components/books";
import { PageBanner } from "../../components/page-banner";

export const NewReleasePage = ({ setIsShowLogin }) => {
  return (
    <>
      <PageBanner img={banner} />
      <Books setIsShowLogin={setIsShowLogin} />
    </>
  );
};
