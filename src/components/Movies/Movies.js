import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoreMovies from "../MoreMovies/MoreMovies";
import "./Movies.css";

function Movies() {
  return (
    <>
      <main className="movies">
        <Navigation />
        <SearchForm />
        <MoviesCardList />
        <MoreMovies />
        <Footer />
      </main>
    </>
  );
}

export default Movies;
