import React from "react";
import "./App.css";
import calendar from "./images/calendar.png"
import anarchy from "./images/anarchy.jpg"
import info from "./images/info.png"
import anime from "./images/anime.png"
import cycling from "./images/cycling.png"
import film from "./images/film.png"
import general from "./images/general.png"
import green from "./images/green.png"
import literature from "./images/literature.png"
import music from "./images/music.png"
import photography from "./images/photography.png"
import theater from "./images/theater.png"

export const ImageIndex = () => {
  return (
    <>
      <h1 className="category">Site Index</h1>
      <div className="indexImageCard">
        <div className="imageIndexGrid">
          <img src={calendar} alt="events by date" title="Events by Date"/>
          <img src={info} alt="site info" title="Site Info"/>
          <img src={anarchy} alt="anarchy" title="Anarchy"/>
          <img src={anime} alt="anime" title="Anime"/>
          <img src={cycling} alt="cycling" title="Cycling" />
          <img src={film} alt="film" title="Film"/>
          <img src={general} alt="general" title="General"/>
          <img src={green} alt="green" title="Green"/>
          <img src={literature} alt="literature" title="Literature"/>
          <img src={music} alt="music" title="Music"/>
          <img src={photography} alt="photography" title="Photography"/>
          <img src={theater} alt="theater" title="Theater"/>
        </div>
      </div>
    </>
  );
};

export default ImageIndex;
