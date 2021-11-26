import React from "react";
import { useState } from "react";
import { set } from "firebase/database";
import { ref } from "firebase/database";
const Admin = (props) => {
  const [Video, setVideo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const Submit = async (event) =>  {
    event.preventDefault();
    setIsSubmitting(true);
    let containYoutube = /youtube.com/.test(Video)
    let containVideoId = /v=.{11}/.test(Video)
    if(containYoutube && containVideoId){
        let newVideos = props.videos !== null ? props.videos : [] ;
        //get the id of the video
        let youtubeId = Video.replace(/.+v=(.{11}).*/, '$1')
        newVideos.push(youtubeId);
        set(ref(props.database, '/videos'), newVideos);
        setVideo('');
        setIsSubmitting(false);
    }else{
        alert("It have to Youtube Link");
        setVideo("");
        setIsSubmitting(false);
    }
    
  };

  const onChange = (event) => {
    setVideo(event.target.value);
  };

  const clearQueue = () => {
    set(ref(props.database, "/videos"), []);
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
      <button onClick={clearQueue} disabled={isSubmitting}>Clear Queue</button>
    </div>
  );
};

export default Admin;
