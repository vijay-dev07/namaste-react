import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const resList = {
  "type": "restaurant",
  "data": [
    {
      "id": 1,
      "name": "Meghna Foods dfljflkfjsfjlfjslfjdklfjlfjsflj",
      "cuisines": ["Biryani", "North Indian"],
      "rating": 4.3,
      "image": "https://example.com/img1.jpg"
    },
    {
      "id": 2,
      "name": "Domino's Pizza",
      "cuisines": ["Pizza", "Fast Food"],
      "rating": 4.0,
      "image": "https://example.com/img2.jpg"
    }
  ]
}

const RestaurentCard = (props) => {

    const {resData}  = props;

    return (
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' , }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/158037815D.png"/>
            <h3> {resData.name}</h3>
            <h4> {resData.cuisines.join(", ")}</h4>
            <h4>{resData.rating }</h4>
            <h4> 38 min</h4>
        </div>
    );
};



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

// react element 
const heading =  React.createElement("h1" , {id: "heading"} , "Namaste React");
console.log(heading);


const HeadingComponent  = () => {
    return <h1> Namaste React functiponal component </h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
