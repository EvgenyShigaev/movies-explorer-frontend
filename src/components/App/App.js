import { React, useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as mainApi from "../../utils/MainApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Navigation from "../Navigation/Navigation";
import Page404 from "../Page404/Page404";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [displayError, setDisplayError] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkToken() {
    if (token) {
      try {
        const res = await mainApi.checkToken(token);
        if (res) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(err.status);
      }
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      mainApi.getUserData().then((user) => {
        setIsLoading(false);
        setCurrentUser(user);
      });
      mainApi
        .getAllCards()
        .then((res) => {
          setSavedMovies(res.reverse());
        })
        .catch((err) => {
          console.log(err.status);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  const handleLikeCard = (card) => {
    mainApi
      .likeMovie(card)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteCard = (card) => {
    mainApi
      .deleteMovie(card._id)
      .then(() => {
        setSavedMovies((cards) => cards.filter((i) => i._id !== card._id));
      })
      .catch((err) => console.log(err));
  };

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate(BASE_ROUTE);
  }

  useEffect(() => {
    if (currentUser) {
      setDisplayError("");
    }
  }, [currentUser, navigate]);

  function handleAuthError(err) {
    if (err === "Ошибка: 401") {
      setDisplayError("Вы ввели неверный логин или пароль");
    } else if (err === "Ошибка: 409") {
      setDisplayError("Пользователь с таким e-mail уже существует");
    } else if (err === "Ошибка: 500") {
      setDisplayError("Ошибка сервера");
    } else {
      setDisplayError("Выполнено некорректное действие");
      console.log(err);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser || ""}>
      <div className="app">
        {isLoggedIn ? (
          <Navigation />
        ) : pathname === SIGN_UP ? null : pathname === SIGN_IN ? null : (
          <Header />
        )}

        <Routes>
          <Route path={BASE_ROUTE} element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path={SIGN_IN}
            element={
              <Login
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setIsLoggedIn={setIsLoggedIn}
                displayError={displayError}
                handleAuthError={handleAuthError}
              />
            }
          />

          <Route
            path={SIGN_UP}
            element={
              <Register
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setIsLoggedIn={setIsLoggedIn}
                displayError={displayError}
                handleAuthError={handleAuthError}
              />
            }
          />

          <Route
            path={MOVIES}
            element={
              <ProtectedRoute
                element={Movies}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                savedMovies={savedMovies}
                onAddCard={handleLikeCard}
                onDltCard={handleDeleteCard}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path={SAVED_MOVIES}
            element={
              <ProtectedRoute
                element={SavedMovies}
                savedMovies={savedMovies}
                onDltCard={handleDeleteCard}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path={PROFILE}
            element={
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                onLogout={handleLogout}
                displayError={displayError}
                setDisplayError={setDisplayError}
                handleAuthError={handleAuthError}
              />
            }
          />

          <Route path={ERROR_404} element={<Page404 />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
