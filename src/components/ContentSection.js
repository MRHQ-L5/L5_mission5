import React from "react";
import "./ContentSection.css";

export default function ContentSection() {
  return (
    <section className="content_container">
      <div className="text_container">
        <h1>
          <b>1000's of Quality Cars for Sale!</b>
        </h1>
        <p>
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
          <div className="inside_box"></div>
          <div className="inside_box"></div>
          <div className="inside_box"></div>
        </div>
        <div className="content_box">
          <div className="inside_box">
            <button className="box_btn">Sell a car</button>
          </div>
          <div className="inside_box"></div>
          <div className="inside_box"></div>
          <div className="inside_box"></div>
        </div>
        <div className="content_box">
          <div className="inside_box">
            <button className="box_btn">Get car insurance</button>
          </div>
          <div className="inside_box"></div>
          <div className="inside_box"></div>
          <div className="inside_box"></div>
        </div>
      </div>
    </section>
  );
}
