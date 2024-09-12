import "./index.scss";
import { Post } from "../post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlackTheme, getPosts } from "../../store/selectors";
import { getPostsMiddleware } from "../../store/middleware/postMiddleware";

export const Posts = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(changeTabAction(filter));

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
