import RESLOGO from "../images/RESLOGO.png";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utlis/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { SUPPORTED_LANGUAGES } from "../utlis/constant";
import { changeLanguage } from "../utlis/configSlice";
import lang from "../utlis/languageConstant";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const langkey = useSelector((store) => store.config.lang);

  const navLink = [
    { name: lang[langkey].headerHome, path: "/", id: 1 },
    { name: lang[langkey].headerAboutUs, path: "/about", id: 2 },
    { name: lang[langkey].headerContactUs, path: "/contact", id: 3 },
  ];

  return (
    <div className="header-container  ">
      <div className="navigation-bar fixed top-0 left-0 w-full bg-slate-200 z-50">
        <div className="flex justify-aroundound items-center h-16">
          <img className="logo h-20" src={RESLOGO} alt="Logo" />
          <button className="lg:hidden text-2xl" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>

          <ul className="link-container lg:flex lg:gap-6 lg:p-4 lg:ml-8 list-none">
            <li>
              <select
                className="p-2 rounded-lg mt-1"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.id} value={language.identifer}>
                    {language.name}
                  </option>
                ))}
              </select>
            </li>
            {navLink.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-black no-underline capitalize py-2 px-4 transition duration-200 hover:text-teal-800"
              >
                {link.name}
              </Link>
            ))}

            <li className="text-black no-underline capitalize py-2 px-4 transition duration-200 hover:text-teal-800">
              {loggedInUser}
            </li>
          </ul>

          <div className="nav-extras flex items-center gap-4">
            <div className="cart h-10 text-teal-500 border rounded-full flex justify-center items-center no-underline transition duration-300 hover:bg-teal-800">
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />({cartItems.length}{" "}
                items)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
