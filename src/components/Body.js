import RestaurentCard from "./RestaurentCard";
import { useState  , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utls/useOnlineStatus";

const Body = () => {

    // local state variable  - super powerful variable 

    const [listOfRestaurants , setListOfRestaurant] = useState([]);
    const [filteredRestaurant , setFilteredRestaurent] = useState([]);

    const [searchText , setSearchText] = useState("");

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
        setFilteredRestaurent(json.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        // console.log('offline dsmfnskjfsjfhdskfhj');
    return (<h1> looks like you are ofline !! please check your internet</h1>);
        
    }
    // conditional rendering 
    
    return listOfRestaurants.length === 0 ? (<Shimmer/>) :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        // filter the restaurant cards and update the ui
                        //search text
                        console.log(listOfRestaurants);
                        
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                        res.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurent(filteredRestaurant);
                    }}
                    >search</button>
                </div>
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
                   filteredRestaurant.map( restaurant =>(<Link key={restaurant.id} to={"/restaurents/"+restaurant.id}> <RestaurentCard key = {restaurant.id}resData = {restaurant}/> </Link>))
                }
            </div>
        </div>
    )
} 

export default Body;