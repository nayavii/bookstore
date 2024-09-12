
import { Banner } from "../../components/banner";
import { Benefits } from "../../components/benefits";
import { BestBooks } from "../../components/best-books";
import { BestPosts } from "../../components/best-posts";
import { Categories } from "../../components/categories";
import { Discount } from "../../components/discount";
import { Reviews } from "../../components/reviews";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Benefits />
      <BestBooks/>
      <Discount/>
      <Categories/>
      <Reviews/>
      <BestPosts/>
    </>
  );
};
