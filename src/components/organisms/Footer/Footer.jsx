import "./Footer.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li>
            <NavLink to={"about"} activeclassname="active">
              verifywebgreen ©{new Date().getFullYear()}
            </NavLink>
          </li>
          <li>
            <span> | </span>
          </li>
          <li>
            <NavLink
              to={"https://marugandev.netlify.app/"}
              activeclassname="active"
              target="_blank"
              rel="noopener noreferer"
            >
              by Marugandev
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
