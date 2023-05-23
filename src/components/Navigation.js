import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation__bar">
          <Logo />
          <ul className="navigation__link">
            <NavLink to="/">Acceuil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
