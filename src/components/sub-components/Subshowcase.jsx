import React from "react";
import Card from "../sub-components/CardOne"
import "../css-components/subShowcase.css"
import skillSets from "../component-data/skillSets";
import portfolioData from "../component-data/datashowcase"
import DataShowcase from "./DataShowcase";

function Subshowcase(){
    
    
    return(
        <div className="subShowcase">
            <div className="subSection top">
                <div className="subSectionWrapper left">
                    {portfolioData.map((data) => {
                       return (<DataShowcase
                            id={data.id}
                            value={data.value}
                            content={data.content}
                        />)
                    })}
                </div>
                <div className="subSectionWrapper right">
                    <h1>Applying <span>Creativity</span> <br /> Everyday</h1>
                    <p>
                        Tinkering with ideas, rebuilding 
                        simplistic concepts <br /> and critical
                        thoughts fed into a day's work
                    </p>
                    <a class="btn" href="./documents/resume.docx" role="button" download>Download Resume</a>
                </div>
            </div>
            <div className="subSection skillset">
                    <h1>Skillset</h1>
                    <div className="cards">
                        {skillSets.map((skill) => {
                            return(
                                <Card id={skill.id} 
                                    title={skill.cardTitle} 
                                    subtitle={skill.cardSubtitle} 
                                    content={skill.cardContent}
                                />)
                        })}
                    </div>
            </div>
        </div>
    )
}

export default Subshowcase;