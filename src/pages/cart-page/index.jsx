import { BestBooks } from "../../components/best-books";
import { Cart } from "../../components/cart";
import { PageBanner } from "../../components/page-banner";
import banner from "./images/banner.jpg";

export const CartPage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <Cart/>
      <BestBooks/>
    </>
  );
};
