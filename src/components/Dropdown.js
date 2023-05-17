import React, { useState } from "react";

const Dropdown = (props) => {
  const [contentDrop, setContentDrop] = useState(false);

  return (
    <div className="dropdown__list__about">
      <h4
        onClick={() => setContentDrop(!contentDrop)}
        className="dropdown__list__about__title"
        style={{ cursor: "pointer" }}
      >
        <div className="chevron">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        {props.title}
      </h4>
      {contentDrop ? (
        <p className="dropdown__list__about__content">{props.content}</p>
      ) : null}
    </div>
  );
};

export default Dropdown;
