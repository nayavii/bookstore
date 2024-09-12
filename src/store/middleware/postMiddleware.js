import { fetchPostById, fetchPosts } from "../../api/post";
import { REQUEST_POSTS_ACTION } from "../actions/postActions";

export const getPostsMiddleware = () => {
  return (dispatch) => {
    dispatch(REQUEST_POSTS_ACTION);
    fetchPosts(dispatch);
  };
};

export const getPostsByIdMiddleware = (postId) => {
  return (dispatch) => {
    fetchPostById(dispatch, postId);
  };
};