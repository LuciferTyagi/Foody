import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'



function LocationSearch({ updateCoordinates }) {
  const [query, setQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion.display_name);
    setSelectedLocation({
      latitude: suggestion.lat,
      longitude: suggestion.lon
    });
    setSuggestions([]);
    updateCoordinates(suggestion.lat, suggestion.lon);  
  };

  return (
    <div className="search w-full relative min-w-150 rounded my-9 mx-0">
      <input
        type="text"
        value={query}
        className={`search-box w-full h-full bg-white border-none py-4 px-6 outline-none text-sm ${
          query ? "shadow-md" : ""
        }`}
        onChange={handleChange}
        placeholder="Enter your location"
      />
      <button className="search-btn text-sm transition duration-500 hover:bg-teal-800 absolute border-none right-0 w-16 h-full bg-white text-center cursor-pointer text-teal-300">
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </button>
      <ul className={`absolute top-full left-0 w-full ${query ? "bg-white border border-gray-300 rounded-b-lg" : ""}`}>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion)} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
            {suggestion.display_name}
          </li>
        ))}
      </ul>
      {/* {selectedLocation && (
        <div>
          <p>Latitude: {selectedLocation.latitude}</p>
          <p>Longitude: {selectedLocation.longitude}</p>
        </div>
      )} */}
    </div>
  );
  
 
}

export default LocationSearch;
