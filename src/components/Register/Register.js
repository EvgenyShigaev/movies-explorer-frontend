import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { BASE_ROUTE, SIGN_IN, MOVIES } from "../../utils/constants";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import * as mainApi from "../../utils/MainApi";
import AuthForm from "../AuthForm/AuthForm";

function Register({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(BASE_ROUTE);
    }
  }, [isLoggedIn]);

  function handleRegister({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        handleRedirect({ email, password });
      })
      .catch((error) => {
        return error === "Ошибка: 409" ? console.log(error) : null;
      });
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
        return error === "Ошибка: 400"
        ? console.log("ошибка 1")
        : console.log("ошибка 2");
      });
  }

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation({
      name: "",
      email: "",
      password: "",
    });

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      resetForm={resetForm}
      values={values}
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
            value={values.name || ""}
            required
          />

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
            value={values.email || ""}
            required
          />

          <label className="auth__label">Password</label>
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
