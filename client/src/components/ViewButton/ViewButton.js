import React from "react";

function ViewButton({link}) {
    return (
        <button type="button" className = 'btn' style={{ float: 'right', backgroundColor: 'blue', color: 'white' }}>
            <a style = {{color: 'white'}} href={link} target='blank'> View</a>
        </button>
    )
}
export default ViewButton;