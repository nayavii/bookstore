import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "..";
import { fetchActivation, fetchRegister, fetchToken } from "../../api/auth";
import { fetchUserInfo } from "../../api/user";
import {
  addUserDataAction,
  POST_USER_DATA_ACTION,
} from "../actions/userActions";

interface IUser {
  name: string;
  email: string;
  password: string;
  course_group: string;
}

export const registerMiddlewareActions = ({
  name,
  email,
  password,
  course_group,
}: IUser) => {
  return (dispatch: AppDispatch) => {
    dispatch(POST_USER_DATA_ACTION);

    fetchRegister(name, email, password, course_group).then((json) =>
      dispatch(addUserDataAction(json))
    );
  };
};

interface ILoginPayload {
  email: string;
  password: string;
}

export const loginMiddlewareActions = (
  { email, password }: ILoginPayload,
  navigate: NavigateFunction
) => {
  return (dispatch: AppDispatch) => {
    fetchToken(email, password).then(() => {
      fetchUserInfo(navigate).then((response) => {
        console.log(response);
        dispatch(addUserDataAction(response));
      });
    });
  };
};

export const activationEmailMiddlewareActions = (uid?: string, token?: string) => {
  return (dispatch: AppDispatch) => {
    fetchActivation(uid, token);
  };
};
