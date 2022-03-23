import React from "react";
const Nav=()=>{
  
    return(
      <div>      
        <nav>
          <div  className="Footer-bar" >
            <div className="But-div ">
            <button  className="But"><a href="/Home">Search</a></button>
            </div>
            <div  className="But-div">
            <button className="But" ><a  href="/AboutUs">AboutUs</a></button>
            </div>
            <div  className="But-div">
            <button className="But" ><a href="/Contact" >Contact</a></button>
            </div>
          </div>
        </nav>
        
        </div>
    )
}
export default Nav;