import React from "react";

function PortfolioCard(){
    return (
    <div className="card shadow-sm">
        <div className="content-scroll">
            <div className="display-preview"></div> 
        </div>
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
        </svg>

        <div className="card-body">
            <p className="card-text"><span>Title: </span> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn portBtn">View</button>
                </div>
                <small className="text-muted">9 mins</small>
            </div>
        </div>
    </div>
    )
}

export default PortfolioCard;