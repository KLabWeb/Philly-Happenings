import React from "react";
import "./App.css";

export const Updates = () => {
  return (
    <div key={Math.random()} >
      <h1 id="updates" className="category">Updates</h1>
      <div className="updatesCard">
        <p>Last updated 11/19/2024. Additions of:</p>
        <ul style={{display: "flex", flexFlow: "column", textAlign: "left"}}>
            <li><a href="https://www.instagram.com/bloodsickproductions/" target="_blank" rel="noreferrer">@bloodsickproductions</a></li>
            <li><a href="https://www.youtube.com/@sickslicestudios/videos" target="_blank" rel="noreferrer">@sickslicestudios</a></li>
            <li><a href="https://www.instagram.com/birthdayjake/" target="_blank" rel="noreferrer">@hebgbtv</a></li>
            <li><a href="https://www.instagram.com/lunchmeatvhs/" target="_blank" rel="noreferrer">@lunchmeatvhs</a></li>
            <li><a href="https://www.instagram.com/buffalobillshouse" target="_blank" rel="noreferrer">@buffalobillshouse</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Updates;
