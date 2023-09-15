import React from "react";
import { Link } from "react-router-dom";
import "../AuthBtns/AuthBtns.css";

function AuthBtns() {
  return (
    <section className="authBtns">
      <Link to="/sign-up" className="authBtn__registration authBtn__text">
        Регистрация
      </Link>
      <Link to="/sign-in" className="authBtn__login authBtn__text">
        Войти
      </Link>
    </section>
  );
}

export default AuthBtns;
