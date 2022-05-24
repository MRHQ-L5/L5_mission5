import React from "react";
import Footer from "../components/Footer";
import NavbarSmall from "../components/NavbarSmall";
import "../components/QuoteDetails.css";

export default function QuoteDetails() {
  return (
    <>
      <NavbarSmall />
      <section className="insurance_purchase_section">
        <div className="insurance_purchase_container">
          <h1>Car Insurance - Insurance purchase</h1>
          <div className="progress_tracker">
            <div className="tracker_box tracker_box_1">Quote Details</div>
            <div className="tracker_box tracker_box_2">Review</div>
            <div className="tracker_box tracker_box_3">Payment</div>
          </div>
          <div className="progress_bar">
            <div></div>
            <div></div>
          </div>
          <div className="quote_number_container">
            <h2>Retrieve your quote</h2>
            <div className="quote_number">Your quote number is 000123456</div>
          </div>
        </div>
      </section>
      <section className="retrieve-quote_section">
        <div className="retrieve-quote_container">
          <div className="retrieve-quote_left">
            <div>Enter your quote number</div>
            <div>
              Did you buy your car with us?
              <p>
                A discount is applied for customers who purchased their car with
                us
              </p>
            </div>
            <div>When do you want your policy to start?</div>
          </div>
          <div className="retrieve-quote_right">
            <input></input>
            <div>
              <button>Yes</button>
              <button>No</button>
            </div>
            <input></input>
          </div>
        </div>
      </section>
      <section className="your_details_section">
        <div className="your_details_heading">
          <div>
            <h2>Your details</h2>
          </div>
        </div>
      </section>
      <section className="your_details_inputs">
        <div className="your_details_container">
          <div className="your_details_left"></div>
          <div className="your_details_right"></div>
        </div>
      </section>
      <section></section>
      <Footer />
    </>
  );
}
