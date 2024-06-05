import React from "react";
import "./App.css";

export const HappeningNow = () => {
  return (
    <div key={Math.random()} >
      <h1 id="happeningNow" className="category">Happening Now</h1>
      <div className="happeningNowCard">
          
      </div>
    </div>
  )
};

export default HappeningNow;
