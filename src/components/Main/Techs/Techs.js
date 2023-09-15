import React from "react";
import SectionSpan from "../SectionSpan/SectionSpan";
import "./Techs.css";

function Techs() {
  return (
    <section className="technologies">
      <SectionSpan
        heading={"Технологии"}
        content={
          <>
            <div className="technologies__container">
              <h2 className="technologies__title">7 технологий</h2>
              <p className="technologies__subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
              </p>
            </div>
            <ul className="technologies__types">
              <li className="technologies__type">HTML</li>
              <li className="technologies__type">CSS</li>
              <li className="technologies__type">JS</li>
              <li className="technologies__type">React</li>
              <li className="technologies__type">Git</li>
              <li className="technologies__type">Express.js</li>
              <li className="technologies__type">mongoDB</li>
            </ul>
          </>
        }
      />
    </section>
  );
}

export default Techs;
