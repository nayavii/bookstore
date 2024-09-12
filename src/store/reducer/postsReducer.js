import {
  ADD_POST,
  DELETE_POST,
  RECEIVED_POSTS,
  REQUEST_POSTS,
} from "../actions/postActions.js";

const initialState = {
  posts: {
    content: [],
    loading: false,
    loaded: false,
  },
  post: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {


    case REQUEST_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: true,
          loaded: false,
          error: null,
        },
      };

    case RECEIVED_POSTS:
      return {
        ...state,
        posts: {
          content: action.payload,
          loading: false,
          loaded: true,
        },
      };

    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };

    case DELETE_POST:
      return {
        ...state,
        post: null,
      };

    default:
      return initialState;
  }
};

export default postsReducer;
