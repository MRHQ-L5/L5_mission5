import React from "react";
import "./NavbarSmall.css";

export default function NavbarSmall() {
  return (
    <nav className="navbar_small">
      <div className="logo_small"></div>
      <div className="btn_container_small">
        <button className="btn_small">Buy a car</button>
        <button className="btn_small">Sell your car</button>
        <button className="btn_small">Finance</button>
        <button className="btn_small">Insurance</button>
        <button className="btn_small">Help</button>
      </div>
      <div className="number_container_small">
        <div className="number_small">0800 887 637</div>
      </div>
    </nav>
  );
}
