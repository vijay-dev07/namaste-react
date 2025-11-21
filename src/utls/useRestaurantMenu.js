import { useEffect ,useState } from "react";

const useRestaurantMenu = (resId) =>{
    // fetch data 
    const [resInfo , setResInfo] = useState(null);

    useEffect( () =>{
        fetchMenu();
    },[]);  


    const fetchMenu = async() => {
        const data =  await fetch(
            "https://mocki.io/v1/ec3328c9-6921-4838-b365-aad2ada5beed"
        );
        const json = await data.json();

        const matchedRestaurant = json.restaurants.find((restaurant) => restaurant.id === parseInt(resId));
        console.log(matchedRestaurant); 

        setResInfo(matchedRestaurant);
    
    };
    return resInfo;
}

export default useRestaurantMenu;