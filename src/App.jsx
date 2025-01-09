import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainNav } from "./components/MainNav";
import Home from "./page/Home"; // sesuaikan jalur dengan lokasi file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#methodology" />
        <Route path="/#results" />
        <Route path="/#contact" />
      </Routes>
    </Router>
  );
}

export default App;
