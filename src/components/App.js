import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from "./Nav";
import About from "./AboutUs";
import Contact from "./Contact";
import Home from "./Home";
import nano from "./Image/Nano.jpg"

function App(){

  
  return(
    <div>
    <div className="test ">
      <div className="Logo">
      <img src={nano}></img>
      </div>     
    <div>
        <BrowserRouter >
          <Routes >
            <Route path="/Home" element={<Home/>} ></Route>
            <Route path="/AboutUs" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
          <Nav/>
          
        </BrowserRouter>
    </div>
      
    
    </div>
 </div>
  )
  
}
      
    
export default App;
