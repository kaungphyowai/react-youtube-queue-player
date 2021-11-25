import YouTube from "react-youtube";
import { set } from "firebase/database";
import { ref } from "firebase/database";
function Player(props) {
  //https://youtu.be/py3zoTVmm2s
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
    },
  };
  const onEnd = (event) => {
      let newArray = props.videos;
      newArray.shift();
      set(ref(props.database, '/videos'), newArray).then(rel => props.getData());
  };
  return (
    <div>
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
          />
        )
      }
    </div>
  );
}

export default Player;
