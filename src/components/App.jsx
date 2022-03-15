import React from "react";
import NavBar from "./navbar"
import Showcase from "./Showcase";
import SubShowcase from "./Subshowcase";

function App(){
    return(
        <div className="main">
            <NavBar/>
            <Showcase/>
            <SubShowcase/>
        </div>
    )
}

export default App;