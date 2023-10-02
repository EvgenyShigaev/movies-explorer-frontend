import React from "react";
import "./MoreMovies.css";

function MoreMovies({ filteredMovies, displayedMovies, adjustMoreMovies }) {
  return (
    <div className="moreMovies">
      {filteredMovies.length > displayedMovies ? (
        <button className="moreMovies__button" onClick={adjustMoreMovies}>
          Ещё
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default MoreMovies;
