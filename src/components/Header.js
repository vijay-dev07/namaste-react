import {CDN_LOGO} from "../utls/constants"; 
import { useState } from "react";


const Header = () =>{

  const [btnnameReact , setBtnNameReact] = useState("Login");
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={CDN_LOGO}/>
          </div>
          <div className="nav-items">
            <ul>
                <li>Home </li>
                <li>About Us </li>
                <li>Contact Us </li>
                <li>cart</li>
                <button className="login" onClick={()=> { btnnameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");}}
                  > {btnnameReact} </button>
            </ul>
          </div>
        </div>
    )
}

export default Header;