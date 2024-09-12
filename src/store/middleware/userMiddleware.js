import { fetchUserInfo } from "../../api/user";
import { addUserDataAction } from "../actions/userActions";

export const getUserInfoAction = (navigate) => {
  return (dispatch) => {
    fetchUserInfo(navigate).then((response) => dispatch(addUserDataAction(response)));
  };
};