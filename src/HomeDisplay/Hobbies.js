import React from "react";
import { useState } from 'react';

import "./MenuBlock.css";
import Climbing from "../hobbies/Climbing";
import Art from "../hobbies/Art";
import Plants from "../hobbies/Plants";





const Hobbies = () => {
    return (
        <div className="container">
            <div className="content">
                <div id="linedetail"></div>
                <h3 id="proj-bookmark" className="head-placement">THINGS I LOVE</h3>
                
                <ChangeExp/>
            </div>
        </div>
        
    )
}

export default Hobbies

function ChangeExp() {
    const [exp, setExp] = useState(<Climbing/>);
    const [style1, setStyle1] = useState('bolded');
    const [style2, setStyle2] = useState('none');
    const [style3, setStyle3] = useState('none');
    // const [style4, setStyle4] = useState('none');
    // const [style5, setStyle5] = useState('none');

    function handleClick(app, elem) {
        switch(app) {
            case "climbing":
                setExp(<Climbing/>);
                setStyle1('bolded');
                setStyle2('none');
                setStyle3('none');
                break;
            case "art":
                setExp(<Art/>);
                setStyle1('none');
                setStyle2('bolded');
                setStyle3('none');
                break;
            case "plants":
                setExp(<Plants/>);
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
        <div className="menu-container">

            <div className="menu">
                <ul>
                    <li className={style1} onClick={() => handleClick("climbing", this)}>Climbing</li>
                    <li className={style2} onClick={() => handleClick("art", this)}>Art</li>
                    <li className={style3} onClick={() => handleClick("plants", this)}>Plants</li>
                </ul>
            </div>
            {exp}
        </div>

        
      );
}


