import React from "react";
import Logo from "./Logo";
import Mainimg from "./Mainimg";
import Description from "./Description ";

const Card = () => {
    return (<>
        <div className="card">
            <Logo/>
            <Mainimg/>
            <Description/>
        </div>
    </>)
}

export default Card;