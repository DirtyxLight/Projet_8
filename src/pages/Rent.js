import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Descriptions from "../components/Descriptions";

const Rent = () => {
  const [dataRent, setDataRent] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("./data-kasa.json", { signal })
      .then((res) => res.json())
      .then((data) => setDataRent(data));

    return () => {
      controller.abort();
    };
  }, [setDataRent]);
  console.log(dataRent);
  return (
    <div id="rent__page">
      <Navigation />
      <div className="dropdown">
        <ul className="dropdown__list">
          {dataRent.map((content) => (
            <Descriptions
              location="rentPage"
              key={content.id}
              title={"Description"}
              content={content.description}
            ></Descriptions>
          ))}
          {dataRent.map((content) => (
            <Descriptions
              location="rentPage"
              key={content.id}
              title={"Équipements"}
              content={content.equipments}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
