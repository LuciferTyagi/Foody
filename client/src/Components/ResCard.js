import leaf from "../Images/leaf.png";
import ratinglogo from "../Images/rating.png";
import UserContext from "../utlis/UserContext";
import { CDN_URL } from "../utlis/constant";
import { useContext, useState } from "react";
import leafs from "../../asset/leafs.png";
import Leaf from "./Leaf";


const ResCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating ,areaName} = resData?.info;
  const cuisineNames = resData?.info?.cuisines;
  const { loggedInUser } = useContext(UserContext);
  // State to track if the card is being hovered
  const [isHovered, setIsHovered] = useState(false);

  return (

    
    
    <div
      className=" restauransts-container  mt-[5rem] m-4 p-4 bg-white rounded-lg shadow-md w-[300px] h-[400px] flex flex-col justify-between flex-shrink-0 transform transition-transform duration-300 hover:scale-105 "
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
      style={{ position: 'relative' }} // Add position relative to the card
    >
      {/* <Leaf></Leaf> */}
      {/* Outline animation */}
      {isHovered && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 border border-teal-800 rounded-lg pointer-events-none"
          style={{ animation: 'pulse 1s infinite alternate' }} // Apply pulse animation
        />
      )}
      

      

      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} alt={name} className="rounded-md h-[200px] w-full object-cover" />
      </div>
      <div className="card-info">
        <h2 className="cafe-name text-lg font-bold">{name}</h2>
        <div className="flex items-center mt-2">
          <img className="mr-1 w-6 h-6" src={leaf} alt="Leaf" />
          <img className="mr-1 w-6 h-6" src={ratinglogo} alt="Rating Indicator" />
          <span>{avgRating}</span>&nbsp;
          <span className="font-bold">{areaName}</span>
        </div>
        {/* Displaying cuisine names with comma separation */}
        {Array.isArray(cuisineNames) && (
          <p className="para mt-2">{cuisineNames.join(", ")}</p>
        )}

      </div>
      <button className="order bg-teal-600 hover:bg-teal-800 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300">
        Buy
      </button>
      
    </div>
    

  );
};

//Higher Order Componenet

// Input - ResCard => ResCardPromoted

export const withPromotedLabel = (ResCard) => {

  return (props) => {
    return (
      <div style={{ position: 'relative' }}>
        <label className="bg-black text-white m-2 p-2 rounded-lg" style={{ position: 'absolute', zIndex: 1 }}>
          OPEN
        </label>
        <ResCard {...props} />
      </div>
    )
  }
}

export default ResCard;
