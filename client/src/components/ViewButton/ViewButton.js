import React from "react";

function SaveButton({link}) {
    return (
        <button type="button" className = 'btn' style={{ float: 'right', backgroundColor: 'blue', color: 'white' }}>
            <a style = {{color: 'white'}} href={link} target='blank'> View</a>
        </button>
    )
}
export default SaveButton;