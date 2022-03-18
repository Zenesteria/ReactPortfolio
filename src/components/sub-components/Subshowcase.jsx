import React from "react";
import Card from "../sub-components/CardOne"
import "../css-components/subShowcase.css"
import skillSets from "../component-data/skillSets";
import portfolioData from "../component-data/datashowcase"
import DataShowcase from "./DataShowcase";

function Subshowcase(){
    return(
        <div className="subShowcase">
            <div className="subSectionWrapper">
                <div className="subSection topSection">
                    {portfolioData.map((data) => {
                        return(
                            <DataShowcase 
                                value = {data.value}
                                subTitle = {data.content}
                            />
                        )
                    })}
                </div>

                <div className="subSection midSection">
                    <h1>
                        Applying <span>Creativity</span> <br />
                        Everyday
                    </h1>
                    <p>
                        Tinkering with ideas, rebuilding simplistic concepts and critical thinking fed into a day's work
                    </p>
                    <a class="btn btn-primary" href="./documents/resume.docx" role="button" download>Download Resume</a>
                </div>
                <div className="subSection bottomSection">
                    <div className="wrapper">
                        <h1>Skillset</h1>
                    </div>
                    <div className="cards">
                        {skillSets.map((skillSet) => {
                            return (
                                <Card key={skillSet.id} title={skillSet.cardTitle} subtitle={skillSet.cardSubtitle} content={skillSet.cardContent}/>
                                )
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Subshowcase;