import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div id="error__page">
      <Navigation />
      <div className="error__message">
        <h1 className="error__message__title">404</h1>
        <span className="error__message__description">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <NavLink className="error__message__link" to="/">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
