import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "..";
import { fetchUserInfo } from "../../api/user";
import { addUserDataAction } from "../actions/userActions";

export const getUserInfoAction = (navigate: NavigateFunction) => {
  return (dispatch: AppDispatch) => {
    fetchUserInfo(navigate).then((response) =>
      dispatch(addUserDataAction(response))
    );
  };
};
