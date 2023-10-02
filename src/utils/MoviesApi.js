import { MOVIES_URL } from "./constants";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
};

export const getAllMovies = () => {
  return fetch(`${MOVIES_URL}`, {}).then((res) => {
    return checkResponse(res);
  });
};
