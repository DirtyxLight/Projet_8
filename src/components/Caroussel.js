import React, { useState } from "react";

const Caroussel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.pictures.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (currentSlide + slides.pictures.length - 1) % slides.pictures.length
    );
  };
  return (
    <div className="caroussel__container">
      <div
        className="arrow--right"
        onClick={() => nextSlide()}
        style={{ cursor: "pointer" }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div
        className="arrow--left"
        onClick={() => previousSlide()}
        style={{ cursor: "pointer" }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="slides">
        <img src={slides.pictures[currentSlide]} alt="Slide" />
      </div>
    </div>
  );
};

export default Caroussel;
