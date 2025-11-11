import { CDN_URL } from "../utls/constants";

const RestaurentCard = (props) => {

    const {resData}  = props;

    return (
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' , }}>
            <img className="res-logo" alt="res-logo" src={ CDN_URL}/>
            <h3> {resData.name}</h3>
            <h4> {resData.cuisines.join(", ")}</h4>
            <h4>{resData.rating }</h4>
            <h4> 38 min</h4>
        </div>
    );
};

export default RestaurentCard;