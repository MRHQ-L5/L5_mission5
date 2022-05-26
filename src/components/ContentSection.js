import React from "react";
import "./ContentSection.css";
import { useNavigate } from "react-router-dom";

export default function ContentSection() {
  let navigate = useNavigate();
  return (
    <section className="content_container">
      <div className="text_container">
        <h1 className="home_title">
          <b>1000's of Quality Cars for Sale!</b>
        </h1>
        <p className="home_text">
          Turners Cars is the largest used car network in New Zealand with 19
          car dealer locations nationwide. With a huge range of around 3000 cars
          for sale (and 1500 made ready for sale at any one time) there us truly
          something for everyone. We've been helping kiwis buy and sell used
          cars for over 50 years. And if you want car finance or car Insurance,
          we can sort that out for you as well.
        </p>
      </div>
      <div>
        <div className="content_box">
          <div className="box_outer_btn">
            <button
              className="box_btn"
              onClick={() => navigate("/UnderConstruction")}
            >
              Buy a car
            </button>
          </div>
          <div className="inside_box">
            <div className="inside_line">
              <h3 className="h3tag_in_boxes">Buy Now</h3>
              <p className="ptag_in_boxes">
                Purchase directly from our <br />
                site in branch, on the spot!{" "}
              </p>
            </div>
          </div>
          <div className="inside_box">
            <div className="inside_line">
              <h3 className="h3tag_in_boxes">Online auctions</h3>
              <p className="ptag_in_boxes">
                {" "}
                These are either held exclusively on our <br />
                website or in partnership with Trade me
              </p>
            </div>
          </div>
          <div className="outer_box">
            <h3 className="h3tag_in_boxes">Live auction</h3>
            <p className="ptag_in_boxes">
              You can you this online or <br />
              come into the branch
            </p>
          </div>
        </div>
        <div className="content_box">
          <div className="box_outer_btn">
            <button
              className="box_btn"
              onClick={() => navigate("/UnderConstruction")}
            >
              Sell a car
            </button>
          </div>
          <div className="inside_box">
            <div className="inside_line">
              <h3 className="h3tag_in_boxes">Turners CashNow</h3>
              <p className="ptag_in_boxes">
                Get and offer on the spot, and you’ll have <br />
                money in your bank account within 48 hours.
              </p>
            </div>
          </div>
          <div className="inside_box">
            <div className="inside_line">
              <h3 className="h3tag_in_boxes">Trade-in</h3>
              <p className="ptag_in_boxes">
                Use your old car to help buy your next car. <br />
                We can even finance the difference.
              </p>
            </div>
          </div>
          <div className="outer_box">
            <h3 className="h3tag_in_boxes">Sell by Auction</h3>
            <p className="ptag_in_boxes">
              Hassel-free. <br />
              We will do the hard work for you. <br />
              Let the markey decide what your car is worth.
            </p>
          </div>
        </div>
        <div className="content_box">
          <div className="box_outer_btn">
            <button className="box_btn" onClick={() => navigate("/Insurance")}>
              Get car insurance
            </button>
          </div>
          <div className="inside_box">
            <div className="inside_line">
              <h3 className="h3tag_in_boxes">Get a free quote</h3>
              <p className="ptag_in_boxes">
                Get a free quote in 2 minutes. <br />
                It's on us!
              </p>
            </div>
          </div>
          <div className="inside_box">
            <div className="inside_line">
              <h3 className="h3tag_in_boxes">Do it all online</h3>
              <p className="ptag_in_boxes">
                You can buy insurance all online, at your pace.
              </p>
            </div>
          </div>
          <div className="outer_box">
            <h3 className="h3tag_in_boxes">Bought your car with us?</h3>
            <p className="ptag_in_boxes">
              Get an insurance discount <br />
              if you bought your car with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
