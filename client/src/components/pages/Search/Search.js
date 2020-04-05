import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import SearchBox from "../../../components/SearchBox/SearchBox";
import TitleTron from "../../TitleTron/TitleTron";
import Results from "../../Results/Results";

function Search() {
    return (
        <div>
            <Header />
            <TitleTron />
            <SearchBox />
            <Results />
        </div>
    )
}
export default Search;