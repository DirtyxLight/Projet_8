import React, { useState } from "react";

const Dropdown = ({ content }) => {
  const [contentDrop, setContentDrop] = useState(false);

  return (
    <li className="dropdown__list__about">
      <h4
        onClick={() => setContentDrop(!contentDrop)}
        className="dropdown__list__about__title"
      >
        <div className="chevron">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        {/* Faire condition pour que ca switch de contenu car pas les meme noms dans Array donc choisir tel ou tel dropdown */}
        {content.title}
      </h4>
      {contentDrop ? (
        <p className="dropdown__list__about__content">{content.content}</p>
      ) : null}
    </li>
  );
};

export default Dropdown;
