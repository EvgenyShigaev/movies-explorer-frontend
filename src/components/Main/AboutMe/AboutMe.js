import React from "react";
import { Link } from "react-router-dom";
import SectionSpan from "../SectionSpan/SectionSpan";
import photoMe from "../../../images/photoMe.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <SectionSpan
      heading={"Студент"}
      content={
        <section className="aboutMe">
            <div className="aboutMe__text-container">
              <h2 className="aboutMe__title">Виталий</h2>
              <h3 className="aboutMe__subtitle">
                Фронтенд-разработчик, 30 лет
              </h3>
              <p className="aboutMe__paragraph">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
              <Link
                to="https://github.com/EvgenyShigaev"
                target="_blank"
                className="aboutMe__link"
              >
                Github
              </Link>
            </div>
            <img
              className="aboutMe__photo"
              src={photoMe}
              alt="Фотография студента"
            />
        </section>
      }
    />
  );
}

export default AboutMe;
