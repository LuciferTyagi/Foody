import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import lang from '../utlis/languageConstant'


const SearchBar = ({ searchText, setSearchText, handleSearch,scrollToRestaurantList }) => {
   const langkey = useSelector(store => store.config.lang);
    return (
        <div   className=" fixed top-0 right-[16%] mt-3  z-50 ">
            <div className="search relative min-w-150 h-10 rounded-md overflow-hidden ">
                <input
                    type="text"
                    className="search-box w-full h-full bg-white border-none p-4 outline-none text-sm" placeholder={lang[langkey].headerSearchPlaceholder}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onClick={scrollToRestaurantList}
                />
                <button
                    className="search-btn absolute border-none right-0 w-12 h-full bg-white text-center cursor-pointer text-teal-800"
                    onClick={handleSearch}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;


