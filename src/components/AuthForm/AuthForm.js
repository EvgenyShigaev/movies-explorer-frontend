import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function AuthForm({
  authTitle,
  authInput,
  authBtnText,
  authQuestion,
  onSubmit,
  isValid,
  isLoading,
  displayError
}) {
  const btnColor = isValid
    ? "auth__button-container"
    : "auth__button-container_active";

  return (
    <div className="auth">
      <div className="auth__header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <p className="auth__title">{authTitle}</p>
      </div>

      <form className="auth__form" onSubmit={onSubmit}>
        {authInput}
        <span className="auth__error">{displayError}</span>
        <button
          type="submit"
          className={
            isLoading ? `${btnColor} auth__button-container_loading` : btnColor
          }
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Отправка..." : authBtnText}
        </button>
      </form>
      {authQuestion}
    </div>
  );
}
