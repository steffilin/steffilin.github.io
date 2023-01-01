import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div>
            <div className="proj-head">
                <h3 id="proj-bookmark" className="head-placement">Projects</h3>
            </div>
            <div className="projects">
                <div className="proj-box" id="proj1">
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
                </div>
            </div>
        </div>
    )
}

export default Projects