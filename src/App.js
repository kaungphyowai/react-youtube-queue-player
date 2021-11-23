import "./App.css";
import Player from "./Player";
import Admin from "./Admin";
import firebaseApp from './firebase/firebaseApp';
import { getDatabase } from "firebase/database";
//https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed
//https://www.youtube.com/watch?v=XbqFZMIidZI&ab_channel=PopCornRest-TikTok
//https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk

let database = getDatabase(firebaseApp)
function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Player db={database} />
      <hr />
      <Admin db={database} />
    </div>
  );
}

export default App;
