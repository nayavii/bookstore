import { BestBooks } from "../../components/best-books";
import { BestPosts } from "../../components/best-posts";
import { BookInfo } from "../../components/book-info";
import { PageBanner } from "../../components/page-banner";
import { PostInfo } from "../../components/post-info";
import banner from "./images/banner.jpg";

export const PostInfoPage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <PostInfo />
      <BestPosts/>
    </>
  );
};
