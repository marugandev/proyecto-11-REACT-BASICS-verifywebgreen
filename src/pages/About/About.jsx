import "./About.css";

import React from "react";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about">
      <h2>About verifywebgreen 🌿</h2>
      <p>
        verifywebgreen analyzes a website’s sustainability based on its energy
        consumption and environmental impact.
      </p>
      <ul>
        <strong>🔍 Key metrics:</strong>
        <ul>
          {" "}
          <li>
            <strong>Data Transfer (Mb):</strong> Amount of data loaded by the
            page.
          </li>{" "}
          <li>
            <strong>Energy Usage (Joules):</strong> Power consumed during page
            load.
          </li>{" "}
          <li>
            <strong>CO₂ Emissions (Grid/Renewable):</strong> Environmental
            impact measured in grams and litres.
          </li>{" "}
          <li>
            <strong>Efficiency Score:</strong> Percentage of websites that are
            less efficient than this one.
          </li>{" "}
          <li>
            <strong>Sustainability Rating:</strong> Overall environmental
            performance of the website.
          </li>{" "}
        </ul>
      </ul>
      <p>
        Optimize your site, reduce energy consumption, and make the web greener!
        🌿💚
      </p>
      <Button
        type="button"
        className="button back"
        text={"Go Back!"}
        func={() => navigate(-1)}
      ></Button>
    </section>
  );
};

export default About;
