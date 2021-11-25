import React from 'react'
import  { useState } from 'react'
import {ref, set} from 'firebase/database';
const Admin = (props) => {
    const [Video, setVideo] = useState("")
    let dataRef = ref(props.db, "/videos")
    const Submit = (event) => {
        event.preventDefault();
        setVideo('');
        set(dataRef, [1,2,3]);
          console.log("pee")
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
