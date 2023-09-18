import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { BASE_ROUTE, MOVIES, SIGN_UP } from "../../utils/constants";
import * as mainApi from "../../utils/MainApi";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import AuthForm from "../AuthForm/AuthForm";

function Login(isLoggedIn, setIsLoggedIn) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate(BASE_ROUTE);
  //   }
  // }, [isLoggedIn]);

  function handleLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true);
        navigate(MOVIES);
      })
      .catch((error) => {
        // setIsLoggedIn(false);
        return error === "Ошибка: 400"
          ? console.log("ошибка 1")
          : console.log("ошибка 2");
      });
  }

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation({
      email: "",
      password: "",
    });

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      resetForm={resetForm}
      values={values}
      authTitle={"Рады видеть"}
      authInput={
        <>
          <label className="auth__label">E-mail</label>
          <input
            className="auth__input"
            placeholder=""
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            onChange={handleChange}
            pattern="^\S+@\S+\.\S+$"
            value={values.email || ""}
            required
          />
          <label className="auth__label">Пароль</label>
          <input
            className="auth__input"
            placeholder=""
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
        </>
      }
      authBtnText={"Войти"}
      authQuestion={
        <p className="auth__check">
          Ещё не зарегистрированы?
          <Link to={SIGN_UP} className="auth__link">
            Регистрация
          </Link>
        </p>
      }
    />
  );
}

export default Login;
