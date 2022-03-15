import React from "react";

import "./componentcss/About.css";


function About(){
    return(
        <div className="about">
            <div className="about-top">
                <img src="/img/aboutpic.jpg" alt="Abdurrahman Aderinto" />
                <div className="about-wrapper">
                    <h1>Hello there!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Corrupti reiciendis excepturi at minima 
                        molestiae commodi incidunt eum officia provident 
                        facere.
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Corrupti reiciendis excepturi at minima 
                        molestiae commodi incidunt eum officia provident 
                        facere.
                    </p>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-left">
                    <h3>The journey thus far. . .</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Veniam ipsa reiciendis, 
                        neque accusamus aliquam unde consequuntur 
                        perferendis recusandae molestias necessitatibus 
                        cum eos culpa sequi quam modi quasi illum ut 
                        ad sed in sunt natus aperiam! Voluptatum, 
                        ipsum. Nesciunt, ducimus architecto.
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Veniam ipsa reiciendis, 
                        neque accusamus aliquam unde consequuntur 
                        perferendis recusandae molestias necessitatibus 
                        cum eos culpa sequi quam modi quasi illum ut 
                        ad sed in sunt natus aperiam! Voluptatum, 
                        ipsum. Nesciunt, ducimus architecto.
                    </p>
                </div>
                <div className="about-bottom-right">
                    <div className="about-descriptions">
                        <p className="about-tag-description">UI Design</p>
                        <p className="about-tag-description">UX Design</p>
                        <p className="about-tag-description">Prototyping</p>
                        <p className="about-tag-description">Branding</p>
                        <p className="about-tag-description">HTML/CSS</p>
                        <p className="about-tag-description">Wireframing</p>
                        <p className="about-tag-description">User Research</p>
                        <p className="about-tag-description">User Interviews</p>
                        <p className="about-tag-description">Leadership</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;