import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
