import RestaurentCard from "./RestaurentCard";
import { useState  , useEffect} from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    // local state variable  - super powerful variable 

    const [listOfRestaurants , setListOfRestaurant] = useState([]);

    useEffect ( () => {
        fetchData();
    },
    [] );

    const fetchData = async () => {
        const data = await fetch(
            "https://mocki.io/v1/ec3328c9-6921-4838-b365-aad2ada5beed"
        );

        const json = await data.json();

        console.log(json);

        setListOfRestaurant(json.restaurants);
    }

    // conditional rendering 
    
    return listOfRestaurants.length === 0 ? (<Shimmer/>) :(
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