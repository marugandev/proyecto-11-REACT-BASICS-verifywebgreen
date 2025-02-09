import "./Button.css";

import React from "react";

const Button = ({ type = "submit", className, func, text }) => {
  return (
    <button type={type} className={className} onClick={func}>
      {text}
    </button>
  );
};

export default Button;
