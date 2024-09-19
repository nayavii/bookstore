import banner from "./images/banner.jpg";
import { FC } from "react";
import { About } from "../../components/about";
import { BestBooks } from "../../components/best-books";
import { PageBanner } from "../../components/page-banner";
import { Reviews } from "../../components/reviews";

export const AboutPage:FC = () => {
  return (
    <>
      <PageBanner img={banner} />
      <About />
      <Reviews />
      <BestBooks />
    </>
  );
};
