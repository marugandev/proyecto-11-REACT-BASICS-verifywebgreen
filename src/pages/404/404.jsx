import "./404.css";

import React from "react";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h2>Page not found 😔</h2>
      <Button
        type="button"
        className="button back"
        text={"Go Back!"}
        func={() => navigate(-1)}
      ></Button>
    </section>
  );
};

export default NotFound;
