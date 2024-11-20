import { Post } from '../../typings/post';

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVED_POSTS = "RECEIVED_POSTS";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

export const REQUEST_POSTS_ACTION = { type: REQUEST_POSTS };

export const addPostsAction = (posts: Post[]) => ({
  type: RECEIVED_POSTS,
  payload: posts,
});

export const addPostByIdAction = (post: Post) => ({
  type: ADD_POST,
  payload: post,
});
