import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { getBlackTheme } from "../../store/selectors";
import { Link } from "react-router-dom";

export const Post = ({ size, post, index }) => {
  const dispatch = useDispatch();
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
      {/* <div className="post__actions">
          <div className="post__likes">
            <img
              src={likeIcon}
              alt="Like"
              className={`post__icon ${
                post.isLiked ? "post__icon_active" : ""
              }`}
              onClick={handleLike}
            />
            <p className="post__likes__info post__like">{post.likesCount}</p>
            <img
              src={dislikeIcon}
              alt="Dislike"
              className={`post__icon post__icon_dislike ${
                post.isDisliked ? "post__icon_active" : ""
              }`}
              onClick={handleDislike}
            />
            <p className="post__likes__info post__dislike">
              {post.dislikesCount}
            </p>
          </div>
          <div className="post__options">
            <img
              src={saveIcon}
              alt="Save"
              className={`post__icon ${
                post.favorites ? "post__icon_active" : ""
              }`}
              onClick={handleFavoriteClick}
            />
            <img
              src={optionsIcon}
              alt="Options"
              className="post__icon"
              onClick={handlePreview}
            />
          </div>
        </div> */}
      {/* <div className="post__line"></div> */}
    </div>
  );
};
