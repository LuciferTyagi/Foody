import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const fetchLocationSuggestions = async (query) => {
        const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.map(item => item.display_name);
        } catch (error) {
            console.error('Error fetching location suggestions:', error);
            return [];
        }
    };

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    };

    const onSuggestionsFetchRequested = async ({ value }) => {
        const suggestions = await fetchLocationSuggestions(value);
        setSuggestions(suggestions);
    };


    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const getSuggestionValue = (suggestion) => suggestion;

    const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

    const inputProps = {
        placeholder: "Enter your location...",
        value,
        onChange: onChange,
    };

    return (
        <div className="hero-section min-h-screen py-0 px-48 flex justify-between items-center bg-slate-200 ">
            <div className="search w-full relative  min-w-150 h-12 rounded overflow-hidden my-9 mx-0">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                <button className="search-btn text-sm  transition duration-500 hover:bg-teal-800 absolute border-none right-0 w-16 h-full bg-white text-center cursor-pointer text-teal-300">
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                </button>
            </div>
        </div>
    );
};

export default Location;
