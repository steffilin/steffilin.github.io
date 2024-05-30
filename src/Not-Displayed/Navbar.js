import React from 'react';
import './Navbar.css';
import Pdf from './Resume/Steffi-Lin-Resume.pdf';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#proj-bookmark">Projects</a></li>
                <li><a href = {Pdf} target ="blank">Resume</a></li>
                <li></li>
                {/* <li><a href="art.html">Art</a></li> */}
            </ul>
        </nav>
    )
}

export default Navbar