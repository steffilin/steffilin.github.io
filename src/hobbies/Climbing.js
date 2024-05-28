import React from "react";
import "./Hobbies.css";
// import aivocate1 from "./images/aivocate1.png";
// import aivocate2 from "./images/aivocate2.png";
// import aivocate3 from "./images/aivocate3.png";

function Climbing() {
    return (
        <div class="hobby-text">
            <div class="hobby-container">
                <p className="hobbyTitle">Climbing</p>
                <ul className="hobbyText">
                    <li>I started climbing December of 2023 and absolutely fell in love (this is 
                        an understatement). I mostly boulder because it’s more accessible for me, 
                        but also love top roping. You can find me on a wall pretty much every other day!
                    </li>
                    
                </ul>
                {/* <div className="expimg-container3"> */}
                    
                    {/* <img id="phone-img" src={aivocate1}></img>
                    <img id="phone-img" src={aivocate2}></img>
                    <img id="phone-img" src={aivocate3}></img> */}

                {/* </div> */}
            </div>

        </div>
    );
}

export default Climbing