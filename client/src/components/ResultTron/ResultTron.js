import React from "react";

function ResultTron({ title, author, description, image }) {
    return (
        <div>
            <div> 
            <b>{title}</b>
            </div>
            <div>written by <h7>{author}</h7> </div>
            <div>{image}</div>
            <div>{description}</div>
            
        </div>
    )
}
export default ResultTron;