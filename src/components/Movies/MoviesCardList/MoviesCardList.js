import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="moviesList__container">
      <ul className="moviesCardList">
        <MoviesCard />
      </ul>
    </section>
  );
}

export default MoviesCardList;
