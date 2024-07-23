import ResCard, { withPromotedLabel } from "./ResCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import { getListAPI } from "../utlis/constant.js";
import Hero from "./Hero.js";
import ResSection from "./ResSection.js";
import About from "./About.js";
import SearchBar from "./SearchBar.js";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCriteria, setFilterRestaurants, setRestaurants } from "../utlis/restaurantsSlice.js";




const Body = () => {
  const dispatch = useDispatch();
  const restaurantListRef = useRef(null);
  const RestaurantCardPromoted = withPromotedLabel(ResCard);

  const listOfRes = useSelector((state) => state.restaurants.restaurants);
  const filteredRes = useSelector((state) => state.restaurants.filteredRestaurants);
  const [searchText, setSearchText] = useState("");
  const [latitude, setLatitude] = useState(28.7336001);
  const [longitude, setLongitude] = useState(77.7602283);
  

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  const updateCoordinates = (lat, lon) => {
    console.log("New Coordinates:", lat, lon);
    setLatitude(lat);
    setLongitude(lon);
  };
  
  const fetchData = async () => {
    console.log("Fetching data with coordinates:", latitude, longitude);
    const LIST_API = getListAPI(latitude, longitude);
    const data = await fetch(LIST_API);
    const json = await data.json();
    

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("Fetched Restaurants:", restaurants);
    console.log(restaurants);
    dispatch(setRestaurants(restaurants));
  };
  
  const handleSearch = (text) => {
    const filterRes = listOfRes.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(setFilterRestaurants(filterRes));
  };
  const scrollToRestaurantList = () => {
    if (restaurantListRef.current) {
      restaurantListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFilterChange = (criteria) => {
    dispatch(setFilterCriteria(criteria));
  };


  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-white-200 dark:bg-slate-800  overflow-x-hidden  ">
     
      <SearchBar
        listOfRes={listOfRes}
        filteredRes={filteredRes}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        scrollToRestaurantList={scrollToRestaurantList}
      ></SearchBar>

     <Hero updateCoordinates={updateCoordinates} />
      
      <ResSection></ResSection>
      
      <div ref={restaurantListRef} className="res-list grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredRes?.map((restaurant, index) => (
          <Link
            key={restaurant.info.id + index} // Combine id with index to ensure uniqueness
            to={"/restaurants/" + restaurant.info.id}
            className="flex-shrink-0" // Ensure the card does not shrink
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
      <About></About>
    </div>
  );
};

export default Body;
