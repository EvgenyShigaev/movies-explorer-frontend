import { BASE_URL, MOVIES, SIGNIN, SIGNUP, USERS_ME } from "../utils/constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}${SIGNUP}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}${SIGNIN}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getUserData = () => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}${USERS_ME}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const editUserInfo = (data) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}${USERS_ME}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getAllCards = () => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}${MOVIES}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const likeMovie = (movie) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}${MOVIES}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = (id) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}${MOVIES}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}${USERS_ME}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};
