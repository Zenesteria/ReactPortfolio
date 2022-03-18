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
                        A curative storyteller, designer with an eye 
                        for detail and a dedicated developer to match. 
                        I am Nigerian by nationality, currently a 
                        fourth-year electrical electronics engineering 
                        student at AFIT.
                    </p>
                    <a class="btn btn-primary" href="/" role="button">Learn More.</a>
                </div>
                
                <div className="socials">
                    {socials.map((social) => {
                       return <a key={social.id} href={social.socialLink} target="_blank" rel='noreferrer'><i class={social.socialClass}></i></a>
                    })}
                </div>
            </div>

        </div>
    )
}


export default Showcase;