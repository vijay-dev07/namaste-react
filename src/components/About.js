import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor (props){
        super(props);
        // console.log("parent contructor");
    }

    componentDidMount(){
        // console.log("parent component did mount");
    }
    render(){
        // console.log("parent render")
            return(
        <div>
            <h1>About Us </h1>
            <h2>this namaste react series.</h2>
            <UserClass name={"vijay kumar"} location = {"ludhiana"}/>
        </div>
    )
    }
}

export default About;