import React from "react";


const Tag = function(props){
    return(
        <p className="about-tag-description">{props.Data.tagValue}</p>
    )
}

export default Tag;