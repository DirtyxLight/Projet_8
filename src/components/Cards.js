import React from "react";

const Cards = ({ rent }) => {
  return (
    <div className="gallery__cards">
      <img
        className="gallery__cards__image"
        src={rent.cover}
        alt={rent.title}
      />
      <p className="gallery__cards__title">{rent.title}</p>
    </div>
  );
};

export default Cards;
