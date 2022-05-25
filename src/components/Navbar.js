import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { TelephoneFill } from "react-bootstrap-icons";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <nav className="navbar">
      <a href={`/`} > 
        <div className="logo"></div>
      </a>
      <div className="navbar_btn_container">
        <button className="btn" onClick={() => navigate("/UnderConstruction")}>Buy a car</button>
        <button className="btn" onClick={() => navigate("/UnderConstruction")}>Sell your car</button>
        <button className="btn" onClick={() => navigate("/UnderConstruction")}>Finance</button>
        <button className="btn" onClick={() => navigate("/Insurance")}>Insurance</button>
        <button className="btn" onClick={() => navigate("/UnderConstruction")}>Help</button>
      </div>
      <div className="number_container">
        <TelephoneFill className="phone" size={18} color= '#0076BE'/>
        <div className="number">0800 887 637</div>
      </div>
    </nav>
  );
}
