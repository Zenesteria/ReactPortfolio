import React from "react";
import "./componentcss/navbar.css"

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <img src="/img/logo.png" alt="" className="logo" />
                Creatives Atlas
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Portfolio</a>
                    </li>
                    <div className="contactWrapper">
                        <li className="nav-item contactLink">
                            <a className="nav-link" href="/">Contact Us</a>
                        </li>
                    </div>
                </ul>
                
            </div>
        </nav>
    )
}

export default NavBar;