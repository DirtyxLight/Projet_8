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
          <h2 className="location__title">{content.title}</h2>
          <span className="location__rent">{content.location}</span>
          <div className="tags">
            <ul className="tags__container">
              {content.tags.map((tag, index) => (
                <li key={index} className="tags__item">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="owner__container">
            <span className="owner__name">{content.host.name}</span>
            <img
              src={content.host.picture}
              alt={`the host: ${content.host.name}`}
            />
            {[...Array(5)].map((_, index) => {
              const rate = index + 1;
              console.log(rate);
              return (
                <i
                  key={index}
                  className={
                    rate <= content.rating
                      ? "fa-solid fa-star star-rating--on"
                      : "fa-solid fa-star star-rating"
                  }
                ></i>
              );
            })}
          </div>

          <Descriptions>
            <Dropdown title="Description" content={content.description} />
            <Dropdown
              title="Équipements"
              content={content.equipments.map((infos, index) => (
                <ul>
                  <li key={index}>{infos}</li>
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
