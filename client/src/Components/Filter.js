import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterCriteria } from "../utlis/restaurantsSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    dispatch(setFilterCriteria({ cuisine, rating }));
    setShowDropdown(false);
  };

  return (
    <div className="m-2">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="btn py-4 px-[3.1rem] border-none rounded-md text-lg text-white dark:text-black bg-teal-800 dark:bg-teal-200 capitalize cursor-pointer"
      >
        Filter
      </button>
      {showDropdown && (
        <div className="absolute mt-2 bg-white dark:bg-slate-500 shadow-lg rounded-lg p-4 w-64 z-10">
          <div className="flex flex-col mb-4">
            <label htmlFor="cuisine" className="text-sm font-medium text-gray-700">Cuisine</label>
            <select 
              id="cuisine" 
              name="cuisine" 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              value={cuisine} 
              onChange={(e) => setCuisine(e.target.value)} 
            >
              <option value="">Select Cuisine</option>
              <option value="North Indian">North Indian</option>
              <option value="South">South</option>
              <option value="Chinese">Chinese</option>
              <option value="Pizza">Pizza</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="rating" className="text-sm font-medium text-gray-700">Rating</label>
            <select 
              id="rating" 
              name="rating" 
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              value={rating} 
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button 
            className="w-full py-2 px-4 bg-teal-800 dark:bg-teal-200 text-white dark:text-black rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            onClick={handleFilterChange}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;