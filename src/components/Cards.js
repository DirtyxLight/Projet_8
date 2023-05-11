import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ rent }) => {
  return (
    <NavLink to="/rent" className="gallery__cards">
      <img
        className="gallery__cards__image"
        src={rent.cover}
        alt={rent.title}
      />
      <p className="gallery__cards__title">{rent.title}</p>
    </NavLink>
  );
};

export default Cards;
