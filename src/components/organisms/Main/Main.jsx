import "./Main.css";

import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default Main;
