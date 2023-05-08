import React from "react";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Logo />
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
