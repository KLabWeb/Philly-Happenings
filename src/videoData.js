export const VIDEOS = [
  "/videos/1672966024488308.webm",
  "/videos/1672484486295268.webm",
  "/videos/1672886881423209.webm",
  "/videos/1672886949405656.webm",
];

export const getVideo = () => VIDEOS[Math.floor(Math.random()*VIDEOS.length)];
