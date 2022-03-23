import React from "react";
import './SearchInput.css'
const VideoList=(props)=>{

    const videos=props.videos.map((video)=>
    {
        return <video key={video.id} controls><source  src={video.videos.medium.url}  width={"200px"} max-height={"200px"}></source></video>
        
    }
    )
    return(
        <div>
            {videos}
        </div>
    )
}
export default VideoList
