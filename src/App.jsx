import "./App.css";

import Layout from "./components/templates/Layout";
import { Route, Routes } from "react-router-dom";

import Hero from "./pages/Hero/Hero";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
import NotFound from "./pages/404/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:siteUrl" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
