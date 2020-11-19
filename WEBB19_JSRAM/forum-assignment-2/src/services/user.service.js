const LOGIN_URL = `https://lab.willandskill.eu/api/v1/auth/api-token-auth/`;
const POSTS_URL = `https://lab.willandskill.eu/api/v1/forum/posts/`;

const login = async (user) => {
  return fetch(LOGIN_URL, requestOptions("POST", null, user))
    .then(handleResponse)
    .then((token) => {
      return token;
    });
};

const register = () => {};

const getAllPosts = (token) => {
  return fetch(POSTS_URL, requestOptions("GET", token))
    .then(handleResponse)
    .then((data) => {
      return data.results;
    });
};

const requestOptions = (method, token, payload) => {
  const body = JSON.stringify(payload);
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body,
  };
  return options;
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject({ message: error, code: response.status });
    }

    return data;
  });
}

export const userService = {
  login,
  register,
  getAllPosts,
};
