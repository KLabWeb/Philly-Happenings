import React from "react";
import "./App.css";

export const About = () => {
  return (
    <div key={Math.random()} >
      <h1 id="about" className="category">Site Info</h1>
      <div className="aboutCard">
        <p>A Yellow Pages for DIY, art, music, anarchist, and nature groups, spaces, and events in Philadelphia and the surrounding area. It gives a special focus to underground spaces, counter culture happenings, wild earth, and music.</p>

        <p>Follow me on <a href="https://www.instagram.com/philly.happenings" alt="Insta" target="_blank" rel="noreferrer">Instagram</a> for site news.</p>

        <p>Want to add a spot, event, group, or resource to this site? Run a spot, event, group, or resource and want to change the description of it on here? Found an error or incorrect info? See something that is out of date and needs updating? Send an email to <a href="mailto: philly-happenings@protonmail.com">philly-happenings@protonmail.com</a> to have the site updated.</p>

        <p>This site is a work in progress and some sections have not been fully built out yet.</p>
      </div>
    </div>
  )
};

export default About;
