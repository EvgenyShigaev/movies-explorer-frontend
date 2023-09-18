import React from "react";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import AuthBtns from "./AuthBtns/AuthBtns"

function Main(isLoggedIn) {
  return (
    <>
     {isLoggedIn ? null : <AuthBtns />}
      <Header />
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
