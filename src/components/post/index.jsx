import "./index.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlackTheme } from "../../store/selectors";

export const Post = ({ post }) => {
  const isBlackTheme = useSelector(getBlackTheme);

  return (
    <div className={`post ${isBlackTheme ? "post_black" : ""}`}>
      <div className="post__wrapper">
        <div className="post__img">
          <img src={post.image} alt="Image" />
        </div>
        <div className="post__info">
          <Link to={`${post?.id}`} className="post__title">
            {post?.title}
          </Link>
          <p className="post__text">{post?.text}</p>
        </div>
      </div>
    </div>
  );
};
