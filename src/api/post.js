import {
  addBookByIdAction,
  addBooksAction
} from "../store/actions/bookActions.js";
import {
  addPostByIdAction,
  addPostsAction,
} from "../store/actions/postActions.js";
import { posts } from "../components/posts/mock-data";

const URL = "https://api.itbook.store/1.0";

export const fetchPosts = (dispatch) => {
  fetch(`${URL}/new`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      dispatch(addPostsAction(posts));
    })
    .catch((error) => {
      console.log(error);
      //dispatch(ERROR_POSTS_ACTION);
    });
};


//посмотреть как правильно добавить посты по id
export const fetchPostById = (dispatch, postId) => {
  fetch(`https://studapi.teachmeskills.by/blog/posts/${postId}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(posts, 'pooosts');
        
        const currentPost = posts.find((post) => post.id === +postId);
        dispatch(addPostByIdAction(currentPost));
      })
      .catch((error) => {
        console.log(error);
        //dispatch(ERROR_POSTS_ACTION);
      });
};
