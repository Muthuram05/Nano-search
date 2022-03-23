import React from "react";
import image from "./Image/screenshot-1.gif";
const About =()=>{
    return(
        <div className="main-contant about" >
            <div className="about-logo">
                <img src={image}></img>
            </div>
            <div className="text">
            We have created a Mini level search engine.
            Here you can find whatever images and videos Searching for. 
            And also you can download those Videos and images in Your device Without degrading the quality.
            As our Search engine is in beginner level you can only find some general images and videos.
            We assure that we will Upgrade our search engine as soon as possible.
            So kindly support us.<br/><br/>
            Thanks for visiting.

            </div>
           
        </div>
    )
}
export default About;