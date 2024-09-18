import banner from "./images/banner.jpg";
import { PageBanner } from "../../components/page-banner";
import { Posts } from "../../components/posts";

export const BlogPage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <Posts />
    </>
  );
};
