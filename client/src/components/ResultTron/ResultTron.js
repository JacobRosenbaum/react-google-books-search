import React from "react";

function ResultTron({ title, author, description, link, image }) {
    return (
        <div>
            <div>{image}  <h1 >{title}</h1></div>
           
            <h3>{author}</h3>
            <div>{description}</div>
            <div>Click <a href={link} target = 'blank'>this link</a> to check out the book</div>
        </div>
    )
}
export default ResultTron;