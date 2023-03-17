import React from "react";
import './Intro.css';
import flower1 from './images/home_top_right_stars.png';
import portrait from './images/steffi-portrait.jpg';
import flower2 from './images/bottom-left-stars.png';


const Intro = () => {
    return(
        <div className="wrapper">
            <div className="top-right-flower">
                <img
                src={flower1}
                alt="decorative flowers"
                width="422"
                height="345"/>
            </div>
            <div className="portrait">
                <img
                src={portrait}
                alt="my picture"
                // width="385"
                // height="396"
                />
            </div>
            <div className="line" id="linedetail"></div>
            <div className="intro">
                <p id="intro">
                    Hi there! I'm currently studying Computer Science at UC Berkeley
                    and am interested in both design and code. Recently, I've been getting
                    into web and application development. Continue scrolling 
                    to learn more about me!
                </p>
            </div>
            <div className="circles">
                <div className="circ" id="circ30"></div>
                <div className="circ" id="circ50"></div>
                <div className="circ" id="circ70"></div>
            </div>
            <div className="bottom-left-flower">
                <img
                src={flower2}
                alt="decorative flowers"
                width="513"
                height="427"/>
            </div>
            <p className="tit-intro">Hi, my name is</p>
            <div className="tit"><h1>STEFFI LIN</h1></div>
        </div>
        
    )
}

export default Intro