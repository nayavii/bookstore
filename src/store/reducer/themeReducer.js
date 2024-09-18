import { CHANGE_THEME } from "../actions/themeActions";

const initialState = {
  isBlackTheme: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        isBlackTheme: !state.isBlackTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;
