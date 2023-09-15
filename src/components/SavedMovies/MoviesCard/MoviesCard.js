import movies1 from "../../../images/movies1.png";
import movies2 from "../../../images/movies2.png";
import movies3 from "../../../images/movies3.png";
import deleteLike from "../../../images/delete.svg";
import "../../Movies/MoviesCard/MoviesCard.css";

function MoviesCard() {
  return (
    <>
      <li className="moviesCard moviesCard__saved">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img className="moviesCard__image" src={movies1} alt="Картинка фильма" />
        <button className="moviesCard__btnLiked">
          <img src={deleteLike} alt="Сохраненный фильм" />
        </button>
      </li>

      <li className="moviesCard moviesCard__saved">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img className="moviesCard__image" src={movies2} alt="Картинка фильма" />
        <button className="moviesCard__btnLiked">
          <img src={deleteLike} alt="Сохраненный фильм" />
        </button>
      </li>

      <li className="moviesCard moviesCard__saved">
        <div className="moviesCard__container">
          <h3 className="moviesCard__text">В погоне за Бенкси</h3>
          <h3 className="moviesCard__time">0ч 42м</h3>
        </div>
        <img className="moviesCard__image" src={movies3} alt="Картинка фильма" />
        <button className="moviesCard__btnLiked">
          <img src={deleteLike} alt="Сохраненный фильм" />
        </button>
      </li>
    </>
  )
}

export default MoviesCard;