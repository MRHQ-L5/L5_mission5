import React from "react";
import { useNavigate } from "react-router-dom";
import "./UnderConstructionContent.css";
import OhNo from "../images/unsplash_5_GRulmDNX0.png"

function UnderConstructionContent () {
  let navigate = useNavigate();

  return (
    <>
      <div className="underconstruction_main">
        <img src={OhNo} alt='under_construction'/>
        <div className="underconstruction_text">
          <h1 className="underconstruction_h1tag"> Oh no!</h1>
          <h2 className="underconstruction_h2tag"> The page you're looking for is <br/>
            is currently under construction. <br/><br/>
            Come back to the home page.
          </h2>
          <button className="underconstruction_btn" onClick={() => navigate("/")}>Return to home page   &rarr;</button>
        </div>
      </div>
    </>
  );
};

export default UnderConstructionContent;