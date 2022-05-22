import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="btn_container">
        <button className="btn">Buy a car</button>
        <button className="btn">Sell your car</button>
        <button className="btn">Finance</button>
        <button className="btn">Insurance</button>
        <button className="btn">Help</button>
      </div>
      <div className="number_container">
        <div className="number">0800 887 637</div>
      </div>
    </nav>
  );
}
