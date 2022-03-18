import React from "react";
import "../css-components/footer.css"

const date = new Date();

const currentYear = date.getFullYear();

function Footer(){
    return(
        <div className="footer">
            <p>Copyright Creatives Atlas © {currentYear}</p>
        </div>
    )
}

export default Footer;