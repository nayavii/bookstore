import { fetchActivation, fetchRegister, fetchToken } from "../../api/auth";
import { fetchUserInfo } from "../../api/user";
import {
  addUserDataAction,
  POST_USER_DATA_ACTION,
} from "../actions/userActions.js";

export const registerMiddlewareActions = ({
  name,
  email,
  password,
  course_group,
}) => {
  return (dispatch) => {
    dispatch(POST_USER_DATA_ACTION);

    fetchRegister(name, email, password, course_group).then((json) =>
      dispatch(addUserDataAction(json))
    );
  };
};

export const loginMiddlewareActions = ({ email, password }, navigate) => {
  return (dispatch) => {
    fetchToken(email, password).then(() => {
      fetchUserInfo(navigate).then((response) => {
        console.log(response);
        dispatch(addUserDataAction(response));
      });
    });
  };
};

export const activationEmailMiddlewareActions = (uid, token) => {
  return (dispatch) => {
    fetchActivation(uid, token);
  };
};
