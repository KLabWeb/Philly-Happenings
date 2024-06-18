import React from "react";
import "./App.css";

export const About = () => {
  return (
    <div key={Math.random()} >
      <h1 id="about" className="category">Site Info</h1>
      <div className="aboutCard">
        <p>A Yellow Pages for DIY, art, music, anarchist, and nature groups, spaces, and events in Philadelphia and the surrounding area. It gives a special focus to underground spaces, counter culture happenings, wild earth, and music.</p>

        <p>Follow me on <a href="https://www.instagram.com/philly.happenings" alt="Insta" target="_blank" rel="noreferrer">Instagram</a> for site news</p>

        <p>Send an email to <a href="mailto: philly-happenings@protonmail.com">philly-happenings@protonmail.com</a> to have your space, venue, or group added to the site.</p>

        <p>I'll also post a video for local bands (music video, live recording, etc.) and local groups on the site, under the "Intermission" section. Send me a message.</p>

        <p>This site is a work in progress and some sections have not been fully built out yet.</p>

        <p>This site is zero-profit project of love, free of ads and trackers.</p>
      </div>
    </div>
  )
};

export default About;
