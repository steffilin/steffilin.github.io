import React from "react";
import { useState } from 'react';

import "./Education.css";
import berkeleyimg from "./images/berkeley.png";


const Education = () => {
    return (
        <div className="container">
            <div className="content">
                <div id="linedetail"></div>
                <h3 id="proj-bookmark" className="head-placement">EDUCATION</h3>
                <div className="education-text-container">
                    <div>
                        <p style={{fontWeight:"500"}}>University of California, Berkeley</p>
                        <p>College of Letters and Science</p>
                        <p>Areas of study: Computer Science, Data Science</p>
                    </div>
                    
                    <img src={berkeleyimg}></img>
                </div>
                {/* <ChangeExp/> */}
                        
            </div>
        </div>
        
    )
}

export default Education

