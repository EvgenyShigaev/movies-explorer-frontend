import React, { useState, useEffect } from "react";
import WebPlanet from "../../../images/WebPlanet.png";
import "./Promo.css";

function Promo() {
  const [scrollToAbout, setScrollToAbout] = useState(false);

  const handleClick = () => {
    setScrollToAbout(!scrollToAbout);
  };

  useEffect(() => {
    if (scrollToAbout) {
      const timer = setTimeout(() => {
        setScrollToAbout(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [scrollToAbout]);

  const scrollToAboutRef = (element) => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="promo" id="promo">
      <div className="promo__container">
        <div className="promo__text-container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <h2 className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </h2>
          <button className="promo__button" onClick={handleClick}>
            Узнать больше
          </button>
        </div>
        <img className="promo__image" src={WebPlanet} alt="Веб Планета" />
      </div>
      {scrollToAbout && <div ref={scrollToAboutRef}></div>}
    </section>
  );
}

export default Promo;
