import banner from "./images/banner.jpg";
import { BestPosts } from "../../components/best-posts";
import { PageBanner } from "../../components/page-banner";
import { PostInfo } from "../../components/post-info";

export const PostInfoPage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <PostInfo />
      <BestPosts />
    </>
  );
};
