import React from "react";
import SectionSpan from "../SectionSpan/SectionSpan";
import "./AboutProject.css";

function AboutProject() {
  return (
    <SectionSpan
      heading={"О проекте"}
      content={
        <section className="aboutProject">
          <div className="aboutProject__text-container">
            <h3 className="aboutProject__heading">
              Дипломный проект включал 5 этапов
            </h3>
            <h3 className="aboutProject__heading">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutProject__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
            <p className="aboutProject__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>

          <div className="aboutProject__deadlines">
            <p className="aboutProject__deadline">1 неделя</p>
            <p className="aboutProject__deadline">4 недели</p>
            <p className="aboutProject__deadline-type">Back-end</p>
            <p className="aboutProject__deadline-type">Front-end</p>
          </div>
        </section>
      }
    />
  );
}

export default AboutProject;
