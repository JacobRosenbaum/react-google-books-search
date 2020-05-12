import React from "react";

function ResultTron({ title, author, description, link, image }) {
    return (
        <div>
            <div>{image}  
            <h1 >{title}</h1></div>
            <h3>{author}</h3>
            <div>{description}</div>
            <div> <a href={link} target = 'blank'> Click here to check out the book</a> </div>
        </div>
    )
}
export default ResultTron;