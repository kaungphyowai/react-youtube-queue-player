import "./App.css";
import Player from "./Player";
import Admin from "./Admin";
import firebaseApp from './firebase/firebaseApp';
import { getDatabase } from "firebase/database";
import {ref, onValue} from 'firebase/database';
import { useState, useEffect } from "react";
//https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed
//https://www.youtube.com/watch?v=XbqFZMIidZI&ab_channel=PopCornRest-TikTok
//https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk

//database locaiton
let database = getDatabase(firebaseApp)
let videosRef = ref(database, '/videos')


function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
  onValue(videosRef, (snapshot) => {
    const data = snapshot.val();
    setVideos(data);
  })
  
}, [])

//delete this in production
  useEffect(() => {
    console.log(videos)
  }, [videos])

  return (
    <div>
      <h1>Hello world</h1>
      <Player database={database} videos={videos}  />
      <hr />
      <Admin database={database} videos={videos} />
    </div>
  );
}

export default App;
