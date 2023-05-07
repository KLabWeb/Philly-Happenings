import React from "react";
import "./App.css";
import { getVideo } from "./videoData"

const setVideoElement = () => {
  const videoLocation = getVideo();
  const videoPlayer = document.getElementById('videoPlayer')
  videoPlayer.setAttribute('src', videoLocation);
}

const setInitialVideoElement = () => {
  const videoPlayer = document.getElementById('videoPlayer')
  videoPlayer.style.display = "block";
  document.getElementById('playButton').style.display = "none";
  document.getElementById('playText').style.display = "block";
  setVideoElement();
}

const setNextVideoElement = () => setVideoElement();

export const VideoPlayer = () => {
  return (
    <>
      <h1 className="category">Are You Not Entertained?</h1>
      <div className="videoCard" key={Math.random()} >
        <div className="videoContainer">
            <img id="playButton" src="/images/play.gif" alt="play" onClick={() => {setInitialVideoElement()}}/>
            <video id="videoPlayer"controls autoPlay />
            <button id="playText" onClick={() => {setNextVideoElement()}}>Next</button>
        </div>
      </div>
    </>
  )
};

export default VideoPlayer;
