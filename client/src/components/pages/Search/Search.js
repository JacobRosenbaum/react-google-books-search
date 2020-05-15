import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import SearchBox from "../../../components/SearchBox/SearchBox";
import TitleTron from "../../TitleTron/TitleTron";
import "./search.css"

function Search() {
    return (
        <div class = "searchContainer">
            <div class="searchHeader">
                <Header />
            </div>
            <div class="searchBody">
                <TitleTron />
                <SearchBox />
            </div>
        </div>
    )
}
export default Search;