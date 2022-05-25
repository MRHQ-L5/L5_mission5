import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarSmall.css";
import { TelephoneFill } from "react-bootstrap-icons";

export default function NavbarSmall() {
  let navigate = useNavigate();

  return (
    <nav className="navbar_small">
      <a href={`/`} > 
        <div className="logo_small" ></div>
      </a>
        <div className="btn_container_small">
        <button className="btn_small" onClick={() => navigate("/UnderConstruction")}>Buy a car</button>
        <button className="btn_small" onClick={() => navigate("/UnderConstruction")}>Sell your car</button>
        <button className="btn_small" onClick={() => navigate("/UnderConstruction")}>Finance</button>
        <button className="btn_small" onClick={() => navigate("/Insurance")}>Insurance</button>
        <button className="btn_small" onClick={() => navigate("/UnderConstruction")}>Help</button>
      </div>
      <div className="number_container_small">
        <TelephoneFill className="phone_small" size={14} color= '#0076BE'/>
        <div className="number_small">0800 887 637</div>
      </div>
    </nav>
  );
}
