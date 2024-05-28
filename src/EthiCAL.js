import React from "react";
import "./Experience.css";
import ethical1 from "./images/ethical1.png";
import ethical2 from "./images/ethical2.png";

function EthiCAL() {
    return (
        <div class="text">
            <p className="expTitle">EthiCAL Apparel - VP of Web Development</p>
            <ul className="explist">
                <li>Led and mentored 6 team members to maintain ecommerce website and update website to improve customer experience, increase sales, and promote products to our online users</li>
                <li>Constructed high fidelity prototypes using Figma and used HTML/CSS and JavaScript to develop interactive website features and improve user experience and increase web traffic</li>
                <li>Check out the <a href="https://www.ethicalapparel.org/" target="blank">EthiCAL website</a> and support a student-run social enterprise focused on sustainability!</li>

                    
            </ul>
            <div className="expimg-container2">
                
                <img id="ethical-img" src={ethical1}></img>
                <img id="ethical-img" src={ethical2}></img>

            </div>
        </div>
    );
}

export default EthiCAL