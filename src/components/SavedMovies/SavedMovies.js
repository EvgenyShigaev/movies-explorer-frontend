import React, { useState, useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ savedMovies, onDltCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [shortMovies, setShortMovies] = useState(false);
  const [isBadSerch, setIsBadSearch] = useState(false);
  const [isSearchQuery, setIsSearchQuery] = useState("");

  const moviesFilter = (movies, search) => {
    const foundMovies = movies.filter((movie) => {
      const userSearch = search.toLowerCase().trim();
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      return (
        movieRu.indexOf(userSearch) !== -1 || movieEn.indexOf(userSearch) !== -1
      );
    });
    return foundMovies;
  };

  const moviesDuration = (movies) => {
    return movies.filter((movie) => movie.duration < 40);
  };

  const handleMovieSearch = (request) => {
    setIsSearchQuery(request);
  };

  const handleShortMovieSearch = () => {
    setShortMovies(!shortMovies);
  };

  useEffect(() => {
    const moviesList = moviesFilter(savedMovies, isSearchQuery);
    setFilteredMovies(shortMovies ? moviesDuration(moviesList) : moviesList);
  }, [savedMovies, shortMovies, isSearchQuery]);

  useEffect(() => {
    filteredMovies.length === 0 ? setIsBadSearch(true) : setIsBadSearch(false);
  }, [filteredMovies]);


  return (
    <main className="savedMovies">
      <SearchForm
        handleMovieSearch={handleMovieSearch}
        toggleShortMovies={handleShortMovieSearch}
      />
      <MoviesCardList
        isBadSerch={isBadSerch}
        savedMovies={savedMovies}
        isSavedMovies={true}
        filteredMovies={filteredMovies}
        onDltCard={onDltCard}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
