import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import AuthBtns from "../Main/AuthBtns/AuthBtns";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <AuthBtns />
      </div>
    </div>
  );
}

export default Header;
