import "./App.css";
import Player from "./Player";
import Admin from "./Admin";
import firebaseApp from './firebase/firebaseApp';
import { getDatabase } from "firebase/database";
import {ref, child, get} from 'firebase/database';
import { useState, useEffect } from "react";
//https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed
//https://www.youtube.com/watch?v=XbqFZMIidZI&ab_channel=PopCornRest-TikTok
//https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk

//database locaiton
let database = getDatabase(firebaseApp)
let dataRef = ref(database)


function App() {
  const [videos, setVideos] = useState('')
  //data
  useEffect(() => {
    get(child(dataRef, '/videos')).then((snapshot) => {
      if (snapshot.exists()) {
        let body = snapshot.val();
        setVideos(body.videos)
        console.log(videos)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])
  return (
    <div>
      <h1>Hello world</h1>
      <Player database={database} videos={videos} />
      <hr />
      <Admin database={database} videos={videos} />
    </div>
  );
}

export default App;
