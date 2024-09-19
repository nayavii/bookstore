const URL = "https://studapi.teachmeskills.by";

export const fetchUserInfo = (navigate: (path: string) => void) => {
  const token = localStorage.getItem("accessToken");
  const options: any = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL}/auth/users/me/`, options)
    .then((response) => {
      if (response.status === 401) {
        return refreshToken(URL, options, navigate);
      }

      return response.json();
    })
    .catch((e) => console.log(e));
};

export const refreshToken = (
  receivedUrl: string,
  navigate: (path: string) => void,
  options: any
) => {
  const token = localStorage.getItem("refreshToken");

  return fetch(`${URL}/auth/jwt/refresh/`, {
    method: "POST",
    body: JSON.stringify({ refresh: token }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(async (response) => {
      if (response.status === 401) {
        localStorage.setItem("isAuth", "false");

        if (navigate) {
          navigate("/login");
        } else {
          window.location.href = window.location.origin + "/login";
        }

        return null;
      }

      const token = await response.json();

      localStorage.setItem("accessToken", token.access);

      return fetch(receivedUrl, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token.access}`,
        },
      }).then((res) => res.json());
    })
    .catch((e) => console.log(e));
};
