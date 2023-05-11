import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Descriptions from "../components/Descriptions";
import Dropdown from "../components/Dropdown";

const Rent = () => {
  const [dataRent, setDataRent] = useState([]);

  useEffect(() => {
    fetch("./data_kasa.json")
      .then((res) => res.json())
      .then((data) => setDataRent(data));
  }, []);
  console.log(dataRent);
  return (
    <div id="rent__page">
      <Navigation />
      <div className="dropdown">
        <ul className="dropdown__list">
          {dataRent.map((content) => (
            <Descriptions location="rentPage" key={content.id}>
              <Dropdown
                location="rentPage"
                key={content.id}
                content={content}
              />
            </Descriptions>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
