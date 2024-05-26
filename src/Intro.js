import React from "react";
import './Intro.css';
import flower1 from './images/home_top_right_stars.png';
import portrait from './images/portrait.png';
import flower2 from './images/bottom-left-stars.png';
import lotus from './images/lotus.png';
import yosemite from './images/yosemite.png';


const Intro = () => {
    return(
        <div className="wrapper">
            {/* <div className=></div> */}
            <div className ="introtext">
                <div id="intro1"><p>Hi, my name is</p></div>
                <div id="intro2"><h1>STEFFI LIN</h1></div>
                <div className="intro">
                    <p id="intro">
                        Hi there! I'm currently studying Computer Science at UC Berkeley
                        and am interested in both design and code. Recently, I've been getting
                        into web and mobile development. Continue scrolling 
                        to learn more about me!
                    </p>
                </div>
            </div>
            
            <div class="pictures">
                {/* <div class="pic" id="portrait"> */}
                    <img
                    src={portrait}
                    alt="my picture"
                    />
                {/* </div> */}
              
            </div>
        </div>
        
    )
}

export default Intro