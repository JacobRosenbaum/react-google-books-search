import React from "react";

function SaveButton(props) {
    return (
        <button  type="button" {...props} className="btn" style = {{float: 'right', backgroundColor: 'green', color: 'white', marginLeft: '5px'}}>
            Save
        </button>
    )
}
export default SaveButton;
