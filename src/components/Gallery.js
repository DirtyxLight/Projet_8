import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data-kasa.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="gallery">
      <ul className="gallery__rent">
        {data.map((rent) => (
          <Cards key={rent.id} rent={rent} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
