import "./App.css";
import Player from "./Player";
import Admin from "./Admin";
import firebaseApp from './firebase/firebaseApp';
import { getDatabase } from "firebase/database";
import {ref, onValue} from 'firebase/database';
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
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
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/player">Player</Link> |{" "}
        <Link to="/submit">Video ထည့်မယ်ဗျို့</Link>
      </nav>
      <Routes>
        <Route path='player' element={<Player database={database} videos={videos}  />} />
        <Route path='submit' element={<Admin database={database} videos={videos} />} />
      </Routes>
        
    </div>
  );
}

export default App;
