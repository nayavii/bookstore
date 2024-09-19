import "./index.scss";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme, getPosts } from "../../store/selectors";
import { getPostsMiddleware } from "../../store/middleware/postMiddleware";
import { Post } from "../post";
import { AppDispatch } from "../../store";


export const Posts:FC = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(getPosts) as Post[];

  useEffect(() => {
    dispatch(getPostsMiddleware());
  }, []);


  return (
    <section className={`posts ${isBlackTheme ? "posts_black" : ""}`}>
      <div className="container">
        <h1 className="posts__title title">Posts</h1>
        <div className="posts__wrapper">
          {posts?.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
