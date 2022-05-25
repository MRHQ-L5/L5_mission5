import React from "react";
import "./InsuranceContent.css";
import { useNavigate } from "react-router-dom";

export default function InsuranceContent() {
  let navigate = useNavigate();

  return (
    <>
      <section className="insurance_section">
        <div className="insurance_container">
          <div className="insurance_container_left">
            <h1 className="insurance_header">Car Insurance</h1>
            <p>Ensuring you get the best protection for your car.</p>
            <button className="free_quote_btn">
              Get a free quote in 2 minutes
            </button>
            <button className="buy_quote_btn" onClick={() => navigate("/QuoteDetails")}>Buy your quote</button>
          </div>
          <div className="insurance_container_right">
            <div className="island_container">
              <div className="island_left">
                <div className="discount_image"></div>
                <p className="discount_text">
                  Get a discount if you bought your car with us
                </p>
              </div>
              <div className="island_right"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="online_section">
        <div className="online_container">
          <h1 className="online_header">Do it all online</h1>
          <div className="triple_box_container">
            <div className="triple_box box_1">
              <h3>Get a quote</h3>
              <p>First, get a free quote in 2 minutes. It’s on us!</p>
            </div>
            <div className="triple_box box_2">
              <h3>Buy Insurance</h3>
              <p>Then, buy your quote and get insurance.</p>
            </div>
            <div className="triple_box box_3">
              <h3>You're covered</h3>
              <p>It’s as easy as that</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
