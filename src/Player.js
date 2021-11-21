import YouTube from "react-youtube";
import { useState } from "react";
function Player() {
  //https://youtu.be/py3zoTVmm2s
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ["jNQXAC9IVRw", "XbqFZMIidZI", "hS5CfP8n_js"];
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
    },
  };
  function _onReady(event) {
    // access to player in all event handlers via event.target
    console.log("video ready");
    event.target.unMute();
  }
  const onEnd = (event) => {
    if (videos.length == currentVideo + 1) {
      console.log("this is the end");
      return;
    }
    setCurrentVideo(currentVideo + 1);
  };
  return (
    <div>
      <YouTube
        videoId={videos[currentVideo]}
        opts={opts}
        onReady={_onReady}
        onEnd={onEnd}
      />
    </div>
  );
}

export default Player;
