import React, { useState } from "react";
import "./App.css";
import { VIDEOS } from "./videoData"

export const VideoPlayer = () => {
  const [remainingVideos, setVideos] = useState([...VIDEOS]);
  const [videoSrc, setVideoSrc] = useState("/videos/1682738409080161.webm");

  const loadNextVideo = () => {
    if(remainingVideos.length === 0){
      setVideos(remainingVideos.push("/videos/1672886881423209.webm", ...VIDEOS));
    }

    const videoIndex = Math.floor(Math.random()*remainingVideos.length);
    const videoName = videoSrc === '/videos/1680999535039292.webm' ? '/videos/1680999598012070.webm' : remainingVideos[videoIndex];

    setVideos(remainingVideos.filter(video => video !== videoName));
    setVideoSrc(videoName);
    console.log(remainingVideos.length);
  }

  const [showImg, setShowImg] = useState(true);

  const onButtonClick = () => {
    setShowImg(false);
  }

  return (
    <>
      <h1 className="category" id="mid-page">Ah, a weary traveller. Welcome to the mid page. Come rest for a moment.</h1>
      <div className="videoCard" key={Math.random()} >
        <div className="videoContainer">
            { !showImg && <button className="playText" onClick={() => loadNextVideo()}>Next</button>  }
            { showImg && <img id="playButton" src="/images/play.gif" alt="play" onClick={() => onButtonClick()}/> }
            { showImg && <button className="playText" onClick={() => onButtonClick()}>Click for dopamine</button>  }
            { !showImg && <video src={videoSrc} onEnded={() => loadNextVideo()} id="videoPlayer"controls autoPlay /> }
            { !showImg && <button className="playText" onClick={() => loadNextVideo()}>Next</button>  }
        </div>
      </div>
    </>
  )
};

export default VideoPlayer;
