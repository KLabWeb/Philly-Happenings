import React from "react";
import "./App.css";

import animeSociety from './images/animesociety.png'

export const Updates = () => {
  return (
    <div key={Math.random()} >
      <h1 id="updates" className="category">Updates</h1>
      <div className="aboutCard">
        <p>The Philadelphia Animation Society, which has been running for 40 years, is under threat of closure, due to lack of attendance! Like anime? Don't want to see one of the oldest anime clubs in the country vanish? The next meeting is the second Saturday in March. Please attend!</p>
        <br/>
        <a href="https://www.facebook.com/PhiladelphiaAnimationSociety" alt="philly animation society FB">https://www.facebook.com/PhiladelphiaAnimationSociety</a>
        <img src={animeSociety} className="updateImage"/>
      </div>
    </div>
  )
};

export default Updates;
