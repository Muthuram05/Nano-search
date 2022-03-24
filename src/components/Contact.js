import React from "react";
const Contact=()=>{

    return(
        <div className="SearchInput main-contant">
            <form action="https://formspree.io/f/xqknbdbl" method="POST" id="my-form">           
            <div className="field" >
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" name="email" required/>
                <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
                </span>
                
            </p>
            </div>
            <div className="field">
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Name" name="name" required/>
                <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
                </span>
            </p>
            </div>
            <div className="field">
            <textarea class="textarea" placeholder="Your Message" name="message" required></textarea>  
            </div>
            
            <div className="field">
            <p className="control">
                <button className="button is-success" >
                Send
                </button>
            </p>
            <p id="my-form-status"></p>
            </div>
            </form>
        </div>
    )
}
export default Contact;