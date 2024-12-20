import "./index.scss";
import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsMiddleware } from "../../store/middleware/postMiddleware";
import { getBlackTheme, getPosts } from "../../store/selectors";
import { Button } from "../button";
import { AppDispatch } from "../../store";
import { Post } from '../../typings/post';

export const BestPosts:FC = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const navigate = useNavigate();
  const posts = useSelector(getPosts) as Post[];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPostsMiddleware());
  }, []);

  const handleClick = () => {
    navigate("/blog/all");
  };

  return (
    <section className={`best-posts ${isBlackTheme ? "best-posts_black" : ""}`}>
      <div className="container">
        <div className="best-posts__header">
          <h2 className="best-posts__title title">Best Posts</h2>
          <Button title="View all" onClick={handleClick} />
        </div>
        <div className="best-posts__posts">
          {posts.map((post, index) => {
            if (index > 2 && index <= 5) {
              return (
                <div className="best-posts__wrapper" key={post.id}>
                  <div className="best-posts__img">
                    <img src={post.image} alt="" />
                  </div>
                  <Link
                    to={`/blog/all/${post?.id}`}
                    className="best-posts__title-post"
                  >
                    {post?.title}
                  </Link>
                  <p className="best-posts__text">{post?.text}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
