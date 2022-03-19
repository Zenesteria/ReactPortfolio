import React from "react";

const DataShowcase = function(props){
    return(
        <div className="subData" key={props.id}>
            <div className="data-display">{props.value}</div>
            <h3>{props.content}</h3>
        </div>
    )
}


export default DataShowcase;