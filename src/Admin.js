import React from "react";
import { useState } from "react";
import { set } from "firebase/database";
import { ref } from "firebase/database";
import './Admin.css'
import { Link } from "react-router-dom";
const Admin = (props) => {
  const [Video, setVideo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSpeaker, setisSpeaker] = useState(false)
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

  const goToPlayer = () => {
    let result = window.confirm("ဖွင့်မဲ့သူတယောက်ဘဲ ဒီ link ကိုသွားပါ (ok or cancel)");
    result ? setisSpeaker(true) : setisSpeaker(false)
  }
  return (
    <div className="center dark">
      <h1 className='header'>Life Just Better With Music</h1>
      <form onSubmit={Submit} className="form">
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={onChange}
          value={Video}
          className="textarea"
          placeholder="https://www.youtube.com/..."
        />
        <button type="submit" hidden={true}></button>
      </form>

      <button onClick={clearQueue} disabled={isSubmitting} className="clear">Clear Queue</button>
      <div className="link" onClick={goToPlayer}>

      <Link to={isSpeaker ? '/player' : '#'} >Speaker သမား</Link>
      </div>
    </div>
  );
};

export default Admin;
