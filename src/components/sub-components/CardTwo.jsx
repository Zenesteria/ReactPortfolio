import React from "react";

function CardTwo(props){
    return (
    <div className="card shadow-sm">
        <div className="content-scroll">
            <div className="display-preview" style={{background: props.portfolioPreview}}></div> 
        </div>
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
        </svg>

        <div className="card-body">
            <p className="card-text"><span>{props.title}: </span> {props.content}</p>
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn portBtn">View</button>
                </div>
                <small className="text-muted">{props.dateCreated}</small>
            </div>
        </div>
    </div>
    )
}

export default CardTwo;