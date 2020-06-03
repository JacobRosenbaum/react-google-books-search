import React from "react";
import "./searchButton.css"

function SearchButton() {
    return (
        <button style={{marginBottom: '7px', marginLeft: '7px', backgroundColor: 'red', color: 'white', border: 'white'}} id="searchButton" type="submit" className="btn">
            Search
        </button>
    )
}
export default SearchButton;