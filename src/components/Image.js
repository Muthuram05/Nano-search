import React from "react";
import './SearchInput.css'
const ImageList=(props)=>{
    const images=props.images.map((image)=>
    {
        return <img key={image.id} src={image.webformatURL} alt="images" width={"200px"} height={"200px"}></img>
    }
    )
    return(
        <div>
            {images}
        </div>
    )
}
export default ImageList