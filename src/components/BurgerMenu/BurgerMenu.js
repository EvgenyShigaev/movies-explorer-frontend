import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import burger from "../../images/burger.svg";
import accountIcon from "../../images/accountIcon.svg";
import closeBurger from "../../images/closeBurger.svg";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="burgerMenu">
      <button className="burgerMenu__btn" onClick={handleBurgerClick}>
        <img className="burgerMenu__img" src={burger} alt="" />
      </button>

      {isOpen && (
        <div className="burgerMenu__container">
          <div className="burgerMenu__box">
            <button
              className="burgerMenu__button-close"
              onClick={() => setIsOpen((prev) => setIsOpen(!prev))}
            >
              <img className="burgerMenu__close" src={closeBurger} alt="Закрытие бургер-меню" />
            </button>

            <div className="burgerMenu__navLink">
              <NavLink className="burgerMenu__start" to="/">
                Главная
              </NavLink>
              <NavLink className="navigation__movies" to="/movies">
                Фильмы
              </NavLink>
              <NavLink className="navigation__savedMovies" to="/saved-movies">
                Сохранённые фильмы
              </NavLink>

              <div className="navigation__container-account">
                <NavLink className="navigation__account" to="/profile">
                  Аккаунт
                </NavLink>
                <img
                  className="navigation__account-icon"
                  src={accountIcon}
                  alt="Иконка аккаунта"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BurgerMenu;
