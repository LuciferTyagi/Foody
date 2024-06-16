import React from "react";
import food1 from "../../asset/food-1.png"
import food2 from "../../asset/food-2.png"
import food3 from "../../asset/food-3.png"
import food4 from "../../asset/food-4.png"
import food5 from "../../asset/food-5.png"
import food6 from "../../asset/food-6.png"
import food7 from "../../asset/food-7.png"
// import Leaf from "./Leaf";
import leafs from "../../asset/leafs.png"

const ResSection = () => {

    return (
        <section className="relative py-[6rem] px-[10vw] bg-white ">

            <div className="section w-full py-[2rem] px-0 pb-[5rem] flex justify-between items-center ">
                <div className="food-img-container min-w-[30rem] min-h-[30rem] relative scale-[0.8]">
                    <div className="circle absolute  w-full h-full top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[1] rounded-full bg-white border-[0.1rem] border-solid border-teal-800 scale-[0.8] ">
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 top-[0] left-[50%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 top-[30%] left-[4%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 top-[30%] right-[1.5%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 bottom-[30%] left-[3%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 bottom-[30%] right-[0.5%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 bottom-[-2.5%] left-[50%]"></span>
                    </div>

                    <div className="circle absolute  w-full h-full top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-600 bg-opacity-20  border-[0.1rem] border-solid border-teal-800 scale-[1] rotate-[30deg]">
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 top-[0] left-[50%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 top-[30%] left-[4%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 top-[30%] right-[1.5%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 bottom-[30%] left-[3%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 bottom-[30%] right-[0.5%]"></span>
                        <span className="absolute w-[0.75rem] h-[0.75rem] rounded-full bg-teal-800 transform -translate-x-1/2 -translate-y-1/2 bottom-[-2.5%] left-[50%]"></span>
                    </div>
                    <div>
                        <img className="food-img absolute rounded-[100%] w-[20rem] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[1]" src={food1}></img>
                        <img className="food-img absolute rounded-[100%] w-[12rem] top-[15%] left-[100%] transform -translate-x-1/2 -translate-y-1/2 z-[1]" src={food2}></img>
                        <img className="food-img absolute rounded-[100%] w-[10rem] top-[60%] left-[107%] transform -translate-x-1/2 -translate-y-1/2 z-[1]" src={food3}></img>
                        <img className="food-img absolute rounded-[100%] w-[8rem] top-[95%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 z-[1]" src={food4}></img>
                        <img className="food-img absolute rounded-[100%] w-[6rem] top-[100%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-[1]" src={food5}></img>
                        <img className="food-img absolute rounded-[100%] w-[4rem] top-[80%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 z-[1]" src={food6}></img>
                        <img className="food-img absolute rounded-[100%] w-[2rem] top-[55%] left-[0] transform -translate-x-1/2 -translate-y-1/2 z-[1]" src={food7}></img>
                    </div>
                </div>
                <div className="section-detail w-[45%] min-w-[300px] ml-auto">
                    <span className="section-highlight py-[.5rem] px-[1rem] rounded-md bg-teal-500 bg-opacity-20 text-teal-800">Best Rated Restaurants</span>
                    <p className="section-title my-[2rem] mx-[0] text-[4rem]">1000+</p>
                    <p className="section-info leading-[2rem] mb-[2rem]">Order from our 1000+ food and beverages menu. Food for every taste and mood</p>
                    <button className='btn py-4 px-6 border-none rounded-md text-lg text-white bg-teal-800 capitalize cursor-pointer'>Order Food</button>
                </div>

                <div className="leaf-layer-right absolute bottom-[-5%] right-0 w-[10rem] h-[12rem] overflow-hidden z-[2] ">
    <img className="absolute z-[2] w-full h-full object-cover left-[45%]  transform scale-[0.8] rotate-[30]" src={leafs} alt="Leaf"></img>
</div>

            </div>
        </section>
    )
}

export default ResSection;
