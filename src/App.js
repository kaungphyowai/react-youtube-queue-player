import "./App.css";
import YouTube from "react-youtube";
import Player from "./Player";

//https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed
//https://www.youtube.com/watch?v=XbqFZMIidZI&ab_channel=PopCornRest-TikTok
//https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk
function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Player />
      <button>Mute</button>
    </div>
  );
}

export default App;
