import React from "react";
import "./App.css";

export const About = () => {
  return (
    <div>
      <h1 id="about" className="category">Site Info</h1>
      <div className="aboutCard">
        <p>A Yellow Pages for DIY, art, music, anarchist, and nature groups, spaces, and events in Philadelphia and the surrounding area. It gives a special focus to underground spaces, counter culture happenings, wild earth, and music.</p>

        <p>Follow me on <a href="https://www.instagram.com/philly.happenings" alt="Insta" target="_blank" rel="noreferrer">Instagram</a> for site news and updates.</p>
        
        <p>Send me a message on <a href="https://www.instagram.com/philly.happenings" alt="Insta" target="_blank" rel="noreferrer">Instagram</a> to have your space, venue, or group added to the site, or to have existing card details updated.</p>

        <p>I also post videos for local/regional bands (music videos, shows, etc.) and local groups on the site, under the <a href="#mid-page">Intermission</a> section. Send me a message on Insta to add your video.</p>

        <p>This site is a work in progress and some sections have not been fully built out yet.</p>

        <p>This site is zero-profit project of love, free of ads and trackers.</p>
      </div>
    </div>
  )
};

export default About;
