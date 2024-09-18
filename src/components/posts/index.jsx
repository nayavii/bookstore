import "./index.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlackTheme, getPosts } from "../../store/selectors";
import { getPostsMiddleware } from "../../store/middleware/postMiddleware";
import { Post } from "../post";

export const Posts = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsMiddleware());
  }, []);

  const posts = useSelector(getPosts);
  return (
    <section className={`posts ${isBlackTheme ? "posts_black" : ""}`}>
      <div className="container">
        <h1 className="posts__title title">Posts</h1>
        <div className="posts__wrapper">
          {posts?.map((post, index) => {
            return <Post post={post} index={index} key={post.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
