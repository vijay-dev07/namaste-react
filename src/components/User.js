import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count , setCount] = useState(0);

    useEffect(() => {

    },[count]);

 
    return <div className="user-card">
        <h1>Count : {count}</h1>
        <h2>Name :{name}</h2>
        <h3>Location: Ludhiana</h3>
        <h4>Contact:8288957879 </h4>
    </div>
}

export default User;