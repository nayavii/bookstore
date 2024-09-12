import { About } from "../../components/about";
import { Benefits } from "../../components/benefits";
import { BestBooks } from "../../components/best-books";
import { PageBanner } from "../../components/page-banner";
import { Reviews } from "../../components/reviews";
import banner from './images/banner.jpg'

export const AboutPage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <About/>
      <Reviews/>
      <BestBooks/>

    </>
  );
};
