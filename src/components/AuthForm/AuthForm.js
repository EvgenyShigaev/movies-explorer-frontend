import React from "react";
import { Link } from "react-router-dom";
import { BASE_ROUTE } from "../../utils/constants";
import logo from "../../images/logo.svg";
import "../Register/Register.css";

export default function AuthForm({ authTitle, authInput, authBtnText, authQuestion, onSubmit }) {
  return (
    <div className="auth">
      <div className="auth__header">
        <Link to={BASE_ROUTE} className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <p className="auth__title">{authTitle}</p>
      </div>

      <form
        className="auth__form"
        noValidate
        onSubmit={onSubmit}
      >
        {authInput}
        <button className="auth__button auth__button-signup" type="submit">
          {authBtnText}
        </button>
      </form>
      {authQuestion}
    </div>
  );
}
