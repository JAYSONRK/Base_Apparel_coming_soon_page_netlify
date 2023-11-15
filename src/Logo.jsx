import React from "react";
import Logoimg from "./logo1.svg";

const Logo = () => {
    return (<>
            <div className="logo">
                <img className="logoImg" src={Logoimg} alt="logo"/>
            </div>   
    </>)
}

export default Logo;