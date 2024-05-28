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
                        <p style={{fontSize:"1.2vw", fontWeight:"500",fontStyle:"italic", lineHeight:"2vw"}}>University of California, Berkeley</p>
                        <p>College of Letters and Science</p>
                        <br></br>
                        <div style={{display:"flex"}}>
                            <p style={{lineHeight:"3vw", opacity:"0.5"}}>Areas of study: </p> 
                            <p style={{lineHeight:"3vw"}}>&nbsp;Computer Science, Data Science</p>
                        </div>
                        
                    </div>
                    
                    <img src={berkeleyimg}></img>
                </div>
                {/* <ChangeExp/> */}
                        
            </div>
        </div>
        
    )
}

export default Education

