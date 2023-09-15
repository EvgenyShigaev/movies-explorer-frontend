import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <Navigation />
      <h3 className="profile__title">Привет, Виталий!</h3>
      <div className="profile__container">
        <div className="profile__container-name">
          <label className="profile__name" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__input"
            required
            placeholder="Виталий"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <span className="profile__span"></span>

        <div className="profile__container-name">
          <label htmlFor="name" className="profile__name">
            E-mail
          </label>
          <input
            className="profile__input"
            required
            placeholder="pochta@yandex.ru"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <button className="profile__edit">Редактировать</button>
        <button className="profile__logout">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
