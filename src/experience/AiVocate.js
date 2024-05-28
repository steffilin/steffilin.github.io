import React from "react";
import "./Experience.css";
import aivocate1 from "./images/aivocate1.png";
import aivocate2 from "./images/aivocate2.png";
import aivocate3 from "./images/aivocate3.png";

function AiVocate() {
    return (
        <div class="text">
            <p className="expTitle">Ai.Vocate - Mobile Development Intern</p>
            <ul className="explist">
                <li>Led the development of an AI chatbot app using Swift to pioneer AI technology in the legal space</li>
                <li>Implemented advanced functionalities, such as integrating OpenAI API calls, data storage using Firebase, & user
                    authentication, enhancing user experience and providing users with personalized interactive experiences</li>
            </ul>
            <div className="expimg-container3">
                
                <img id="phone-img" src={aivocate1}></img>
                <img id="phone-img" src={aivocate2}></img>
                <img id="phone-img" src={aivocate3}></img>

            </div>

        </div>
    );
}

export default AiVocate