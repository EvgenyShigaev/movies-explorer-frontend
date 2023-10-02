import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__subtitle">Портфолио</h3>

      <ul className="portfolio__container">
        <li className="portfolio__list">
          <Link
            className="portfolio__link"
            to="https://github.com/EvgenyShigaev/how-to-learn"
            target="_blank"
          >
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__list">
          <Link
            className="portfolio__link"
            to="https://evgenyshigaev.github.io/russian-travel/"
            target="_blank"
          >
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__list">
          <Link
            className="portfolio__link portfolio__link-last "
            to="https://github.com/EvgenyShigaev/react-mesto-api-full-gha"
            target="_blank"
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
