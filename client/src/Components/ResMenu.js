import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () =>{

    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex , setShowIndex] =  useState(null);

    
        if(resInfo === null) return (<Shimmer />)
        

        const {name , cuisines , costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;  
        const {cards}  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

     

        
       
        return (
    <div className="text-center bg-slate-300 dark:bg-slate-800">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg dark:text-white">{cuisines.join(",")} . {costForTwoMessage}</p>
        
    {/* Accordions */} 
      {categories.map((category ,index) => {
       return <ResCategory key= {category?.card?.card?.title}
        data={category?.card?.card}
        showItems = {index === showIndex ? true : false}
        
        setShowIndex={()=> setShowIndex(index)}
        />
      
      })}

    </div>
);
};


export default ResMenu;