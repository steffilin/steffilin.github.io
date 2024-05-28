import React from "react";
import { useState } from 'react';

import "./Projects.css";
import AiVocate from './experience/AiVocate';
import EthiCAL from './experience/EthiCAL';
import CS61B from './experience/CS61B';
import TaskTracker from "./experience/TaskTracker";
import Gitlet from "./experience/Gitlet";




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
    const [style1, setStyle1] = useState('bolded');
    const [style2, setStyle2] = useState('none');
    const [style3, setStyle3] = useState('none');
    const [style4, setStyle4] = useState('none');
    const [style5, setStyle5] = useState('none');

    function handleClick(app, elem) {
        switch(app) {
            case "aivocate":
                setExp(<AiVocate/>);
                setStyle1('bolded');
                setStyle2('none');
                setStyle3('none');
                setStyle4('none');
                setStyle5('none');
                break;
            case "ethical":
                setExp(<EthiCAL/>);
                setStyle1('none');
                setStyle2('bolded');
                setStyle3('none');
                setStyle4('none');
                setStyle5('none');
                break;
            case "cs61b":
                setExp(<CS61B/>);
                setStyle1('none');
                setStyle2('none');
                setStyle3('bolded');
                setStyle4('none');
                setStyle5('none');
                break;
            case "tasktracker":
                setExp(<TaskTracker/>);
                setStyle1('none');
                setStyle2('none');
                setStyle3('none');
                setStyle4('bolded');
                setStyle5('none');
                break;
            case "gitlet":
                setExp(<Gitlet/>);
                setStyle1('none');
                setStyle2('none');
                setStyle3('none');
                setStyle4('none');
                setStyle5('bolded');
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
                    <li className={style4} onClick={() => handleClick("tasktracker", this)}>Task Tracker App</li>
                    {/* <li className={style5} onClick={() => handleClick("gitlet", this)}>Gitlet</li> */}
                </ul>
            </div>
            {exp}
        </div>

        
      );
}


