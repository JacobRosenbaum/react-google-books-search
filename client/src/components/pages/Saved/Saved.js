import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import SaveBox from "../../SaveBox/SaveBox";
import TitleTron from "../../TitleTron/TitleTron";

function Search() {
    return (
        <div>
            <Header />
            <TitleTron />
            <SaveBox />
        </div>
    )
}
export default Search;