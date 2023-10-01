import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { getAllMovies } from "../../utils/MoviesApi";
import "./Movies.css";

function Movies({
  isLoading,
  setIsLoading,
  savedMovies,
  onAddCard,
  onDltCard,
}) {
  const [initialMovies, setInitialMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isBadSerch, setIsBadSearch] = useState(false);
  const [isError, setIsError] = useState(false);

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

  const moviesDuration = (movies) => { //+
    return movies.filter((movie) => movie.duration < 40);
  };

  const updateFilteredMovies = (movies, search, short) => {
    const moviesList = moviesFilter(movies, search, short);
    setInitialMovies(moviesList);
    setFilteredMovies(short ? moviesDuration(moviesList) : moviesList);
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("moviesList", JSON.stringify(moviesList));
  };

  const toggleShortMovies = () => {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      if (moviesDuration(initialMovies).length === 0) {
        setFilteredMovies(moviesDuration(initialMovies));
      } else {
        setFilteredMovies(moviesDuration(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem("shortMovies", !shortMovies);
  };

  const handleMovieSearch = (search) => {
    localStorage.setItem("shortMovies", shortMovies);
    localStorage.setItem("searchResult", search);

    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      updateFilteredMovies(movies, search, shortMovies);
    } else {
      setIsLoading(true);
      getAllMovies()
        .then((cardsData) => {
          updateFilteredMovies(cardsData, search, shortMovies);
          setIsError(false);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("moviesList")) {
      const movies = JSON.parse(localStorage.getItem("moviesList"));
      setInitialMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(moviesDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("searchResult")) {
      if (filteredMovies.length === 0) {
        setIsBadSearch(true);
      } else {
        setIsBadSearch(false);
      }
    } else {
      setIsBadSearch(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <main className="movies">
        <SearchForm
          handleMovieSearch={handleMovieSearch}
          toggleShortMovies={toggleShortMovies}
          shortMovies={shortMovies}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          filteredMovies={filteredMovies}
          isSavedMovies={false}
          isLoading={isLoading}
          isError={isError}
          isBadSerch={isBadSerch}
          onAddCard={onAddCard}
          onDltCard={onDltCard}
        />
        <Footer />
      </main>
    </>
  );
}

export default Movies;
