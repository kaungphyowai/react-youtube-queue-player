import React from "react";
import { useState } from "react";
import { set } from "firebase/database";
import { ref } from "firebase/database";
import './Admin.css'
import { Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
const Admin = (props) => {
  const [Video, setVideo] = useState("");
  const [isSpeaker, setisSpeaker] = useState(false)
  const Submit = async (event) =>  {
    event.preventDefault();
    props.setIsSubmitting(true);
    let containYoutube = /youtube.com/.test(Video)
    let containVideoId = /v=.{11}/.test(Video)
    if(containYoutube && containVideoId){
      //get the current user videos, if empty, make an empty array
        let newVideos = props.videos[props.user.displayName] ? props.videos[props.user.displayName] : [] ;
        //get the id of the video
        console.log(newVideos)
        let youtubeId = Video.replace(/.+v=(.{11}).*/, '$1')
        newVideos.push(youtubeId);
        set(ref(props.database, '/' + props.user.displayName), newVideos);
        setVideo('');
    }else{
        alert("It have to Youtube Link");
        setVideo("");
        props.setIsSubmitting(false);
    }
    
  };

  const onChange = (event) => {
    setVideo(event.target.value);
  };

  

  const goToPlayer = () => {
    let result = window.confirm("ဖွင့်မဲ့သူတယောက်ဘဲ ဒီ link ကိုသွားပါ (ok or cancel)");
    result ? setisSpeaker(true) : setisSpeaker(false)
  }
  return (
    <div className="center dark">
      {
        props.isSubmitting ? <BounceLoader size={150} color={"#123abc"} loading={props.isSubmitting} speedMultiplier={1.5} /> :
      <div>
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
        <button type="submit" hidden={true} disabled={props.isSubmitting}></button>
      </form>

      
      <div className="link" onClick={goToPlayer}>

      <Link to={isSpeaker ? 'player' : '#'} >Speaker သမား</Link>
      </div>
      </div>
      }
    </div>
  );
};

export default Admin;
