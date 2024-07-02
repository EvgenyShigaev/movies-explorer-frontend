import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import { BASE_ROUTE } from "../../utils/constants";

function Main(isLoggedIn) {
   const { pathname } = useLocation();

  return (
    <>
      {isLoggedIn && pathname === BASE_ROUTE ? null : <Header />}
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <div className="main__container">
          <AboutMe />
          <Portfolio />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Main;
