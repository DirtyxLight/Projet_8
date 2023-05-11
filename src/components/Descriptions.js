import React from "react";
import Dropdown from "./Dropdown";

const Descriptions = ({ aboutPage, rentPage, content }) => {
  if ({ aboutPage }) {
    return <Dropdown key={content.id} content={content} />;
  }
  if ({ rentPage }) {
    return (
      <li className="dropdown__list__accomodation">
        <Dropdown key={content.id} content={content} />
      </li>
    );
  }
};

export default Descriptions;
