import React from "react";
import { Link } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({
  card,
  savedMovies,
  isSavedMovies,
  findSavedMovies,
  onAddCard,
  onDltCard,
}) {
  const displayedMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const changeLikeType = () => {
    if (findSavedMovies) {
      onDltCard(savedMovies.filter((i) => i.movieId === card.id)[0]);
    } else {
      onAddCard(card);
    }
  };

  const deleteCard = () => {
    onDltCard(card);
  };

  return (
    <>
      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">{card.nameRU}</h3>
          <h3 className="moviesCard__time">
            {displayedMovieDuration(card.duration)}
          </h3>
        </div>
        <Link to={card.trailerLink} target="_blank">
          <img
            className="moviesCard__image"
            src={
              typeof card.image === "string"
                ? card.image
                : `https://api.nomoreparties.co/${card.image.url}`
            }
            alt={card.nameRU}
          />
        </Link>
        {isSavedMovies ? (
          <button
            className="moviesCard__btn moviesCard__btnDltCard"
            onClick={deleteCard}
            type="button"
            aria-label="Удалить фильм"
          />
        ) : (
          <button
            className={
              findSavedMovies
                ? "moviesCard__btn moviesCard__btnLiked"
                : "moviesCard__btn moviesCard__btnLike"
            }
            onClick={changeLikeType}
            type="button"
            aria-label="Сохранить"
          />
        )}
      </li>
    </>
  );
}

export default MoviesCard;
