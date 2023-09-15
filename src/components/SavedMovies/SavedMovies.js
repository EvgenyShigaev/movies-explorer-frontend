import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../SavedMovies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import ShowMore from "../SavedMovies/ShowMore/ShowMore";

function SavedMovies() {
  return (
    <main className="savedMovies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <ShowMore />
      <Footer />
    </main>
  );
}

export default SavedMovies;
