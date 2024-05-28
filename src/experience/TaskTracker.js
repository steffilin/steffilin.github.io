import React from "react";
import "./Experience.css";
import tasktracker1 from "./images/tasktracker1.png";
import tasktracker2 from "./images/tasktracker2.gif";

function TaskTracker() {
    return (
        <div class="text">
            <p className="expTitle">Task Tracker App - Personal Project</p>
            <ul className="explist">
                <li>Developed an iOS application utilizing Swift to automate task prioritization based on due dates to combat
                    procrastination and facilitate user task optimization</li>
                <li>Designed a high-fidelity prototype using Figma and translated the design into frontend code</li>
                <li>Implemented backend functionality and data persistence utilizing Swift and JSON to store user data for a more
                    personalized user experience</li>
                    
            </ul>
            <div className="expimg-container2">
                
                <img id="website-with-phone" src={tasktracker1}></img>
                <img id="phone-with-website" src={tasktracker2}></img>

            </div>

        </div>
    );
}

export default TaskTracker