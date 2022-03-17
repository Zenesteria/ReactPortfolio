import React from "react";
import ContactForm from "./ContactForm";
import "./componentcss/contact.css"


function Contact(){
    return(
        <div className="contact">
            <div className="contact-header">
                <h2>Contact Me</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="contact-content">
                <div className="contact-left">
                    <h3>Contact Information</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in!</p>

                    <ul className="contact-details">
                        <li>
                            <i class="fa-solid fa-phone"></i> <p>+234-7086835637</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-phone"></i> <p>+234-7086835637</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-phone"></i> <p>+234-7086835637</p>
                        </li>
                    </ul>

                    <ul className="contact-socials">
                        <li>
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-twitter"></i>
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