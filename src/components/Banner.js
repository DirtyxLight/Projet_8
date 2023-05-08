import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="navigation__banner">
        <img
          className="navigation__banner__img"
          src="./assets/home-banner.png"
          alt=" falaise et océan"
        />
      </div>
    );
  }
  if (location.pathname === "/about") {
    return (
      <img
        className="navigation__banner__img"
        src="./assets/about-banner.png"
        alt="Montagnes et forêts"
      />
    );
  } else {
    return <div className="empty"></div>;
  }
};

export default Banner;
