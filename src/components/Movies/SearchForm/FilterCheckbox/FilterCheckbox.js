import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filterCheckbox">
      <div className="filterCheckbox__container">
        <input
          id="filterCheckbox-input"
          type="checkbox"
          className="filterCheckbox__input"
        ></input>
        <label
          className="filterCheckbox__label"
          htmlFor="filterCheckbox-input"
        ></label>
        <p className="filterCheckbox__text">Короткометражки</p>
      </div>

      <span className="filterCheckbox__line"></span>
    </section>
  );
}

export default FilterCheckbox;
