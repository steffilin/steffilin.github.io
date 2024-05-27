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
    const [style1, setStyle1] = useState('none');
    const [style2, setStyle2] = useState('none');
    const [style3, setStyle3] = useState('none');

    function handleClick(app, elem) {
        switch(app) {
            case "aivocate":
                setExp(<AiVocate/>);
                setStyle1('bolded');
                setStyle2('none');
                setStyle3('none');
                break;
            case "ethical":
                setExp(<EthiCAL/>);
                setStyle1('none');
                setStyle2('bolded');
                setStyle3('none');
                break;
            case "cs61b":
                setExp(<CS61B/>);
                setStyle1('none');
                setStyle2('none');
                setStyle3('bolded');
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
                    <li className={style1} onClick={() => handleClick("aivocate", this)}>Ai.Vocate</li>
                    <li className={style2} onClick={() => handleClick("ethical", this)}>EthiCAL Apparel</li>
                    <li className={style3} onClick={() => handleClick("cs61b", this)}>Berkeley EECS CS61B</li>
                    <li>Task Tracker App</li>
                    <li>Gitlet</li>
                </ul>
            </div>
            {exp}
        </div>

        
      );
}


