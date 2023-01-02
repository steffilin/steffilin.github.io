// import React from "react";
import React, { useState } from 'react';

const Message = () => { 

    const [msg, setMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message : "' + msg + '" was sent to Steffi!');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Say hello! <br></br>
                    <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)}></input>
                </label>
                <input type="submit" />
            </form>
        </div>
    ) 
}

export default Message
