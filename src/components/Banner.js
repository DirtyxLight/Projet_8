import React from "react";

const Banner = ({ source }) => {
  return (
    <div className="navigation__banner__main">
      <img className="navigation__banner__img" src={source} alt="bannière" />
      <span>Chez vous, partout et ailleurs</span>
    </div>
  );
};

// else if ({ aboutBanner }) {
//   return (
//     <img
//       className="navigation__banner__img"
//       src={source}
//       alt="Montagnes et forêts"
//     />
//   );
// } else if ({ emptyBanner }) {
//   return <></>;
// }

export default Banner;
