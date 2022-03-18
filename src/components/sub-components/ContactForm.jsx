import React from "react";

function ContactForm(){
    return(
        <div className="contactForm">
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" name="userName"/>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" name="userEmail"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="userMessage" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    )
}


export default ContactForm;