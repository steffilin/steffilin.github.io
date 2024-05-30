import React from "react";
import './ArtDisplay.css';
import img1 from './artImages/finalyinyangkoi.jpg';

function ArtDisplay() {
  return (
    <div className="artdisplay-container">
        <div className="artdisplay-content">
            <h3>ART GALLERY</h3>
            <div className="art-display">
                <div className="art-row">
                    <img src={img1}></img>
                </div>

            </div>
        </div>
      
        
        
      
    </div>
  );
}

export default ArtDisplay;
