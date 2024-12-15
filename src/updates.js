import React from "react";
import "./App.css";

export const Updates = () => {
  return (
    <div key={Math.random()} className="updates">
      <h1 id="updates" className="category">Recent Updates</h1>
      <div className="updatesCard">
        <h4>12/14/2024</h4>
        <p>Additions:</p>
        <ul>
          <li><a href="https://www.instagram.com/grimgrimgrim215" target="_blank" rel="noreferrer">General: GrimGrimGrim</a></li>
          <li><a href="https://bsidesphilly.org/" target="_blank" rel="noreferrer">Anarchist, Rad, & Adjacent: Bsides Philly</a></li>
        </ul>
        <p>Closed Space:</p>
        <ul>
          <li><a href="https://www.instagram.com/goolagoon.phl/" target="_blank" rel="noreferrer">DIY Spots: Goo Lagoon</a></li>
        </ul>
        <p>Update:</p>
        <ul>
          <li><a href="https://lightboxfilmcenter.org/" target="_blank" rel="noreferrer">Indie/Arthouse Theater: Lightbox Film Center</a> <b>is back</b> following losing its old U of Arts home, now showing at Bok Auditorium.</li>
        </ul>

        <h4>11/20/2024</h4>
        <p>Additions:</p>
        <ul>
          <li><a href="https://www.instagram.com/babygoblinproductions" target="_blank" rel="noreferrer">Horror: Baby Goblin Productions</a></li>
          <li>Expansion of "Events by [Dates]" Sections</li>
        </ul>
        <p>Removed (No Longer Active):</p>
        <ul>
          <li><a href="https://www.facebook.com/rwthphilly/" target="_blank" rel="noreferrer">Rolling with the Homos</a></li>
          <li><a href="https://phillyantifa.org/" target="_blank" rel="noreferrer">Philly Antifa</a></li>
        </ul>
        {/* <p>Verification:</p>
        <ul>
          <li>Verified "still active" for all "Anarchist, Rad, & Adjacent" entries & their socials. Some socials updated or removed.</li>
          <li>Verification of existing "Events by [Dates]" entries still accurate.</li>
        </ul> */}


        <h4>11/19/2024</h4>
        <p>Additions:</p>
        <ul>
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

        <p>Closed Spaces:</p>
        <ul>
          <li><a href="https://www.instagram.com/hausofyarga/" target="_blank" rel="noreferrer">DIY Spot: Haus of Yarga (RIP)</a></li>
          <li><a href="https://www.instagram.com/tabernaclephilly" target="_blank" rel="noreferrer">DIY Spot: The Tabernacle</a></li>
        </ul>

        <p>On a larger update, the <a href="#mid-page">Intermission</a> section now no longer contains random videos from the net and instead includes only local philly videos. Check it out for some local music and film.</p>
      </div>
    </div>
  )
};

export default Updates;
