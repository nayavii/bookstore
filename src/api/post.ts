import {
  addPostByIdAction,
  addPostsAction,
} from "../store/actions/postActions";
import { posts } from "../components/posts/mock-data";
import { AppDispatch } from "../store/index.js";
import { Post } from '../typings/post';

const URL = "https://api.itbook.store/1.0";

export const fetchPosts = (dispatch: AppDispatch) => {
  fetch(`${URL}/new`)
    .then((response) => response.json())
    .then((response) => {
      dispatch(addPostsAction(posts));
    })
    .catch((error) => {
      console.log(error);
      //dispatch(ERROR_POSTS_ACTION);
    });
};

export const fetchPostById = (dispatch: AppDispatch, postId: number) => {
  fetch(`https://studapi.teachmeskills.by/blog/posts/${postId}`)
    .then((response) => response.json())
    .then((res) => {
      const currentPost = posts.find((post) => post.id === +postId) as Post;
      dispatch(addPostByIdAction(currentPost));
    })
    .catch((error) => {
      console.log(error);
      //dispatch(ERROR_POSTS_ACTION);
    });
};
