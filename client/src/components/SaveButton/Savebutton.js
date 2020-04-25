import React from "react";

function SaveButton(props) {
    return (
        <button type="button" {...props} className="btn" style = {{float: 'right', backgroundColor: 'green'}}>
            Save Book
        </button>
    )
}
export default SaveButton;