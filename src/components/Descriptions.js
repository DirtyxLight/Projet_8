import React from "react";
import Dropdown from "./Dropdown";

const Descriptions = ({ aboutPage, rentPage, content, title }) => {
  if ({ aboutPage }) {
    return <Dropdown title={title} content={content} />;
  }
  if ({ rentPage }) {
    return (
      <li className="dropdown__list__accomodation">
        <Dropdown title={title} content={content} />
      </li>
    );
  }
};

export default Descriptions;
