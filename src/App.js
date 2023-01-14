import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import WorkPage from "./pages/Work";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/React-Portfolio" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
