import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("./data-kasa.json", { signal })
      .then((res) => res.json())
      .then((data) => setData(data));

    return () => {
      controller.abort();
    };
  }, [setData]);

  return (
    <div className="gallery">
      <ul className="gallery__rent">
        {data.map((content) => (
          <Cards key={content.id} rent={content} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
