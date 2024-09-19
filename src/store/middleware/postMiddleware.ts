import { AppDispatch } from "..";
import { fetchPostById, fetchPosts } from "../../api/post";
import { REQUEST_POSTS_ACTION } from "../actions/postActions";

export const getPostsMiddleware = () => {
  return (dispatch: AppDispatch) => {
    dispatch(REQUEST_POSTS_ACTION);
    fetchPosts(dispatch);
  };
};

export const getPostsByIdMiddleware = (postId: any) => {
  return (dispatch: AppDispatch) => {
    fetchPostById(dispatch, postId);
  };
};
