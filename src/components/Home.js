import React from "react";
import axios from "axios";
import Image from "./Image";
import SearchInput from './SearchInput';
import VideoList from "./video";



class Home extends React.Component{
    constructor(props){
      super(props)
      this.state={
          image:[],
          video:[],
          test:"one",
      }
      this.onSearchSubmit = this.onSearchSubmit.bind(this)
      this.onVideoSearchSubmit = this.onVideoSearchSubmit.bind(this)
    }
    async onVideoSearchSubmit(entry){
        const responseVideo= await axios.get(`https://pixabay.com/api/videos/?key=26152324-baaad41c2a4e08cae4520d672&q=${entry}&pretty=true`)
        console.log(responseVideo.data.hits)
        this.setState({video:responseVideo.data.hits})
    }
    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=26152324-baaad41c2a4e08cae4520d672&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({image:response.data.hits})
    }
    myFunction_photo(){
      var element=document.querySelector(".Photo-video-but");
      element.classList.add("photo");
      element.classList.remove("video");
    }
    myFunction_video(){
      var element=document.querySelector(".Photo-video-but");
      element.classList.add("video");
      element.classList.remove("photo");
      
    }
    //sending video to videopage 
   
    render(){
    return(
      <div >
        <SearchInput onVideoSearchSubmit={this.onVideoSearchSubmit} onSearchSubmit={this.onSearchSubmit} /> 
        <div style={{display:"flex"}} className="Founded-message">
            <div >
              {this.state.image.length} images is found 
            </div>
            <div>
            {this.state.video.length} videos is found 
            </div>
        </div>
        
        <div className="main-contant Photo-video-but">
        <div className="box listNavBar">
          <div className="Button" >
            <button onClick={this.myFunction_photo}>Images</button>
          </div>
          <div className="Button">
            <button onClick={this.myFunction_video}>Videos</button>
          </div>
        </div>
          <div id="photo">
          <Image images={this.state.image} ></Image>
          </div>
          <div  id="video">
          <VideoList videos={this.state.video}></VideoList>
          </div>
           
         
        </div>
    </div>
    )}}

export default Home;
