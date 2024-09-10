import React from "react";
import "./Experience.css";
// import aivocate1 from "./images/aivocate1.png";
// import aivocate2 from "./images/aivocate2.png";
// import aivocate3 from "./images/aivocate3.png";

function EGolf() {
    return (
        <div class="text">
            <p className="expTitle">eGolf.ai - App Development Consultant</p>
            <ul className="explist">
                <li>Utilized GPS data from APIs in conjunction with live user data to render golf course maps, providing accurate
                distance and location information, enhancing the app’s functionality for users</li>
                <li>Implemented lazy loading to optimize app performance and usability on watchOS, reducing lag and increasing app
                responsiveness by rendering only the necessary data at a given time</li>
                <li>Collected user club and swing data to provide an automatic swing and course assistance experience to users</li>
                <li>Incorporated custom UI components and animations to create intuitive and engaging user interfaces</li>
            </ul>
            {/* <div className="expimg-container3">
                
                <img id="phone-img" src={aivocate1}></img>
                <img id="phone-img" src={aivocate2}></img>
                <img id="phone-img" src={aivocate3}></img>

            </div> */}

        </div>
    );
}

export default EGolf