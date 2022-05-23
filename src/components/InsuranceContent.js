import React from "react";
import "./InsuranceContent.css";

export default function InsuranceContent() {
  return (
    <>
      <section className="insurance_section">
        <div className="insurance_container">
          <div className="insurance_container_left">
            <h1>Car Insurance</h1>
            <p>Ensuring you get the best protection for your car.</p>
            <button>Get a free quote in 2 minutes</button>
            <button>Buy your quote</button>
          </div>
          <div className="insurance_container_right">
            <div className="island_container">
              <div>
                <p>Get a discount if you bought your car with us</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="online_section">
        <div className="online_container"></div>
      </section>
    </>
  );
}
