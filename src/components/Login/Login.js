import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
  return (
    <div className="auth">
      <div className="auth__header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <p className="auth__title">Рады видеть!</p>
      </div>

      <form className="auth__form" name="login" autoComplete="off">
        <label className="auth__label">E-mail</label>
        <input
          className="auth__input"
          placeholder="pochta@yandex.ru"
          id="email"
          name="email"
          type="email"
          autoComplete="off"
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
          required
        />
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>

      <p className="auth__check">
        Ещё не зарегистрированы?
        <Link to="/sign-up" className="auth__link">
          Регистрация
        </Link>
      </p>
    </div>
  );
}

export default Login;
