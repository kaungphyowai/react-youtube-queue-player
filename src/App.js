import "./App.css";
import Player from "./Player";
import Admin from "./Admin";
import firebaseApp from './firebase/firebaseApp';
import { getDatabase } from "firebase/database";
import {ref, onValue} from 'firebase/database';
import { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
//https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed
//https://www.youtube.com/watch?v=XbqFZMIidZI&ab_channel=PopCornRest-TikTok
//https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk
const auth = getAuth();


//database locaiton
let database = getDatabase(firebaseApp)
let videosRef = ref(database, '/videos')


function App() {
  const [videos, setVideos] = useState([]);
  const [user, setuser] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
  onValue(videosRef, (snapshot) => {
    const data = snapshot.val();
    setVideos(data);
    console.log("data change :)")
    setIsSubmitting(false)
  })
  
  //check if the user logged in
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setuser(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}, [])

//delete this in production
  useEffect(() => {
    console.log(videos)
    const auth = getAuth();
    console.log("this is the user" + auth.currentUser)
  }, [videos])

  return (
    <div className="fullheight">
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/player">Player</Link> |{" "}
        <Link to="/submit">Video ထည့်မယ်ဗျို့</Link>
      </nav> */}
      <BrowserRouter>
      <Routes>
        {
          user ? <Route path='react-youtube-queue-player/' exact element={<Admin database={database} videos={videos} user={user} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting}/>} />:
          <Route path='react-youtube-queue-player/' exact element={<Login />} />
        }
        <Route path='react-youtube-queue-player/player' exact element={<Player database={database} videos={videos}  />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
