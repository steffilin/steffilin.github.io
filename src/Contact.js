import React from "react";
import './Contact.css';
// import Message from './Message';
import Pdf from './Resume/Steffi-Lin-Resume.pdf';

const Contact = () => {
    // const span = document.getElementById("email");
    // span.onclick = function () {
    //     document.execCommand("copy");
    // }
    // span.addEventListener("click", function(event) {
    //     event.preventDefault();
    //     if (event.clipboardData) {
    //         event.clipboardData.setData("text/plain", span.textContent);
    //         console.log(event.clipboardData.getData("text"))
    //     }
    // });


    return (
        <div className="contact">
        <div className="contact-head">
            <h3 id="contact-bookmark">Contact Info</h3>
        </div>
        <div className="contact-info">
            {/* <p>Send me a message!</p> */}
            {/* <Message /> */}
            <p>Connect with me through the links below:</p>
            <p id="email">steffi2002.lin@gmail.com  </p> 
            <p id="contact-links"><a href ="https://www.linkedin.com/in/steffilin/"
                target="blank">Linkedin</a>  |  <a href ="https://github.com/steffilin"
                target="blank">Github</a>  |  <a href="https://www.instagram.com/steffilinart/"
                target="blank">Art Instagram</a>  |  <a href = {Pdf} 
                target ="blank">Resume</a>
            </p>
        </div>
    
    </div>
    )
}

export default Contact