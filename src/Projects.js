import React from "react";
import { useState } from 'react';

import "./Projects.css";
import prioritygif from './images/priority-app-gif.gif';
import priorityfigma from './images/priority-app-figma.png';
import gitlet from './images/gitlet.png';
import AiVocate from './AiVocate';
import EthiCAL from './EthiCAL';
import CS61B from './CS61B';




const Projects = () => {
    return (
        <div className="container">
            <div className="content">
                <div id="linedetail"></div>
                <h3 id="proj-bookmark" className="head-placement">EXPERIENCE + PROJECTS</h3>
                
                <ChangeExp/>
                        
            </div>
        </div>
        
    )
}

export default Projects

function ChangeExp() {
    const [exp, setExp] = useState(<AiVocate/>);

    function handleClick(app) {
        switch(app) {
            case "aivocate":
                setExp(<AiVocate/>);
                // experienceMenu = exp;
                break;
            case "ethical":
                setExp(<EthiCAL/>);
                // experienceMenu = exp;
                break;
            case "cs61b":
                setExp(<CS61B/>);
                // experienceMenu = exp;
                break;
            default:
                // experienceMenu = <AiVocate/>
                break;
        }
        // setExp(<EthiCAL/>);
        // experienceMenu = exp;
    }

    return (
        <div className="proj-container">

            <div className="menu">
                <ul>
                    <li onClick={() => handleClick("aivocate")}>Ai.Vocate</li>
                    <li onClick={() => handleClick("ethical")}>EthiCAL Apparel</li>
                    <li onClick={() => handleClick("cs61b")}>Berkeley EECS CS61B</li>
                    <li>Task Tracker App</li>
                    <li>Gitlet</li>
                </ul>
            </div>
            {exp}
        </div>

        
      );
}


