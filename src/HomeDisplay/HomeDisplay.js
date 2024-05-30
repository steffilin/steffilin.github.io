import React from "react";

import './HomeDisplay.css';
import Intro from './Intro';
import Projects from './Projects';
import Education from './Education';
import Hobbies from './Hobbies';
import Flower from '../Not-Displayed/Flower';

function HomeDisplay() {
  return (
    <div>
      {/* <header className="App-header">
        <Navbar />
      </header> */}
        
        <div><Intro /></div>
        <div><Projects /></div>
        <div><Education /></div>
        <div><Hobbies /></div>
        {/* <div><Flower /></div> */}
        {/* <div><Contact /></div> */}
      
    </div>
  );
}

export default HomeDisplay;
