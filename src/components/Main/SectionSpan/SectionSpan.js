import React from "react";
import "./SectionSpan.css";

function SectionSpan({ heading, content }) {
  return (
    <div className="sectionSpan__container ">
      <h2 className="sectionSpan__heading">{heading}</h2>
      <span className="sectionSpan__underline"></span>
      {content}
    </div>
  );
}

export default SectionSpan;
