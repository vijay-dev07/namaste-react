import {CDN_LOGO} from "../utls/constants"; 
import { useState ,useEffect } from "react";

import { Link } from "react-router";
import useOnlineStatus from "../utls/useOnlineStatus";


const Header = () =>{

  const [btnnameReact , setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // if no dependecy array => use effect is called on every render 
  // if dependency array is empty  = [] => use effect is called on initiall render (just once)
  //  if dependency array is [btnnameReact] => called everytime btnnameReact is updated 
  useEffect( () => {
    console.log("use effect called");
  } , []);
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={CDN_LOGO}/>
          </div>
          <div className="nav-items">
            <ul>
              <li
                style={{
                  color: onlineStatus ? 'white' : 'black',
                  backgroundColor: onlineStatus ? 'green' : 'red',
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                 {onlineStatus ? "online" : "offline"}
              </li>
                <li><Link to="/">Home</Link></li>
                <li> 
                  <Link to="/about">About Us </Link></li>
                <li>
                  <Link to="/contact">Contact Us</Link> </li>
                  <li>
                  <Link to="/grocery">Grocery</Link> </li>
                <li>cart</li>
                <button className="login" onClick={()=> { btnnameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");}}
                  > {btnnameReact} </button>
            </ul>
          </div>
        </div>
    )
}

export default Header;