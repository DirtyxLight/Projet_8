import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Descriptions from "../components/Descriptions";

const Rent = () => {
  const idRent = useParams("id").id;
  const [data, setData] = useState([]);
  const currentRent = data.filter((id) => id.id === idRent);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getData() {
      fetch("../data-kasa.json", { signal })
        .then((res) => res.json())
        .then((data) => setData(data));
      return () => {
        controller.abort();
      };
    }
    getData();
  }, [setData]);

  return (
    <div id="rent__page">
      {currentRent.map((content) => (
        <section>
          <Navigation />
          <h2>{content.title}</h2>
          <span>{content.location}</span>
          <Descriptions>
            <Dropdown title="Description" content={content.description} />
            <Dropdown
              title="Équipements"
              content={content.equipments.map((infos) => (
                <ul>
                  <li>{infos}</li>
                </ul>
              ))}
            />
          </Descriptions>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default Rent;
