import React from "react";
import movies1 from "../../../images/movies1.png";
import movies2 from "../../../images/movies2.png";
import movies3 from "../../../images/movies3.png";
import movies4 from "../../../images/movies4.png";
import movies5 from "../../../images/movies5.png";
import movies6 from "../../../images/movies6.png";
import movies7 from "../../../images/movies7.png";
import movies8 from "../../../images/movies8.png";
import movies9 from "../../../images/movies9.png";
import movies10 from "../../../images/movies10.png";
import movies11 from "../../../images/movies11.png";
import movies12 from "../../../images/movies12.png";
import saved from "../../../images/saved.svg";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <>
      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies1}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnLiked">
          <img src={saved} alt="Сохраненный фильм" />
        </button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies2}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnLiked">
          <img src={saved} alt="Сохраненный фильм" />
        </button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies3}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnDltCard">Сохранить</button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies4}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnDltCard">Сохранить</button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies5}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnDltCard">Сохранить</button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies6}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnLiked">
          <img src={saved} alt="Сохраненный фильм" />
        </button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies7}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnLiked">
          <img src={saved} alt="Сохраненный фильм" />
        </button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies8}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnDltCard">Сохранить</button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies9}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnDltCard">Сохранить</button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies10}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnDltCard">Сохранить</button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies11}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnLiked">
          <img src={saved} alt="Сохраненный фильм" />
        </button>
      </li>

      <li className="moviesCard">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img
          className="moviesCard__image"
          src={movies12}
          alt="Картинка фильма"
        />
        <button className="moviesCard__btnDltCard">Сохранить</button>
      </li>
    </>
  );
}

export default MoviesCard;
