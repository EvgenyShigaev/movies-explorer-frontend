import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import * as mainApi from "../../utils/MainApi";
import AuthForm from "../AuthForm/AuthForm";
import { MOVIES } from "../../utils/constants";
import "./Login.css";
import "../Register/Register.css";

function Login({
  setIsLoggedIn,
  setIsLoading,
  isLoading,
  handleAuthError,
  displayError,
}) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: "",
    password: "",
  });

  async function handleLogin({ email, password }) {
    setIsLoading(true);
    try {
      const res = await mainApi.login(email, password);
      setIsLoading(false);
      localStorage.setItem("token", res.token);
      setIsLoggedIn(true);
      navigate(MOVIES);
    } catch (err) {
      handleAuthError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values);
  }

  return (
    <AuthForm
      authTitle={"Рады видеть"}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isLoading={isLoading}
      displayError={displayError}
      isValid={isValid}
      values={values}
      authInput={
        <>
          <label htmlFor="email" className="auth__label">
            E-mail
          </label>
          <input
            className="auth__input"
            placeholder=""
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            pattern="^\S+@\S+\.\S+$"
            value={values?.email || ""}
            required
            onChange={handleChange}
          />
          <span className="auth__error">{errors.email}</span>

          <label htmlFor="name" className="auth__label">
            Пароль
          </label>
          <input
            className="auth__input"
            placeholder=""
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            value={values?.password || ""}
            required
            onChange={handleChange}
          />
          <span className="auth__error">{errors.password}</span>
        </>
      }
      authBtnText={"Войти"}
      authQuestion={
        <p className="auth__check">
          Ещё не зарегистрированы?
          <Link to="/sign-up" className="auth__link">
            Регистрация
          </Link>
        </p>
      }
    />
  );
}

export default Login;
