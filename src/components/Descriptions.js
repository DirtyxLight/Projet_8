import React from "react";

const Descriptions = ({ content }) => {
  return (
    <li className="dropdown__content">
      <h4>{content.title}</h4>
      <p>{content.content}</p>
    </li>
  );
};

export default Descriptions;
