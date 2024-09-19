import banner from "./images/banner.jpg";
import { PageBanner } from "../../components/page-banner";
import { Posts } from "../../components/posts";
import { FC } from "react";

export const BlogPage:FC = () => {
  return (
    <>
      <PageBanner img={banner} />
      <Posts />
    </>
  );
};
