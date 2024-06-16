import React from "react";
import leafs from "../../asset/leafs.png";

const Leaf = () => {
    return (
        <div className="leaf-layer-right absolute w-[10rem] h-[12rem] overflow-hidden z-[2] ">  
            <img  className=" absolute  overflow-hidden z-[2] w-full h-full  object-cover left-[55%]  transform scale-[0.8] rotate-[30]"  src={leafs}></img>
        </div>
    )
}


// export default Leaf;