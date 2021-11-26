import React from "react";
import { useState } from "react";
import { set } from "firebase/database";
import { ref } from "firebase/database";
const Admin = (props) => {
  const [Video, setVideo] = useState("");

  const Submit = async (event) =>  {
    event.preventDefault();
    let containYoutube = /youtube.com/.test(Video)
    let containVideoId = /v=.{11}/.test(Video)
    if(containYoutube && containVideoId){

        let newVideos = Array.isArray(props.videos) ? props.videos : [] ;
        //get the id of the video
        let youtubeId = Video.replace(/.+v=(.{11}).*/, '$1')
        newVideos.push(youtubeId);
        console.log(newVideos);
        await set(ref(props.database, '/videos'), newVideos);
        props.getData();
        setVideo('');
    }else{
        alert("It have to Youtube Link");
        setVideo("");
    }
    
  };

  const onChange = (event) => {
    setVideo(event.target.value);
  };

  const clearQueue = () => {
    set(ref(props.database, "/videos"), null);
    props.getData();
  };
  return (
    <div>
      <form onSubmit={Submit}>
        <label for="fname">Input Your Video:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={onChange}
          value={Video}
        />
        <br />
        <br />
        <button type="submit">Enter</button>
      </form>
      <button onClick={clearQueue}>Clear Queue</button>
    </div>
  );
};

export default Admin;
