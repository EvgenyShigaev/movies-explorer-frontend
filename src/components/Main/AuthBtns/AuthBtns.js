import React from "react";
import { Link } from "react-router-dom";
import "../AuthBtns/AuthBtns.css";
import { SIGN_UP, SIGN_IN } from "../../../utils/constants";

function AuthBtns() {
  return (
    <section className="authBtns">
    <Link to={SIGN_UP} className="authBtn__registration authBtn__text">
    Регистрация
    </Link>
    <Link to={SIGN_IN} className="authBtn__login authBtn__text">
     Войти
    </Link>
    </section>
    )
  }
  
  export default AuthBtns;