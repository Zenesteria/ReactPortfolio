import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

function ContactForm(){
    const formRef = useRef()
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_7i02k58', 'template_nycf4ba', formRef.current, 'dGOHTqc_IpbZCdbcQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }   
    return(
        <div className="contactForm">
            <form className="row g-3" ref={formRef} onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" name="user_name"/>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" name="user_email"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="message" rows="3" name="message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    )
}


export default ContactForm;