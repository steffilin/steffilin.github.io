import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#proj-bookmark">Projects</a></li>
                {/* <li><a href="#contact-bookmark">Contact</a></li> */}
                {/* <li><a href="art.html">Art</a></li> */}
            </ul>
        </nav>
    )
}

export default Navbar