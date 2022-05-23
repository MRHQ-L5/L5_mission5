import React from "react";
import "./ContentSection.css";

export default function ContentSection() {
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
          <div className="inside_box">
            <button className="box_btn">Buy a car</button>
          </div>
          <div className="inside_box">
            <h3>Buy Now</h3>
            <p>Purchase directly from our site in branch, on the spot!</p>
          </div>
          <div className="inside_box">
            <h3>Online auctions</h3>
            <p>
              These are either held exclusively on our website or in partnership
              with Trade me
            </p>
          </div>
          <div className="inside_box">
            <h3>Live auction</h3>
            <p>You can you this online or come into the branch</p>
          </div>
        </div>
        <div className="content_box">
          <div className="inside_box">
            <button className="box_btn">Sell a car</button>
          </div>
          <div className="inside_box">
            <h3>Turners CashNow</h3>
            <p>
              Get and offer on the spot, and you’ll have money in your bank
              account within 48 hours.
            </p>
          </div>
          <div className="inside_box">
            <h3>Trade-in</h3>
            <p>
              Use your old car to help buy your next car. We can even finance
              the difference.
            </p>
          </div>
          <div className="inside_box">
            <h3>Sell by Auction</h3>
            <p>
              Hassel-free. We will do the hard work for you. Let the markey
              decide what your car is worth
            </p>
          </div>
        </div>
        <div className="content_box">
          <div className="inside_box">
            <button className="box_btn">Get car insurance</button>
          </div>
          <div className="inside_box">
            <h3>Get a free quote</h3>
            <p>Get a free quote in 2 minutes. It’s on us!</p>
          </div>
          <div className="inside_box">
            <h3>Do it all online</h3>
            <p>You can buy insurance all online, at your pace.</p>
          </div>
          <div className="inside_box">
            <h3>Bought your car with us?</h3>
            <p>Get an insurance discount if you bought your car with us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
