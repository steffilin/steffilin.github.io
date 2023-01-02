// import React from "react";
import React, { useState } from 'react';

function Message() { 

    const [msg, setMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message was : ${msg}')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Send me a message! <br></br>
                    <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)}></input>
                </label>
                <input type="submit" />
            </form>
        </div>
    ) 
}

export default Message
