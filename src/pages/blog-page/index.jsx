import { Discount } from "../../components/discount";
import { PageBanner } from "../../components/page-banner";
import { Posts } from "../../components/posts";
import banner from './images/banner.jpg'

export const BlogPage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <Posts />
    </>
  );
};
