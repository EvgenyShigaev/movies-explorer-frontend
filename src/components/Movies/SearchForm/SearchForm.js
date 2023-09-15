import React from "react";
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="searchForm">
      <div className="searchForm__container">
        <form className="searchForm__form">
          <div className="searchForm__field">
            <input
              noValidate
              className="searchForm__input"
              type="search"
              placeholder="Фильм"
            />

            <button className="searchForm__button" type="submit">
              Поиск
            </button>
          </div>
        </form>

        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
