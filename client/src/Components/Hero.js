import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import herobiryani from '../../asset/hero-biryani.png';
import heroburger from '../../asset/hero-burger.png';
import heropizza from '../../asset/hero-pizza.png';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import pratham from "../../asset/pratham.jpg";
import {motion} from "framer-motion";
import LocationSearch from './LocationBar';


const Hero = ({ updateCoordinates }) => {
    const[rotate , setRotate] = React.useState(false);
    return (
        <main className="hero-section min-h-screen py-0 px-48 flex justify-between items-center bg-slate-200 ">           
         <div className="hero-content w-2/5 ">
            <h1 animate={{x:100 ,scale:1}} initial={{scale:0}} class="hero-heading text-5xl font-bold text-teal-800 leading-[5rem]">Eat the best</h1>

            <p className="hero-line leading-8 opacity-75 mt-8">Explore and understand the culture more by taste..</p>

            {/* <div className="search w-full relative  min-w-150 h-12 rounded overflow-hidden my-9 mx-0">
                <input type="text" className="search-box w-full h-full bg-white border-none py-4 px-6 outline-none text-sm" placeholder=" Enter your location.." />
                <button className="search-btn text-sm  transition duration-500 hover:bg-teal-800 absolute border-none right-0 w-16 h-full bg-white text-center cursor-pointer text-teal-300">
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                </button>
            </div> */}
           <LocationSearch updateCoordinates={updateCoordinates} />
            <div className='hero-action-btn-container flex items-center gap-8'>
                <button className='btn py-4 px-6 border-none rounded-md text-lg text-white bg-teal-800 capitalize cursor-pointer'>Order Food</button>
                <p className='or text-teal-800'>or</p>
                <button className='btn-transparent bg-transparent border-2 border-solid border-teal-800 py-4 px-6 rounded-md text-lg text-teal-800 capitalize cursor-pointer'>Make Reservation</button>
            </div>
        </div>

            <div className='hero-img-container min-w-[30rem] min-h-[30rem] relative'>
                <div className='backgroud-elements w-full h-full absolute'>
                    <div className='ellipse absolute h-full w-[80%] transform -translate-x-1/2  -translate-y-1/2 rotate-[20deg] top-2/4 left-2/4 rounded-full border-[.01rem] border-solid border-teal-800 origin-center'></div>
                    <div className='ellipse absolute h-full w-[90%] transform -translate-x-1/2  -translate-y-1/2 rotate-[40deg] top-2/4 left-2/4 rounded-full border-[.01rem] border-solid border-teal-800 origin-center'></div>
                    <div className='ellipse absolute h-full w-[80%] transform -translate-x-1/2  -translate-y-1/2 rotate-[-20deg] top-2/4 left-2/4 rounded-full border-[.01rem] border-solid border-teal-800 origin-center'></div>

                </div>
                <div className='foreground-elements absolute w-full h-full transform scale-[0.9]'>
                    < motion.img animate={{rotate:rotate?360:0}} onMouseOver={() => {setRotate(!rotate)}} className=" absolute  rounded-[100%] shadow-md left-[-8%] top-[-13%] w-[20rem] " src={herobiryani}></motion.img>
                    <img className=" absolute  rounded-[100%] shadow-md right-[-15%] top-[15%] w-[15rem]" src={heroburger}></img>
                    <img className=" absolute  rounded-[100%] shadow-md  left-[20%] bottom-[-25%] w-[16rem]" src={heropizza}></img>

                    <div className="review-box absolute w-[30rem] py-[1rem] px-[2rem] bottom-[5%] left-[-25%] rounded-[.5rem] bg-white bg-opacity-50 backdrop-blur-[0.5rem]">
                        <div className="reviewer-info flex gap-[1rem] ">
                            <img className="reviewer-img w-[3rem] h-[3rem] rounded-[100%]" src={pratham}></img>
                            <div className="reviewer">
                                <div className="reviewer-rating flex gap-[.1rem] text-[.7rem]">
                                    <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                                    <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                                    <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                                    <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                                    <p>4</p>
                                </div>
                                <h2 className="reviewer-name font-[400]">Pratham</h2>
                            </div>
                        </div>
                        <div className="review-body flex gap-[1rem] mt-[.5rem] py-[1rem] px-0">
                            <FontAwesomeIcon className="text-[1.4rem] text-teal-800" icon={faQuoteLeft} />
                            <p className="review leading-[1.75rem]">Foody is the best website..</p>
                        </div>
                        {/* </div> */}
                    </div>

                </div>

            </div>
        </main>
    );
};


export default Hero;