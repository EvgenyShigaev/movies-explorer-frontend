import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { MOVIES } from "../../../utils/constants";

function SearchForm({ handleMovieSearch, toggleShortMovies, shortMovies }) {
  const { pathname } = useLocation();
  const [error, setError] = useState(false);
  const [isSearchQuery, setIsSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSearchQuery.trim().length === 0) {
      setError(true);
    } else {
      setError(false);
      handleMovieSearch(isSearchQuery);
    }
  };

  const updateSearchQuery = (e) => {
    setIsSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (pathname === MOVIES && localStorage.getItem("searchResult")) {
      const localSearch = localStorage.getItem("searchResult");
      setIsSearchQuery(localSearch);
    }
  }, [pathname]);

  return (
    <section className="searchForm">
      <div className="searchForm__container">
        <form className="searchForm__form" onSubmit={handleSubmit} noValidate>
          <div className="searchForm__field">
            <input
              noValidate
              className="searchForm__input"
              type="text"
              placeholder="Фильм"
              value={isSearchQuery || ""}
              onChange={updateSearchQuery}
              required
            />
            <button className="searchForm__button" type="submit">
              Поиск
            </button>
          </div>
        </form>
        {error && (
          <span className="searchForm__error">Нужно ввести ключевое слово</span>
        )}
        <FilterCheckbox
          toggleShortMovies={toggleShortMovies}
          shortMovies={shortMovies}
        />
      </div>
    </section>
  );
}

export default SearchForm;
