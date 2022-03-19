import React from "react";
import ContactForm from "../sub-components/ContactForm";
import "../css-components/contact.css"


function Contact(){
    return(
        <div className="contact">
            <div className="contact-backdrop"></div>
            <div className="contact-header">
                <h2>Contact Me</h2>
                <p>Just a Message Away!</p>
            </div>
            <div className="contact-content">
                <div className="contact-left">
                    <h3>Contact Information</h3>
                    <p className="subtext">7 Dunukofia St, Abuja, <br /> <strong>Nigeria</strong></p>

                    <ul className="contact-details">
                        <li>
                            <i class="fa-solid fa-phone"></i> <p>+234-7086835637</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i> <p>+234-7086835637</p>
                        </li>
                        <li>
                            <i class="fa-brands fa-whatsapp"></i> <p>+234-7086835637</p>
                        </li>
                    </ul>
                </div>
                <div className="contact-right">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}


export default Contact;