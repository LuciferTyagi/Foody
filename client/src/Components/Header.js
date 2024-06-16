import RESLOGO from "../images/RESLOGO.png";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { LIST_API } from "../utlis/constant";
import SearchBar from "./SearchBar";

const Header = ({ listOfRes, filteredRes , searchText, setSearchText, handleSearch }) => {
    let btnName = "Log-In";
    const [btnNameReact, setBtnNameReact] = useState("Log-In");
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    
   

    return (
        <div className="header-container  ">
            <div className="navigation-bar fixed top-0 left-0 w-full bg-slate-200 z-50">
                <div className="container mx-auto px-4 lg:px-40">
                    <div className="flex justify-between items-center h-16">
                        <img className="logo h-20" src={RESLOGO} alt="Logo" />
                        <ul className="link-container flex gap-6 p-4 ml-8 list-none">
                            {/* <li>
                                <Link to="/homee" className="text-black no-underline capitalize py-2 px-4 transition duration-200 hover:text-teal-800">Homee</Link>
                            </li> */}
                            <li>
                                <Link to="/" className="text-black no-underline capitalize py-2 px-4 transition duration-200 hover:text-teal-800">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-black no-underline capitalize py-2 px-4 transition duration-200 hover:text-teal-800">About us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-black no-underline capitalize py-2 px-4 transition duration-200 hover:text-teal-800">Contact Us</Link>
                            </li>
                            <button
                                className="login"
                                onClick={() => {
                                    setBtnNameReact(btnNameReact === "Log-In" ? "Log-Out" : "Log-In");
                                }}
                            >
                                {btnNameReact}
                            </button>
                            <li className="px-4 font-bold">{loggedInUser}</li>
                        </ul>
                        <div className="nav-extras flex items-center gap-4">
                            {/* <div className="search relative min-w-150 h-10 rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    className="search-box w-full h-full bg-white border-none p-4 outline-none text-sm" placeholder=" Search Restaurants.."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <button
                                    className="search-btn absolute border-none right-0 w-12 h-full bg-white text-center cursor-pointer text-teal-800"
                                    onClick={handleSearch}
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div> */}
                      
                            <div className="cart h-10 text-teal-500 border rounded-full flex justify-center items-center no-underline transition duration-300 hover:bg-teal-800">
                                <Link to="/cart">
                                    <FontAwesomeIcon icon={faCartShopping} />({cartItems.length} items)
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Content below the navigation bar */}
        </div>
    );
};

export default Header;