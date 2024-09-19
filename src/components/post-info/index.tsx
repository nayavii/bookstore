import "./index.scss";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByIdMiddleware } from "../../store/middleware/postMiddleware";
import { getBlackTheme, getPost } from "../../store/selectors";
import { Button } from "../button";
import { AppDispatch } from "../../store";

export const PostInfo:FC = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = useSelector(getPost);

  useEffect(() => {
    dispatch(getPostsByIdMiddleware(postId));
  }, [postId]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className={`post-info ${isBlackTheme ? "post-info_black" : ""}`}>
      <div className="container">
        <div className="post-info__header">
          <div className="post-info__left">
            <h2 className="post-info__title title">{post?.title}</h2>
            <p className="post-info__author">{post?.author}</p>
          </div>

          <Button title={"Back"} onClick={handleBack} />
        </div>
        <div className="post-info__wrapper">
          <div className="post-info__img">
            <img src={post?.image} alt="" />
          </div>

          <p className="post-info__text">{post?.text}</p>
        </div>
      </div>
    </section>
  );
};
