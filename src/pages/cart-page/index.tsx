import banner from "./images/banner.jpg";
import { BestBooks } from "../../components/best-books";
import { Cart } from "../../components/cart";
import { PageBanner } from "../../components/page-banner";
import { FC } from "react";

export const CartPage:FC = () => {
  return (
    <>
      <PageBanner img={banner} />
      <Cart />
      <BestBooks />
    </>
  );
};
