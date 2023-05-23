import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Descriptions from "../components/Descriptions";
import Caroussel from "../components/Caroussel";

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
      {currentRent.map((content, indexRent) => (
        <section>
          <Navigation bannerDisplay={true} />
          <Caroussel key={indexRent} slides={content} />
          <h2 className="location__title">{content.title}</h2>
          <span className="location__rent">{content.location}</span>
          <div className="tags">
            <ul className="tags__container">
              {content.tags.map((tag, indexTag) => (
                <li key={indexTag} className="tags__item">
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
          <ul className="dropdown__rent">
            <Descriptions>
              <Dropdown
                title="Description"
                content={content.description}
                visibleByDefault={true}
              />
              <Dropdown
                title="Équipements"
                visibleByDefault={true}
                content={content.equipments.map((infos, index) => (
                  <div key={index}>{infos}</div>
                ))}
              />
            </Descriptions>
          </ul>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default Rent;
