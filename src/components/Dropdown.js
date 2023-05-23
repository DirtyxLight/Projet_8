import React, { useState } from "react";

const Dropdown = (props) => {
  const [contentDrop, setContentDrop] = useState(
    props.visibleByDefault ?? false
  );

  return (
    <div className="dropdown__list__about">
      <h4
        onClick={() => {
          setContentDrop(!contentDrop);
        }}
        className="dropdown__list__about__title"
        style={{ cursor: "pointer" }}
      >
        <i
          className={
            contentDrop
              ? "fa-solid fa-chevron-down fa-rotate-180"
              : "fa-solid fa-chevron-down"
          }
        ></i>
        {props.title}
      </h4>
      {contentDrop ? (
        <div className="dropdown__list__about__content">{props.content}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
