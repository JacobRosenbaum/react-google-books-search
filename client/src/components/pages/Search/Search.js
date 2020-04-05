import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import SearchBox from "../../../components/SearchBox/SearchBox";
const apiKey = 'AIzaSyAnyxFFuf-7YVSmLsPkKuvhednON5j9muI';


function Search() {
    return (
        <div>
            <Header />
            <SearchBox />
        </div>
    )
}
export default Search;