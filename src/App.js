import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details"

import './assets/item.css'
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />} >
        <Route path=":anime_name" element={<MovieDetails />} />
      </Route>

    </Routes>
  );
}

export default App;
