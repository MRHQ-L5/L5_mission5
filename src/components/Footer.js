import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_text">
        <p className="footer_ptag">© 2022 Turners</p>
      </div>
      <div className="footer_images">
        <a href={`/`} > 
          <div className="footer_image footer_home"></div>
        </a>
        <div className="footer_image footer_facebook"></div>
        <div className="footer_image footer_email"></div>
        <div className="footer_image footer_search"></div>
        <div className="footer_image footer_instagram"></div>
      </div>
    </footer>
  );
}
