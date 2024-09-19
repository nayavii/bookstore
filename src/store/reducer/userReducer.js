import {
  LOGOUT,
  POST_USER_DATA,
  RECEIVED_TOKEN,
  RECEIVED_USER_DATA,
} from "../actions/userActions";

const initialState = {
  user: {
    content: null,
    loading: false,
    loaded: false,
    errors: {},
  },
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };

    case RECEIVED_USER_DATA:
      const isError = !action.user?.id;
      return {
        ...state,
        user: {
          ...state.user,
          content: action.payload,
          loading: false,
          loaded: true,
          errors: isError ? action.payload : {},
        },
      };

    case RECEIVED_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: {
          ...state.user,
          content: null,
        },
      };

    default:
      return initialState;
  }
};

export default userReducer;
