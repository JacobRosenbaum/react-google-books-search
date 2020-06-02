import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import SaveBox from "../../SaveBox/SaveBox";
import "./saved.css"

function Search() {
    return (
        <div class="saveContainer">
            <div class="saveHeader">
                <Header />
            </div>
            <div class="saveBody">
                <SaveBox />
            </div>
        </div>
    )
}
export default Search;