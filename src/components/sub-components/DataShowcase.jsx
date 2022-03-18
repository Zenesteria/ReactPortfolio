import React from "react";

const DataShowcase = function(props){
    return(
        <div className="subStatData">
            <div className="dataTitle"><p>{props.value}</p></div>
            <h3>{props.subTitle}</h3>
        </div>
    )
}


export default DataShowcase;