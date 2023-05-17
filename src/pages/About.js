import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Descriptions from "../components/Descriptions";
import Dropdown from "../components/Dropdown";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("./about-data.json", { signal })
      .then((res) => res.json())
      .then((data) => setData(data));

    return () => {
      controller.abort();
    };
  }, [setData]);
  return (
    <div id="about__page">
      <Navigation image="aboutBanner" source="./assets/about-banner.png" />
      <div className="dropdown">
        <ul className="dropdown__list">
          {data.map((content) => (
            <Descriptions>
              <Dropdown
                key={content.id}
                title={content.title}
                content={content.description}
              />
            </Descriptions>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default About;

// const aboutDrop = [
//   {
//     id: 1,
//     title: "Fiabilité",
//     description:
//       "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
//   },
//   {
//     id: 2,
//     title: "Respect",
//     description:
//       "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
//   },
//   {
//     id: 3,
//     title: "Service",
//     description:
//       "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question..",
//   },
//   {
//     id: 4,
//     title: "Sécurité",
//     description:
//       "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
//   },
// ];
