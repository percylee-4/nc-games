import React from "react";
import { Link } from "react-router-dom";
import '../StyleSheets/NavBar.css'

const NavBar = () => {
    return (
        <div className="nav"> 
        <div className="nav-items">
             <Link to='/Categories'> <h3> Categories </h3>  </Link>
             <Link to='/Reviews'> <h3> Reviews </h3>  </Link>

        </div>
        </div>
    )
}

export default NavBar;
