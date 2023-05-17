import React from "react";

// Viré dropdown d'ici et l insérer dans la page qui les contient tout les deux => Voir vidéo YT sur dropdown!

const Descriptions = (props) => {
  return <li className="dropdown__section">{props.children}</li>;

  // if ({ rentPage }) {
  //   return (
  //     <li className="dropdown__list__accomodation">
  //       <Dropdown title={title} content={content} />
  //     </li>
  //   );
  // }
};

export default Descriptions;
// const Descriptions = ({ aboutPage, rentPage, content, title }) => {
//   if ({ aboutPage }) {
//     return <Dropdown title={title} content={content} />;
//   }
//   if ({ rentPage }) {
//     return (
//       <li className="dropdown__list__accomodation">
//         <Dropdown title={title} content={content} />
//       </li>
//     );
//   }
// };

// export default Descriptions;
