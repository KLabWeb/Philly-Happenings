import React, { useState } from "react";
import "./App.css";
import { VIDEOS } from "./videoData";
import { VIDEOSLOCALINFO } from "./videosLocalData";

export const VideoPlayer = () => {
  const [remainingVideos, setVideos] = useState([...VIDEOS]);
  const [videoSrc, setVideoSrc] = useState("/videos/1683393702542650.webm");
  const [showLocalInfo, setShowLocalInfo] = useState(false);
  const [localInfo, setLocalInfo] = useState({});

  const loadNextVideo = () => {
    if(remainingVideos.length === 0){
      setVideos(remainingVideos.push(...VIDEOS));
    }

    const videoIndex = Math.floor(Math.random()*remainingVideos.length);
    const videoName = remainingVideos[videoIndex];

    setShowLocalInfo(false);

    if(videoName.includes("LOCAL_BAND")){
      const localInfo = VIDEOSLOCALINFO.find(video_info => videoName.includes(video_info.filename));
      if(localInfo){
        setLocalInfo(localInfo);
      }
      setShowLocalInfo(true);
    }

    setVideos(remainingVideos.filter(video => video !== videoName));
    setVideoSrc(videoName);
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
            { showLocalInfo && <h4 className="localInfoBand">Local Band: {localInfo.band}</h4>}
            { showImg && <img id="playButton" src="/images/play.gif" alt="play" onClick={() => onButtonClick()}/> }
            { showImg && <button className="playText" onClick={() => onButtonClick()}>Click for dopamine</button>  }
            { !showImg && <video src={videoSrc} onEnded={() => loadNextVideo()} id="videoPlayer"controls autoPlay /> }
                        { showLocalInfo && <h4 className="localInfo localInfoBand">Local Band: {localInfo.band}</h4>}
            { !showImg && <button className="playText" onClick={() => loadNextVideo()}>Next</button>  }
            { showLocalInfo && <h4 className="localInfo" >Bandcamp: <a href={localInfo.bandcamp} target="_blank" rel="noreferrer">{localInfo.bandcamp}</a></h4>}
            { showLocalInfo && localInfo.bandcamp && <h4 className="localInfo">Social: <a href={localInfo.social} target="_blank" rel="noreferrer">{localInfo.social}</a></h4>}
            { showLocalInfo && localInfo.videographer && <h4 className="localInfo">Videographer: <a href={localInfo.videographerLink} target="_blank" rel="noreferrer">{localInfo.videographer}</a></h4>}
        </div>
      </div>
    </>
  )
};

export default VideoPlayer;
