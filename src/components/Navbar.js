import React from "react";
import logo from '../images/213.png';

function Navbar() {
    return (
        <nav>
            {/* <img src="../images/airbnb-logo.png" className="nav--logo" alt="logo"/>
             */}
             <img src={logo} className="nav--logo" alt="logo" />
            <p className="nav--text">my travel journal.</p>
        </nav>
    )
}

export default Navbar;