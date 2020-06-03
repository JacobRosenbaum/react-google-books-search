import React from "react";
import "./viewButton.css"

function ViewButton({link}) {
    return (
        <button id = "viewButton" type="button" className = 'btn' style={{ float: 'right', backgroundColor: 'blue', color: 'white' }}>
            <a style = {{color: 'white'}} href={link} target='blank'> View</a>
        </button>
    )
}
export default ViewButton;