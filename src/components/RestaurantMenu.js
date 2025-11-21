import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utls/useRestaurantMenu";

const RestaurantMenu = () =>{
    const { resId } = useParams(); 

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>;
    console.log("resinfo===================",resInfo);

    return(
            <div className="menu"> 
                <h1> {resInfo.name}</h1>
                <p>  {resInfo.cuisines.join(", ")}</p>
                <h3>  {resInfo.rating}</h3>
                <ul>
                    <li>burger</li>
                    <li>biryani</li>
                    <li>diet coke</li>
                    <li>chinese food</li>
                </ul>
            </div>
    )
}
export default RestaurantMenu;