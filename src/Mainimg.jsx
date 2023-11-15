import React from "react";
import Image_m from "./hero-mobile.jpg";
import Image_d from "./hero-desktop.jpg";

const Mainimg = () => {
    return(<>
        <picture className="mainimg">
            <source media="(min-width:768px)" srcSet={Image_d}/>
            <img src={Image_m} alt="product"/>
        </picture>
    </>)
}

export default Mainimg;