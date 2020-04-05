import React,{ useState } from "react";
const apiKey = 'AIzaSyAnyxFFuf-7YVSmLsPkKuvhednON5j9muI';

function SearchBox(){
    return(
        <div class = "jumbotron">
            <form type="submit">
            <input id = "searchBox" placeholder = "Search for a Book">

            </input>
            </form>
        </div>
    )
}
export default SearchBox;
