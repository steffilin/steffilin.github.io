import React from "react";
import './Intro.css';
import flower1 from './images/home_top_right_stars.png';
import portrait from './images/portrait.png';
import envelopeFill from './images/envelopeFill.png';
import github from './images/github.svg';
import linkedin from './images/linkedin.png';
import envelopehover from './images/envelopehover.png';
import githubhover from './images/githubhover.png';
import linkedinhover from './images/linkedinhover.png';


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

                <div id="socials">
                    <a id="socialimg" href="mailto:steffilin@berkeley.edu" target="blank"><img src={envelopeFill} alt="email"/></a>
                    <a id="socialimg" href="https://www.linkedin.com/in/steffilin/" target="blank"><img src={linkedin} alt="linkedin" /></a>
                    <a id="socialimg" href="https://github.com/steffilin" target="blank"><img src={github} alt="github" /></a>
                </div>
            </div>
            
            <div className="pictures">
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

