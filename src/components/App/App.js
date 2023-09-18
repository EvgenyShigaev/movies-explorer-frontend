import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Page404 from "../Page404/Page404";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as mainApi from "../../utils/MainApi";
import {
  BASE_ROUTE,
  MOVIES,
  SAVED_MOVIES,
  PROFILE,
  SIGN_IN,
  SIGN_UP,
  ERROR_404,
} from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const token = localStorage.getItem("token");

  async function checkToken() {
    if (token) {
      try {
        const res = await mainApi.checkToken(token);
        if (res) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(`Ошибка в App: ${err.status}`);
      }
    }
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser || ""}>
      <div className="app">
        <Routes>
          <Route path={BASE_ROUTE} element={<Main />} />
          <Route
            path={MOVIES}
            element={<ProtectedRoute element={<Movies />} />}
          />
          <Route
            path={SAVED_MOVIES}
            element={<ProtectedRoute element={<SavedMovies />} />}
          />
          <Route
            path={PROFILE}
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route
            path={SIGN_IN}
            element={<Login />}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Route
            path={SIGN_UP}
            element={<Register />}
            isLoggedIn={isLoggedIn}
          />
          <Route path={ERROR_404} element={<Page404 />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
