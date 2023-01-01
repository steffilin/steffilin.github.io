import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
        <div className="contact-head">
            <h3 id="contact-bookmark">Contact Info</h3>
        </div>
        <div className="contact-info">
            <p>Send me a message!</p>
            <p>Or connect with me through the links below:</p>
            <p id="contact-links">steffi2002.lin@gmail.com  |  <a href ="https://www.linkedin.com/in/steffilin/"
                target="blank">Linkedin</a>  |  <a href ="https://github.com/steffilin"
                target="blank">Github</a>  |  <a href="https://www.instagram.com/steffilinart/"
                target="blank">Art Instagram</a>
            </p>
        </div>
    
    </div>
    )
}

export default Contact