import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insurance from "./pages/Insurance";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Insurance" element={<Insurance />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
