import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <span className="footer__span"></span>

      <div className="footer__container">
        <p className="footer__year">&copy;&nbsp;{new Date().getFullYear()}</p>
        <nav className="footer__nav">
          <Link
            className="footer__link"
            to="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </Link>
          <Link
            className="footer__link"
            to="https://github.com/EvgenyShigaev"
            target="_blank"
          >
            Github
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
