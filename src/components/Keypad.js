// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange()
    {
        console.log("Entering password...")
    }
    
    
    return (
        <div id="root">
            <input type ="Password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;