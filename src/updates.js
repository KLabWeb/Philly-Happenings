import React from "react";
import "./App.css";

export const Updates = () => {
  return (
    <div key={Math.random()} >
      <h1 id="updates" className="category">Updates</h1>
      <div className="updatesCard">
        <p>Last updated 11/19/2024.</p>
          
        <p>Additions:
          <ul style={{display: "flex", flexFlow: "column", textAlign: "left"}}>
              <li><a href="https://www.instagram.com/bloodsickproductions/" target="_blank" rel="noreferrer">Horror: Blood Sick Productions</a></li>
              <li><a href="https://www.instagram.com/luthersmidfrightsnack/" target="_blank" rel="noreferrer">Horror: Sick Slice Studios</a></li>
              <li><a href="https://www.instagram.com/birthdayjake/" target="_blank" rel="noreferrer">Horror: Knucklehead's Films</a></li>
              <li><a href="https://www.instagram.com/lunchmeatvhs/" target="_blank" rel="noreferrer">Horror: Lunch Meat VHS</a></li>
              <li><a href="https://www.instagram.com/buffalobillshouse" target="_blank" rel="noreferrer">Horror: Bufallo Bill's House</a></li>
              <br></br>
              <li><a href="https://www.instagram.com/bond.villain/" target="_blank" rel="noreferrer">DIY Spot: Bond Villian</a></li>
              <li><a href="https://www.instagram.com/onion.transfer/" target="_blank" rel="noreferrer">DIY Spot: Union Transfer 2 (formerly Lucky Aide)</a></li>
              <br></br>
              <li><a href="https://www.instagram.com/tabernaclebooking/" target="_blank" rel="noreferrer">DIY Booking: The Tabernacle</a></li>  
          </ul>
        </p>
        <p>Closed Spaces:
          <ul style={{display: "flex", flexFlow: "column", textAlign: "left"}}>
              <li><a href="https://www.instagram.com/hausofyarga/" target="_blank" rel="noreferrer">DIY Spot: Haus of Yarga (RIP)</a></li>
              <li><a href="https://www.instagram.com/tabernaclephilly" target="_blank" rel="noreferrer">DIY Spot: The Tabernacle</a></li>  
          </ul>
        </p>
        <p>On a larger update, the <a href="#mid-page">Intermission</a> section now no longer contains random videos from the net and instead includes only local philly videos. Check it out for some local music and film.</p>
      </div>
    </div>
  )
};

export default Updates;