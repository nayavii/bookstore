import { addUserDataAction } from "../store/actions/themeActions";

const URL = "https://studapi.teachmeskills.by";

export const fetchToken = (email, password) => {
  return fetch(`${URL}/auth/jwt/create/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.access && response.refresh) {
        localStorage.setItem("accessToken", response.access);
        localStorage.setItem("refreshToken", response.refresh);
        localStorage.setItem("isAuth", true);
      }
    })
    .catch((error) => console.log(error));
};

export const fetchActivation = (uid, token) => {
  return fetch(`${URL}/auth/users/activation`, {
    method: "POST",
    body: JSON.stringify({
      uid,
      token,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const fetchRegister = (name, email, password, course_group) => {
  return fetch(`${URL}/auth/users/`, {
    method: "POST",
    body: JSON.stringify({
      username: name,
      email,
      password,
      course_group,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
