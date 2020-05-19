import React from "react";

function DeleteButton(props) {
    return (
        <button type="button" {...props} className="btn" style = {{float: 'right', backgroundColor: 'red', color: 'white'}}>
            Delete
        </button>
    )
}
export default DeleteButton;