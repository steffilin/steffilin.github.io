import React from "react";
import "./Projects.css";
import prioritygif from './images/priority-app-gif.gif';
import priorityfigma from './images/priority-app-figma.png';
import gitlet from './images/gitlet.png';

const Projects = () => {
    return (
        <div>
            <div className="proj-head">
                <h3 id="proj-bookmark" className="head-placement">PROJECTS</h3>
            </div>
            <div class="proj-container">
                <div className="proj-box-left" id="proj1">
                    <div className="proj-box">
                        <p className="proj-tit"><b>Task Tracker App</b></p>
                        <ul>
                            <li>An iOS app to organize tasks based on due date</li>
                            <li>Design and code using Figma and XCode SwiftUI</li>
                            <li>Data persistence using JSON</li>
                        </ul>
                    </div>

                    <p id="skills-text">XCode, SwiftUI, Swift, Figma, JSON</p>

                </div>
                
                <img src={prioritygif} alt="prioritygif" id="priority-gif"/>
                <img src={priorityfigma} alt="priority-app-figma" id="priority-figma"/>

                {/* <div className="separator1" id="linedetail"></div>
                <div className="circlesproj">
                    <div className="circproj" id="circ30"></div>
                    <div className="circproj" id="circ50"></div>
                    <div className="circproj" id="circ70"></div>
                </div> */}

                {/* PROJECT 2 */}
                <div className="proj-box-right" id="proj2">
                    <div className="proj-box">
                        <p className="proj-tit"><b>Gitlet</b></p>
                        <ul>
                            <li>A version control system that mimics the basic features of Git</li>
                            <li>Used serialization to store objects in files</li>
                            <li>Integration using graphs, trees, and BFS</li>
                        </ul>
                    </div>

                    <p id="skills-text">Java, Data Structures, Git</p>
                </div>

                <img src={gitlet} alt="gitlet-photo" id="gitlet"/>
            </div>
        </div>
    )
}

export default Projects





{/* <div className="proj-box" id="proj1">
                    <p className="proj-tit"><b>Task Tracker App</b></p>
                    <ul>
                        <li>An iOS app to organize tasks based on due date</li>
                        <li>Design and code using Figma and XCode SwiftUI</li>
                        <li>Data persistence using JSON</li>
                    </ul>
                </div>
                <div className="proj-box" id="proj2">
                    <p className="proj-tit"><b>Gitlet</b></p>
                    <ul>
                        <li>A version control system that mimics the basic features of Git</li>
                        <li>Used serialization to store objects in files</li>
                        <li>Implemented tree structure using Linked Lists and BFS</li>
                    </ul>
                </div>
                <div className="proj-box" id="proj3">
                    <p className="proj-tit"><b>Ataxx Board Game</b></p>
                    <ul>
                        <li>Board game played between 2 players (player with the most pieces 
                            on the board wins)
                        </li>
                        <li>Wrote code for an AI machine using minimax algorithm that a player
                            can play against
                        </li>
                    </ul>
                </div>
                <div className="proj-box" id="proj4">
                    <p className="proj-tit"><b>Enigma Machine</b></p>
                    <ul>
                        <li>Wrote code to simulate an enigma machine</li>
                        <li>Used Java Scanner class to read input from the user/files into the “machine”
                        </li>
                        <li>Handled input errors / throw exception errors</li>
                    </ul>
                </div> */}