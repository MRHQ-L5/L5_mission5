import React, { useState } from "react";
import Footer from "../components/Footer";
import NavbarSmall from "../components/NavbarSmall";
import "../components/QuoteDetails.css";

export default function QuoteDetails() {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };

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
            <div className="current_progress"></div>
            <div className="uncurrent_progress"></div>
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
            <h3
              className="quote_questions"
              type="text"
              placeholder="Your quote number"
            >
              Enter your quote number
            </h3>
            <h3 className="quote_questions">
              Did you buy your car with us?
              <p>
                A discount is applied for customers who purchased their car with
                us
              </p>
            </h3>
            <h3
              className="quote_questions"
              type="date"
              value="2022-05-25"
              min="2022-05-25"
              max="2099-12-30"
              placeholder="DD / MM / YYYY"
            >
              When do you want your policy to start?
            </h3>
          </div>
          <div className="retrieve-quote_right">
            <input
              className="quote_input"
              type="text"
              placeholder="Your quote number"
            ></input>
            <div className="quote_btn_container">
              <button
                onClick={toggle}
                className={
                  "quote_btn_yes--closed " +
                  (state ? "quote_btn_yes--toggled" : "quote_btn_yes--closed")
                }
              >
                Yes
              </button>
              <button
                onClick={toggle}
                className={
                  "quote_btn_no--closed " +
                  (state ? "quote_btn_no--closed" : "quote_btn_no--toggled")
                }
              >
                No
              </button>
            </div>
            <input
              className="quote_input"
              type="text"
              placeholder="DD / MM / YYYY"
            ></input>
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
          <div className="your_details_left">
            <input
              className="quote_input"
              type="text"
              placeholder="First name"
            ></input>
            <h3 className="quote_questions">
              Where is your car usually parked at?
            </h3>
            <h3 className="quote_questions">What is your contact number?</h3>
            <h3 className="quote_questions">What is your email?</h3>
          </div>
          <div className="your_details_right">
            <input
              className="quote_input"
              type="text"
              placeholder="Last name"
            ></input>
            <input
              className="quote_input"
              type="text"
              placeholder="Type in address"
            ></input>
            <input
              className="quote_input"
              type="text"
              placeholder="Type in mobile"
            ></input>
            <input
              className="quote_input"
              type="text"
              placeholder="Type in email"
            ></input>
          </div>
        </div>
      </section>
      <section className="btn_section">
        <div className="btn_container">
          <button className="back_btn">Back</button>
          <button className="next_btn">Next</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
