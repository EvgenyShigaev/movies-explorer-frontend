import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN, MOVIES } from "../../utils/constants";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import * as mainApi from "../../utils/MainApi";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.css";

function Register({
  setIsLoggedIn,
  setIsLoading,
  isLoading,
  handleAuthError,
  displayError,
}) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation({
      name: "",
      email: "",
      password: "",
    });

  async function handleRegister({ name, email, password }) {
    setIsLoading(true);
    try {
      const res = await mainApi.register(name, email, password);
      if (res) {
        handleRedirect({ email, password });
      }
    } catch (err) {
      handleAuthError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleRedirect({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          navigate(MOVIES);
        }
      })
      .catch((error) => {
        setIsLoggedIn(false);
        return console.log(error === "Ошибка: 400");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  return (
    <AuthForm
      onSubmit={handleSubmit}
      resetForm={resetForm}
      values={values}
      onChange={handleChange}
      isLoading={isLoading}
      displayError={displayError}
      method="POST"
      isValid={isValid}
      authTitle={"Добро пожаловать"}
      authInput={
        <>
          <label className="auth__label">Имя</label>
          <input
            className="auth__input"
            placeholder=""
            id="name"
            name="name"
            type="name"
            autoComplete="off"
            pattern="[a-zA-ZАа-яёА-ЯЁ\s\-]{2,30}$"
            onChange={handleChange}
            value={values?.name || ""}
            required
          />

          <span className="auth__error">{errors.name}</span>

          <label className="auth__label">E-mail</label>
          <input
            className="auth__input"
            placeholder=""
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            pattern="^\S+@\S+\.\S+$"
            onChange={handleChange}
            value={values?.email || ""}
            required
          />

          <span className="auth__error">{errors.email}</span>

          <label className="auth__label">Password</label>
          <input
            className="auth__input"
            placeholder=""
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            onChange={handleChange}
            value={values?.password || ""}
            required
          />

          <span className="auth__error">{errors.password}</span>
        </>
      }
      authBtnText={"Зарегистрироваться"}
      authQuestion={
        <p className="auth__check">
          Уже зарегистрированы?
          <Link to={SIGN_IN} className="auth__link">
            Войти
          </Link>
        </p>
      }
    />
  );
}

export default Register;
