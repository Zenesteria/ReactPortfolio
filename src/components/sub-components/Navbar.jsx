import React from "react";
import { NavLink } from "react-router-dom";
import "../css-components/navbar.css"

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">
                <img src="/img/logo.png" alt="" className="logo" />
                Creatives Atlas
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mainLink">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item mainLink">
                        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item mainLink">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <div className="contactWrapper">
                    <NavLink className="nav-item contactLink" to="/contact"><li className="">
                            Contact Me
                        </li></NavLink>
                    </div>
                </ul>
                
            </div>
        </nav>
    )
}

export default NavBar;