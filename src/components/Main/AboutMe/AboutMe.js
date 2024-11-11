import React from 'react';
import { Link } from 'react-router-dom';
import SectionSpan from '../SectionSpan/SectionSpan';
import myPhoto from '../../../images/myPhoto.png';
import './AboutMe.css';

function AboutMe() {
  const calculateAge = (birthDate = new Date(1995, 6, 26)) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    let ageString;
    if (age % 10 === 1 && age % 100 !== 11) {
      ageString = `${age} год`;
    } else if (
      [2, 3, 4].includes(age % 10) &&
      ![12, 13, 14].includes(age % 100)
    ) {
      ageString = `${age} года`;
    } else {
      ageString = `${age} лет`;
    }

    return ageString;
  };

  return (
    <SectionSpan
      heading={'Студент'}
      content={
        <section className="aboutMe">
          <div className="aboutMe__text-container">
            <h2 className="aboutMe__title">Евгений</h2>
            <h3 className="aboutMe__subtitle">
              Фронтенд-разработчик, {calculateAge()}
            </h3>
            <p className="aboutMe__paragraph">
              Я родился и живу в Саратове, закончил факультет законотворчества
              Саратовской Государственной Юридической Академии. В свободное
              время я люблю слушать, играть на гитаре и изучать иностранные
              языки. В 2022 году увлекся программированием и начал свой путь во
              фронтенд-разработке.
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
            src={myPhoto}
            alt="Фотография студента"
          />
        </section>
      }
    />
  );
}

export default AboutMe;
