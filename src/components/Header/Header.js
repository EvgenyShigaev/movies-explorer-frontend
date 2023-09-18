import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import AuthBtns from "../Main/AuthBtns/AuthBtns";
import "./Header.css";
import { BASE_ROUTE } from "../../utils/constants";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={BASE_ROUTE} className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <AuthBtns />
      </div>
    </header>
  );
}

export default Header;
