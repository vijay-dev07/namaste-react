import React from "react";


class UserClass extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            userInfo :{
            name: "dummy",
            location:"default",
            avatar_url:"https://dummy-url.com",
            },
        };
     

        // console.log(this.props.name+"child constructor");
    }

    async componentDidMount(){
        // console.log(this.props.name+ "compnonet did mount ");
        const data = await fetch("https://api.github.com/users/vijay-dev07");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
    }

    render() {
        const {name , location, avatar_url} = this.state.userInfo;
          return ( <div className="user-card">
            <img src={avatar_url}/>
                <h1>Name :{name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact:8288957879 </h3>
            </div> 
        )
    }
}

export default UserClass;