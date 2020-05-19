import React from "react";
import ViewButton from "../ViewButton/ViewButton";

function ResultTron({ title, author, description, image }) {
    return (
        <div>
            <div class="row">

                <div class="col-md-6">
                    <b>{title}</b>
                </div>
                <div class="col-md-6">
                    <ViewButton />
                </div>
            </div>
            <div>written by {author}</div>
            <div class="row">
                <div class="col-md-2">{image}</div>
                <div class="col-md-10">{description}</div>
            </div>
        </div>
    )
}
export default ResultTron;