import React from "react";
import "../css-components/showcase.css"
import socials from "../component-data/socials.js"

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
                    {socials.map((social) => {
                       return <a key={social.id} href={social.socialLink}><i class={social.socialClass}></i></a>
                    })}
                </div>
            </div>

        </div>
    )
}


export default Showcase;