import React from "react";
import Tag from "../sub-components/Tag";

import "../css-components/about.css";
import aboutData from "../component-data/aboutData";

const {mainData, tagData} = aboutData;


function About(){
    return(
        <div className="about">
            <div className="aboutBackdrop"></div>
            <div className="about-top">
                <div className="portrait"></div>
                <div className="about-wrapper">
                    <h1>{mainData.mainTitle}</h1>
                    <p className="aboutContent">
                        {mainData.content1}
                    </p>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-left">
                    <h3>{mainData.heading}</h3>
                    <p className="aboutContent">
                        {mainData.content2}
                    </p>
                </div>
                <div className="about-bottom-right">
                    <div className="about-descriptions">
                        {tagData.map((tag) => {
                            return <Tag key={tag.id} Data = {tag} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;