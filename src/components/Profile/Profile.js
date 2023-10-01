import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import * as mainApi from "../../utils/MainApi";
import "./Profile.css";

function Profile({
  onLogout,
  setIsLoading,
  setCurrentUser,
  displayError,
  setDisplayError,
  handleAuthError,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { email, name } = currentUser;
  const { values, handleChange, errors, isValid, setIsValid, setValues } =
    useFormAndValidation();
  const [updProfileMsg, setUpdProfileMsg] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(false);
    }
  }, [currentUser, setValues, setIsValid]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    try {
      setIsCancelled(true);
      handleUpdateUser({
        name: values.name,
        email: values.email,
      });
      setUpdProfileMsg(true);
      setTimeout(() => {
        setUpdProfileMsg(false);
      }, 1000);
    } finally {
      setIsLoading(false);
      setIsValid(false);
      if (displayError) {
        handleCancel();
      }
    }
  };

  useEffect(() => {
    if (displayError) {
      setTimeout(() => {
        setDisplayError("");
      }, 3000);
    }
  }, [displayError]);

  async function handleUpdateUser(user) {
    try {
      const newUser = await mainApi.editUserInfo(user);
      setCurrentUser(newUser);
    } catch (err) {
      handleAuthError(err);
    }
  }

  const handleChangeInput = (evt) => {
    handleChange(evt);
    setIsValid(true);
    setIsCancelled(false);
  };

  const handleCancel = () => {
    setValues(currentUser);
    setIsCancelled(true);
  };

  return (
    <section className="profile">
      <h3 className="profile__title">
        {updProfileMsg
          ? "Обновление профиля"
          : !isCancelled
          ? "Редактирование"
          : displayError
          ? "Ошибка обновления"
          : `Привет, ${currentUser.name}`}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="profile__container">
          <div className="profile__container-name">
            <label htmlFor="name" className="profile__name">
              {errors.name ? errors.name : "Имя"}
            </label>
            <input
              className="profile__input"
              placeholder={name}
              type="text"
              id="name"
              name="name"
              minLength="2"
              maxLength="30"
              value={isCancelled ? currentUser.name : values.name ?? name}
              onChange={handleChangeInput}
              required
            />
          </div>

          <span className="profile__span"></span>

          <div className="profile__container-name">
            <label htmlFor="email" className="profile__name">
              {errors.email ? errors.email : "E-mail"}
            </label>
            <input
              className="profile__input"
              placeholder={email}
              type="email"
              id="email"
              name="email"
              value={isCancelled ? currentUser.email : values.email ?? email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <span className="profile__editError">{displayError}</span>

          <button
            className={
              !isValid || isCancelled
                ? "profile__edit profile__edit--blocked"
                : "profile__edit"
            }
            disabled={!isValid || isCancelled}
          >
            Редактировать
          </button>

          {!isCancelled && (values.name !== name || values.email !== email) && (
            <button
              className={!isCancelled ? "profile__button profile__cancel" : ""}
              onClick={handleCancel}
            >
              Отмена
            </button>
          )}

          <button
            className="profile__button profile__logout"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
