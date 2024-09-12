export const POST_USER_DATA = "POST_USER_DATA";
export const RECEIVED_USER_DATA = "RECEIVED_USER_DATA";
export const RECEIVED_TOKEN = "RECEIVED_TOKEN";
export const LOGOUT = "LOGOUT";

export const POST_USER_DATA_ACTION = { type: POST_USER_DATA };
export const LOGOUT_ACTION = { type: LOGOUT };

export const addUserDataAction = (user) => ({
  type: RECEIVED_USER_DATA,
  payload: user,
});

export const getToken = (token) => ({ type: RECEIVED_TOKEN, payload: token });
