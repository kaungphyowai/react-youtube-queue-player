import YouTube from "react-youtube";
import { set } from "firebase/database";
import { ref } from "firebase/database";
import "./Player.css";

function Player(props) {
  //https://youtu.be/py3zoTVmm2s
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1
    },
  };
  const onEnd = (event) => {
      let remainingVideos = props.videos;
      remainingVideos.shift();
      set(ref(props.database, '/videos'), remainingVideos);
  };

  const unMute = (event) => {
    //unmute the video in case if the page already has interaction
    event.target.unMute();
    event.target.setVolume(40)
  }
  const clearQueue = () => {
    set(ref(props.database), []);
  };
  return (
    <div className="center background">
      {
        props.videos === null ?
        (
          <p>There is no video to play</p>
        ):
        (

          <YouTube
            videoId={props.videos[0]}
            opts={opts}
            onEnd={onEnd}
            onPlay={unMute}
            className="player"
          />
        )
      }
      <button onClick={clearQueue}  className="clear">Clear Queue</button>
    </div>
  );
}

export default Player;
