import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [contentDrop, setContentDrop] = useState(false);

  return (
    <li className="dropdown__list__about" style={{ cursor: "pointer" }}>
      <h4
        onClick={() => setContentDrop(!contentDrop)}
        className="dropdown__list__about__title"
      >
        <div className="chevron">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        {title}
      </h4>
      {contentDrop ? (
        <p className="dropdown__list__about__content">{content}</p>
      ) : null}
    </li>
  );
};

export default Dropdown;
