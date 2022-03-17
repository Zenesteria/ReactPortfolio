import React from "react";
import Card from "./Card"
import "./componentcss/subShowcase.css"

function Subshowcase(){
    return(
        <div className="subShowcase">
            <div className="subSectionWrapper">
                <div className="subSection topSection">
                    <div className="subStatData">
                        <div className="dataTitle"><p>0</p></div>
                        <h3>Jobs Done Successfully.</h3>
                    </div>

                    <div className="subStatData">
                        <div className="dataTitle"><p>0</p></div>
                    </div>
                </div>

                <div className="subSection midSection">
                    <h1>
                        Applying <span>Creativity</span> <br />
                        Everyday
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, rerum!
                    </p>
                    <a class="btn btn-primary" href="/" role="button">Download Resume</a>
                </div>
                <div className="subSection bottomSection">
                    <div className="wrapper">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                            <path fill="none" d="M17.125,1.375H2.875c-0.828,0-1.5,0.672-1.5,1.5v11.25c0,0.828,0.672,1.5,1.5,1.5H7.75v2.25H6.625c-0.207,0-0.375,0.168-0.375,0.375s0.168,0.375,0.375,0.375h6.75c0.207,0,0.375-0.168,0.375-0.375s-0.168-0.375-0.375-0.375H12.25v-2.25h4.875c0.828,0,1.5-0.672,1.5-1.5V2.875C18.625,2.047,17.953,1.375,17.125,1.375z M11.5,17.875h-3v-2.25h3V17.875zM17.875,14.125c0,0.414-0.336,0.75-0.75,0.75H2.875c-0.414,0-0.75-0.336-0.75-0.75v-1.5h15.75V14.125z M17.875,11.875H2.125v-9c0-0.414,0.336-0.75,0.75-0.75h14.25c0.414,0,0.75,0.336,0.75,0.75V11.875z M10,14.125c0.207,0,0.375-0.168,0.375-0.375S10.207,13.375,10,13.375s-0.375,0.168-0.375,0.375S9.793,14.125,10,14.125z"></path>
                        </svg>
                        <h1>Skillset</h1>
                    </div>
                    <div className="cards">
                        <Card title="Card Title" subtitle="Card Subtitle" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                        <Card title="Card Title" subtitle="Card Subtitle" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                        <Card title="Card Title" subtitle="Card Subtitle" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                        <Card title="Card Title" subtitle="Card Subtitle" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                        <Card title="Card Title" subtitle="Card Subtitle" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>  
                        <Card title="Card Title" subtitle="Card Subtitle" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Subshowcase;