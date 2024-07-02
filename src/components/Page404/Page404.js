import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";

function Page404() {
  const navigate = useNavigate();
  return (
    <div className="page404">
      <h2 className="page404__title">404</h2>
      <h3 className="page404__subtitle">Страница не найдена</h3>
      <button
        className="page404__link"
        type="button"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  );
}

export default Page404;
