import React from "react";
import { useState } from 'react';

import "./NavDisplay.css";
import Home from './HomeDisplay/HomeDisplay';
import ArtDisplay from './ArtDisplay/ArtDisplay';

import Resume from './Resume/Steffi-Lin-Resume.pdf';




const NavDisplay = () => {
    return (
        <div className="display-container">
            <Navbar/>
            
        </div>
        
    )
}

export default NavDisplay

function Navbar() {
    const [display, setDisplay] = useState(<Home/>);
    const [style1, setStyle1] = useState('nav-bolded');
    const [style2, setStyle2] = useState('none');
    const [style3, setStyle3] = useState('none');
    const [style4, setStyle4] = useState('none');
    const [style5, setStyle5] = useState('none');

    function handleClick(app, elem) {
        switch(app) {
            case "home":
                setDisplay(<Home/>);
                setStyle1('nav-bolded');
                setStyle2('none');
                setStyle3('none');
                setStyle4('none');
                setStyle5('none');
                break;
            case "art":
                setDisplay(<ArtDisplay/>);
                setStyle1('none');
                setStyle2('nav-bolded');
                setStyle3('none');
                setStyle4('none');
                setStyle5('none');
                break;
            
            
            default:
                // experienceMenu = <AiVocate/>
                break;
        }
        // setExp(<EthiCAL/>);
        // experienceMenu = exp;
    }

    return (
        <div className="nav-container">

            <div className="nav">
                <ul>
                    <li className={style1} onClick={() => handleClick("home", this)}>Home</li>
                    <li className={style2} onClick={() => handleClick("art", this)}>Art</li>
                    <li><a href = {Resume} target ="blank">Resume</a></li>
                    {/* <li className={style4} onClick={() => handleClick("tasktracker", this)}>Task Tracker App</li> */}
                </ul>
            </div>
            {display}
        </div>

        
      );
}


