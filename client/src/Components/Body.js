import ResCard, { withPromotedLabel } from "./ResCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import { getListAPI } from "../utlis/constant.js";
import Hero from "./Hero.js";
import ResSection from "./ResSection.js";
import useOnlineStatus from "../utlis/useOnlineStatus.jsx";
import About from "./About.js";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import LocationSearch from "./LocationBar.js";

const Body = () => {
  const restaurantListRef = useRef(null);
  const RestaurantCardPromoted = withPromotedLabel(ResCard);

  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
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
    setListOfRes(restaurants);
    setFilteredRes(restaurants);
  };
  
  const handleSearch = (text) => {
    const filterRes = listOfRes.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(filterRes);
  };
  const scrollToRestaurantList = () => {
    if (restaurantListRef.current) {
      restaurantListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const onlineStatus = useOnlineStatus();

  // if (onlineStatus === false) {
  //     return (
  //         <h1>Looks like you are offline, check your internet connection</h1>
  //     );
  // }

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-white-200  overflow-x-hidden  ">
      <div className="filter flex">
        {/* <div className="m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div> */}

        {/* <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-green-100 rounded-lg"
                        onClick={() => {
                            const topRatedRes = listOfRes.filter(
                                (resData) => parseFloat(resData.info.avgRating) > 4.2
                            );
                            setFilteredRes(topRatedRes);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div> */}
      </div>
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
