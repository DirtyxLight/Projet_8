import React from "react";

const Banner = ({ homeBanner, source, aboutBanner, emptyBanner }) => {
  if ({ homeBanner }) {
    return (
      <img
        className="navigation__banner__img"
        src={source}
        alt=" falaise et océan"
      />
    );
  }
  if ({ aboutBanner }) {
    return (
      <img
        className="navigation__banner__img"
        src={source}
        alt="Montagnes et forêts"
      />
    );
  }
  if ({ emptyBanner }) {
    return <div className="navigation__banner__img"></div>;
  }
};

export default Banner;

// if (location.pathname === "/") {
//   return (
//     <img
//       className="navigation__banner__img"
//       src="./assets/home-banner.png"
//       alt=" falaise et océan"
//     />
//   );
// }
// if (location.pathname === "/about") {
//   return (
//     <img
//       className="navigation__banner__img"
//       src="./assets/about-banner.png"
//       alt="Montagnes et forêts"
//     />
//   );
// }
