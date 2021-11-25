import React from 'react'
import  { useState } from 'react'
import { set} from 'firebase/database';
import {ref} from 'firebase/database';
const Admin = (props) => {
    const [Video, setVideo] = useState("")
    const Submit = (event) => {
        event.preventDefault();
        let newVideos = props.videos;
        newVideos.push(Video);
        set(ref(props.database, '/videos'), newVideos);
        setVideo('');
        //check if this is a youtube video
            //if yes, get the id of the video
            //if not, Display this is not a youtube video text in red   
    }
    const onChange = (event) => {
        setVideo(event.target.value);
    }
    return (
        <div>
            <form onSubmit={Submit} >
            <label for="fname">Input Your Video:</label>
            <input type="text" id="fname" name="fname" onChange={onChange} value={Video} />
            <br />
            <br />
            <button type="submit" >Enter</button>
            </form>
        </div>
    )
}

export default Admin
