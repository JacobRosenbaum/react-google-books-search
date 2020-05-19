import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import SaveBox from "../../SaveBox/SaveBox";
import TitleTron from "../../TitleTron/TitleTron";
import "./saved.css"

function Search() {
    return (
        <div class="saveContainer">
            <div class="saveHeader">
                <Header />
            </div>
            <div class="saveBody">
                <TitleTron />
                <SaveBox />
            </div>
        </div>
    )
}
export default Search;