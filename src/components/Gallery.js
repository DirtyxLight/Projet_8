import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getData() {
      fetch("./data-kasa.json", { signal })
        .then((res) => res.json())
        .then((data) => setData(data));
      return () => {
        controller.abort();
      };
    }
    getData();
  }, [setData]);

  return (
    <div className="gallery">
      <ul className="gallery__rent">
        {data.map((content) => (
          <Cards key={content.id} id={content.id} rent={content} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
