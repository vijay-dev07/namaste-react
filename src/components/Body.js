import RestaurentCard from "./RestaurentCard";
import resList from "../utls/mockData";
import { useState } from "react";

const Body = () => {

    // local state variable  - super powerful variable 

    const [listOfRestaurants , setListOfRestaurant] = useState(resList);

    
    return (
        <div className="body">
            <div className="filetr">
                <button className="filter-btn" onClick={() =>{
                    //filter logic here 
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.rating > 4
                    );
                    setListOfRestaurant(filteredList);
                    }}
                > Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                   listOfRestaurants.map( restaurant => <RestaurentCard key = {restaurant.id}resData = {restaurant}/>)
                }
            </div>
        </div>
    )
} 

export default Body;