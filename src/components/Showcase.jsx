import React from "react";
import "./componentcss/showcase.css"

function Showcase(){
    return(
        <div className="showCase">
            <div className="leftShowcase">
                <div className="topWrapper">
                    <h1>Hi I'm Abdurrahman <br /> Aderinto</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Reprehenderit, placeat.
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Reprehenderit, placeat.
                    </p>
                    <a class="btn btn-primary" href="/" role="button">Official Site</a>
                </div>

                <div className="socials">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>

        </div>
    )
}


export default Showcase;