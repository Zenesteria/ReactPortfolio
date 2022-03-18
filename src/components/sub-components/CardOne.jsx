import React from "react";
import "../css-components/card.css"

function CardOne(props){
    return(
        <div key={props.key} class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <h6 class="card-subtitle mb-2">{props.subtitle}</h6>
                <p class="card-text">{props.content}</p>
            </div>
        </div>
    )
}

export default CardOne;