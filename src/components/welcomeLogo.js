import React from "react";
import welcome from "./Image/nano-welcome-gif.gif"
function welcomeLogo(){
   return(
    <div className="welcome-logo">
    <img src={welcome} id="welcome-logo"></img>
  </div>
   )
}
export default welcomeLogo