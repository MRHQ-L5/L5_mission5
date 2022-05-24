import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Insurance from "./pages/Insurance";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/QuoteDetails" element={<QuoteDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
