import "./Hero.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <NavLink to="/search" activeclassname="active" className="hero">
      <h1 className="hero-title">
        Your web is <span>green?</span>
      </h1>
    </NavLink>
  );
};

export default Hero;
