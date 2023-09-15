import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

function Register() {
  return (
    <div className="auth">
      <div className="auth__header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <p className="auth__title">Добро пожаловать!</p>
      </div>

      <form className="auth__form" name="register">
        <label className="auth__label">Имя</label>
        <input
          className="auth__input"
          placeholder="Виталий"
          id="name"
          name="name"
          type="name"
          required
        />

        <label className="auth__label">E-mail</label>
        <input
          className="auth__input"
          placeholder="pochta@yandex.ru|"
          id="email"
          name="email"
          type="email"
          required
        />

        <label className="auth__label">Password</label>
        <input
          className="auth__input"
          placeholder="••••••••••••••"
          id="password"
          name="password"
          type="password"
          required
        />

        <p className="auth__error">Что-то пошло не так...</p>

        <button className="auth__button auth__button-signup" type="submit">
          Зарегистрироваться
        </button>
      </form>

      <p className="auth__check">
        Уже зарегистрированы?
        <Link to="/sign-in" className="auth__link">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
