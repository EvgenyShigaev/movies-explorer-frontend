import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <section className="moviesList__container">
      <ul className="moviesCardListSaved">
        <MoviesCard />
      </ul>
    </section>
  );
}

export default MoviesCardList;
