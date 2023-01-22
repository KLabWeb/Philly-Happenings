import React from "react";
import "./App.css";
import { Link } from 'react-router';

export const Header = props => {
  return (
    <div key={props.key} className="header">
      <h1 className="pageTitle">Philly Happenings</h1>

      <h1 className="category">Site Index</h1>
      <div className="headerIndex">
        <Link to="/"><a href="#events-by-month">Annual Events by Date</a></Link>
        <a href="#about">Site Info</a>
        <a href="#anarchist-philly">Anarchist</a>
        <a href="#anime-philly">Anime</a>
        <a href="#cycling">Cycling</a>
        <a href="#film-festivals">Film</a>
        <a href="#general">General</a>
        <a href="#green-gardens">Green</a>
        <a href="#literature">Literature</a>
        <a href="#music-above-philly">Music</a>
        <a href="#photography">Photography</a>
        <a href="#theater">Theater</a>
      </div>

    </div>
  )
};

export default Header;
