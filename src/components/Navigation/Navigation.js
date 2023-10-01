import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/accountIcon.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Navigation.css";
import { BASE_ROUTE, MOVIES, PROFILE, SAVED_MOVIES } from "../../utils/constants";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to={BASE_ROUTE} className="header__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <div className="navigation__container">
        <div className="navigation__container-movies">
          <NavLink className="navigation__movies" to={MOVIES}>
            Фильмы
          </NavLink>
          <NavLink className="navigation__savedMovies" to={SAVED_MOVIES}>
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="navigation__container-account">
          <NavLink to={PROFILE} className="navigation__account">
            Аккаунт
          </NavLink>
          <img
            className="navigation__account-icon"
            src={accountIcon}
            alt="Иконка аккаунта"
          />
        </div>
      </div>
      <BurgerMenu />
    </nav>
  );
}

export default Navigation;
