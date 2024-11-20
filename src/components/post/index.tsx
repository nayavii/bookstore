import "./index.scss";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlackTheme } from "../../store/selectors";
import { Post as IIPost} from '../../typings/post'

interface IPost {
  post: IIPost
}

export const Post:FC<IPost> = ({ post }) => {
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
