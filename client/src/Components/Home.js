import React from 'react';
import foodImage from '../../asset/FOOD-ASSET.png'; // Import the image file
import Location from './location';
import Practice from './Practice';
import { useState } from 'react';
import SearchResults from './SearchResults';

const Home = () => {
 
 const[results , setResults] = useState([]);
  return (
    // <div style={{ backgroundColor: '#FEB2B2' }}> {/* Set the background color to pink */}
    //   <div className="home flex justify-evenly">
    //     <div className="tagline mx-12 my-12 ">
    //       <h1 className="font-bold text-4xl">
    //         Best Restaurant <span className="block text-red-500 my-2">In Town.</span>
    //       </h1>
    //       <p className="mb-2">We provide best food in town, we provide home</p>
    //       <p className="mb-2">delivery and dine in services</p>
    //     </div>
        
    //     <div className="buttons my-12  ">
    //       <button className="order-button bg-red-500 text-white rounded-xl m-2 p-2 px-4">Order Now</button>
    //       <button className="reservation-button bg-pink-50 text-red-800 rounded-xl m-2 p-2 px-4">Reservation</button>
    //     </div>
    //     <div>
    //       <img src={foodImage} alt="Food" /> 
    //     </div>
    //     <div className="best-dishes">
          
    //     </div>
    //     <div className="popular-restaurants">
    //       {/* Display popular restaurants here */}
    //     </div>
    //   </div>
    // </div>
    <div>
     
      <Practice setResults = {setResults}/>
      <SearchResults results = {results}/>
    </div>
  );
};

export default Home;
