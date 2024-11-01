import React from "react";
import "./Experience.css";
import egolf1 from "./images/egolf1.png";
import egolf2 from "./images/egolf2.png";
import egolf3 from "./images/egolf3.png";
import egolf4 from "./images/egolf4.png";

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
            <div className="expimg-container4">
                
                <img id="watch-img" src={egolf1}></img>
                <img id="watch-img" src={egolf2}></img>
                <img id="phone-img" src={egolf3}></img>
                <img id="phone-img" src={egolf4}></img>

            </div>

        </div>
    );
}

export default EGolf