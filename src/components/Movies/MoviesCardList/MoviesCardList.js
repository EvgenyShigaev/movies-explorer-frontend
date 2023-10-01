import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreMovies from "../../MoreMovies/MoreMovies";
import Preloader from "../Preloader/Preloader";
import { SAVED_MOVIES } from "../../../utils/constants";

function MoviesCardList({
  filteredMovies,
  savedMovies,
  isSavedMovies,
  isLoading,
  isError,
  isBadSerch,
  onAddCard,
  onDltCard,
}) {
  const { pathname } = useLocation();
  const [displayedMovies, setDisplayedMovies] = useState(0);

  const findSavedMovies = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };

  const adjustDisplayedCards = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1280) {
      setDisplayedMovies(12);
    } else if (innerWidth >= 768) {
      setDisplayedMovies(8);
    } else if (innerWidth >= 320 && innerWidth <= 480) {
      setDisplayedMovies(5);
    } else {
      setDisplayedMovies(0);
    }
  };

  const adjustMoreMovies = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1280) {
      setDisplayedMovies(displayedMovies + 3);
    } else if (innerWidth >= 768) {
      setDisplayedMovies(displayedMovies + 2);
    } else if (innerWidth >= 320 && innerWidth <= 480) {
      setDisplayedMovies(displayedMovies + 2);
    } else {
      setDisplayedMovies(displayedMovies + 1);
    }
  };

  useEffect(() => {
    adjustDisplayedCards();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", adjustDisplayedCards);
    }, 100);
    return () => {
      window.removeEventListener("resize", adjustDisplayedCards);
    };
  }, ["resize"]);

  return (
    <section className="moviesList__container">
      {isLoading && <Preloader />}
      {isError && !isLoading && (
        <span className="moviesList__searchError">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </span>
      )}
      {isBadSerch && !isLoading && (
        <span className="moviesList__searchError">Ничего не найдено</span>
      )}
      {!isLoading && !isError && !isBadSerch && (
        <>
          {pathname === SAVED_MOVIES ? (
            <>
              <ul className="moviesCardList">
                {filteredMovies.map((card) => (
                  <MoviesCard
                    card={card}
                    key={card._id || card.id}
                    filteredMovies={filteredMovies}
                    savedMovies={savedMovies}
                    isSavedMovies={isSavedMovies}
                    findSavedMovies={findSavedMovies(savedMovies, card)}
                    onAddCard={onAddCard}
                    onDltCard={onDltCard}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="moviesCardList">
                {filteredMovies.slice(0, displayedMovies).map((card) => (
                  <MoviesCard
                    card={card}
                    key={card._id || card.id}
                    filteredMovies={filteredMovies}
                    savedMovies={savedMovies}
                    isSavedMovies={isSavedMovies}
                    findSavedMovies={findSavedMovies(savedMovies, card)}
                    onAddCard={onAddCard}
                    onDltCard={onDltCard}
                  />
                ))}
              </ul>
              <MoreMovies
                filteredMovies={filteredMovies}
                displayedMovies={displayedMovies}
                adjustMoreMovies={adjustMoreMovies}
              />
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
